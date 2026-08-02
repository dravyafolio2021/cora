"use client";

import { useMemo, useState } from "react";
import styles from "@/app/features/user-management/team-management.module.css";

const presets = {
  free: { label: "Free-plugin stack", software: 0, developerHours: 3, ownerHours: 5, staffHours: 5, recovery: 5000 },
  paid: { label: "Paid-plugin stack", software: 15000, developerHours: 2, ownerHours: 3, staffHours: 3, recovery: 2000 },
  unsupported: { label: "Unsupported stack", software: 1000, developerHours: 5, ownerHours: 6, staffHours: 7, recovery: 15000 },
} as const;

type PresetKey = keyof typeof presets;

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function RangeField({ label, value, suffix, max, step = 1, onChange }: {
  label: string;
  value: number;
  suffix: string;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className={styles.rangeField}>
      <span><b>{label}</b><strong>{value.toLocaleString("en-IN")}{suffix}</strong></span>
      <input type="range" min="0" max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </label>
  );
}

export function TrueCostCalculator() {
  const [presetKey, setPresetKey] = useState<PresetKey>("free");
  const [software, setSoftware] = useState<number>(presets.free.software);
  const [developerHours, setDeveloperHours] = useState<number>(presets.free.developerHours);
  const [ownerHours, setOwnerHours] = useState<number>(presets.free.ownerHours);
  const [staffHours, setStaffHours] = useState<number>(presets.free.staffHours);
  const [recovery, setRecovery] = useState<number>(presets.free.recovery);

  const setPreset = (key: PresetKey) => {
    const preset = presets[key];
    setPresetKey(key);
    setSoftware(preset.software);
    setDeveloperHours(preset.developerHours);
    setOwnerHours(preset.ownerHours);
    setStaffHours(preset.staffHours);
    setRecovery(preset.recovery);
  };

  const totals = useMemo(() => {
    const developer = developerHours * 12 * 1000;
    const owner = ownerHours * 12 * 500;
    const staff = staffHours * 12 * 250;
    return { developer, owner, staff, total: software + developer + owner + staff + recovery };
  }, [developerHours, ownerHours, recovery, software, staffHours]);

  return (
    <div className={styles.calculator}>
      <div className={styles.presetTabs} role="group" aria-label="Choose a tool-stack scenario">
        {(Object.keys(presets) as PresetKey[]).map((key) => (
          <button className={key === presetKey ? styles.presetActive : undefined} key={key} onClick={() => setPreset(key)} type="button">
            {presets[key].label}
          </button>
        ))}
      </div>

      <div className={styles.calculatorBody}>
        <div className={styles.calculatorControls}>
          <RangeField label="Annual software spend" value={software} suffix=" ₹" max={50000} step={1000} onChange={setSoftware} />
          <RangeField label="Developer maintenance" value={developerHours} suffix=" hrs/month" max={15} onChange={setDeveloperHours} />
          <RangeField label="Owner administration" value={ownerHours} suffix=" hrs/month" max={20} onChange={setOwnerHours} />
          <RangeField label="Team follow-up" value={staffHours} suffix=" hrs/month" max={25} onChange={setStaffHours} />
          <RangeField label="Recovery and disruption buffer" value={recovery} suffix=" ₹" max={50000} step={1000} onChange={setRecovery} />
        </div>

        <div className={styles.costResult}>
          <small>ILLUSTRATIVE ANNUAL COST</small>
          <strong>{currency.format(totals.total)}</strong>
          <p>A ₹0 plugin bill does not necessarily mean a ₹0 operating cost.</p>
          <dl>
            <div><dt>Software</dt><dd>{currency.format(software)}</dd></div>
            <div><dt>Developer time</dt><dd>{currency.format(totals.developer)}</dd></div>
            <div><dt>Owner time</dt><dd>{currency.format(totals.owner)}</dd></div>
            <div><dt>Team time</dt><dd>{currency.format(totals.staff)}</dd></div>
            <div><dt>Risk buffer</dt><dd>{currency.format(recovery)}</dd></div>
          </dl>
          <small>Editable assumptions—not a universal savings claim.</small>
        </div>
      </div>
    </div>
  );
}
