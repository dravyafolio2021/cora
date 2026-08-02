"use client";

import { useEffect, useState } from "react";
import { GET_STARTED_URL } from "@/config/site";

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
];

type GetStartedLinkProps = {
  children: React.ReactNode;
  className?: string;
  placement: string;
};

export function GetStartedLink({ children, className, placement }: GetStartedLinkProps) {
  const [href, setHref] = useState(GET_STARTED_URL);

  useEffect(() => {
    const destination = new URL(GET_STARTED_URL, window.location.origin);
    const current = new URL(window.location.href);

    ATTRIBUTION_KEYS.forEach((key) => {
      const value = current.searchParams.get(key);
      if (value) destination.searchParams.set(key, value);
    });

    destination.searchParams.set("cora_cta", placement);

    setHref(
      destination.origin === window.location.origin
        ? `${destination.pathname}${destination.search}${destination.hash}`
        : destination.toString(),
    );
  }, [placement]);

  return (
    <a className={className} href={href} data-cta-placement={placement}>
      {children}
    </a>
  );
}
