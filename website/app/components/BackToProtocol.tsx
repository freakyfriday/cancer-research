"use client";

import { useRouter } from "next/navigation";

/**
 * Uses router.back() to return to the protocol page,
 * which preserves the browser's native scroll restoration.
 * Falls back to navigating to "/" if there's no history.
 */
export default function BackToProtocol({ label = "← Back to Protocol" }: { label?: string }) {
  const router = useRouter();

  return (
    <button
      className="article-back"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }}
    >
      {label}
    </button>
  );
}
