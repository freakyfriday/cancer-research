import Link from "next/link";
import { getAllResearchSlugs, getResearchBySlug } from "@/lib/research";
import { notFound } from "next/navigation";
import BackToProtocol from "@/app/components/BackToProtocol";

export async function generateStaticParams() {
  const slugs = getAllResearchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getResearchBySlug(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} — Cancer Protocol Research`,
    description: article.excerpt,
  };
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getResearchBySlug(slug);

  if (!article) notFound();

  return (
    <main className="article-container">
      <BackToProtocol />

      <article
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border-subtle)", display: "flex", gap: 12 }}>
        <BackToProtocol />
        <Link href="/research" className="article-back">
          📚 Research Library
        </Link>
      </div>
    </main>
  );
}
