"use client";

import { useState } from "react";
import styles from "@/app/features/user-management/team-management.module.css";

const people = [
  {
    id: "operations",
    label: "Operations manager",
    initials: "OM",
    responsibility: "Coordinate customers, work and the service team",
    needs: ["Assigned customer records", "Team schedules", "Service progress"],
    avoid: ["Billing settings", "Website administration", "Security configuration"],
  },
  {
    id: "accounts",
    label: "Accountant",
    initials: "AC",
    responsibility: "Manage invoices, payments and financial documents",
    needs: ["Invoices and payments", "Customer billing details", "Financial exports"],
    avoid: ["Team permissions", "Website content", "Marketing tools"],
  },
  {
    id: "delivery",
    label: "Service team member",
    initials: "ST",
    responsibility: "Complete assigned customer work",
    needs: ["Assigned work", "Relevant customer details", "Progress updates"],
    avoid: ["Other teams’ work", "Business reports", "Workspace settings"],
  },
  {
    id: "freelancer",
    label: "External freelancer",
    initials: "EF",
    responsibility: "Contribute to one limited service engagement",
    needs: ["Selected project", "Required files", "Delivery status"],
    avoid: ["Full customer list", "Internal team data", "Business settings"],
  },
] as const;

export function TeamAccessSimulator() {
  const [selectedId, setSelectedId] = useState<(typeof people)[number]["id"]>("operations");
  const selected = people.find((person) => person.id === selectedId) ?? people[0];

  return (
    <div className={styles.simulator}>
      <div className={styles.personPicker} role="group" aria-label="Select a team member">
        {people.map((person) => (
          <button
            className={person.id === selected.id ? styles.personActive : undefined}
            key={person.id}
            onClick={() => setSelectedId(person.id)}
            type="button"
          >
            <span>{person.initials}</span>
            {person.label}
          </button>
        ))}
      </div>

      <div className={styles.simulatorResult} aria-live="polite">
        <header>
          <span>{selected.initials}</span>
          <div>
            <small>SELECTED TEAM MEMBER</small>
            <h3>{selected.label}</h3>
            <p>{selected.responsibility}</p>
          </div>
        </header>
        <div className={styles.accessColumns}>
          <div>
            <strong>They need</strong>
            <ul>{selected.needs.map((item) => <li key={item}>✓ {item}</li>)}</ul>
          </div>
          <div>
            <strong>They should not receive</strong>
            <ul>{selected.avoid.map((item) => <li key={item}>× {item}</li>)}</ul>
          </div>
        </div>
        <div className={styles.simulatorQuestion}>
          <span>Current-system question</span>
          <strong>Can you configure this confidently without checking multiple plugins?</strong>
        </div>
      </div>
    </div>
  );
}
