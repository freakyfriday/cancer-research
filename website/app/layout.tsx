import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Cancer Protocol — Evidence-Based Integrative Strategy",
  description:
    "A comprehensive, research-backed cancer protocol combining supplements, therapies, and lifestyle interventions. Each protocol item is linked to its supporting research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="site-logo">
              🧬 <span>Cancer Protocol</span>
            </Link>
            <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ul className="nav-links">
                <li>
                  <Link href="/">Protocol</Link>
                </li>
                <li>
                  <Link href="/research">Research</Link>
                </li>
              </ul>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="site-container">
            Protocol compiled March 2026 · Based on 28+ research documents · For
            medical professional review
          </div>
        </footer>
      </body>
    </html>
  );
}
