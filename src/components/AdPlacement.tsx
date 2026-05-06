import { useEffect, useRef } from "react";

interface AdPlacementProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * Google AdSense ad placement component.
 * Set VITE_ADSENSE_PUB_ID in env to activate ads.
 * Without it, renders a subtle placeholder (invisible to users).
 */
export function AdPlacement({ slot, format = "auto", className = "" }: AdPlacementProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pubId = import.meta.env.VITE_ADSENSE_PUB_ID;

  useEffect(() => {
    if (!pubId) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, [pubId]);

  if (!pubId) {
    // No pub ID = no visible ad placeholder
    return null;
  }

  return (
    <div ref={adRef} className={`ad-placement ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={pubId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
