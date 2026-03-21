import Link from "next/link";
import { getAllResearch } from "@/lib/research";

export const metadata = {
  title: "Research Library — Cancer Protocol",
  description: "28+ evidence-based research articles supporting the cancer protocol. Deep-dives into each supplement, therapy, and intervention.",
};

export default function ResearchIndexPage() {
  const articles = getAllResearch();

  return (
    <main className="site-container">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <h1>Research Library</h1>
        <p className="subtitle">
          {articles.length} research documents · Each supplement and therapy backed by evidence
        </p>
      </section>

      <div className="research-grid">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/research/${article.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div className="research-card">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="read-more">
                Read full research →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
