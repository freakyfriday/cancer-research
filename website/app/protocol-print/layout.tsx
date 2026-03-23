import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancer Protocol — Print Version",
  description: "Print-friendly version of the cancer protocol.",
};

export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        /* Hide the site header and footer on the print page */
        .site-header, .site-footer { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
