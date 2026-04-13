import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/SiteFrame";
import { getAllComics, getComicBySlug } from "@/lib/comics";

export async function generateStaticParams() {
  const comics = await getAllComics();
  return comics.map((comic) => ({ slug: comic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comic = await getComicBySlug(slug);
  if (!comic) return { title: "Comic Not Found" };

  return {
    title: `${comic.title} | Comic Portfolio`,
    description: comic.summary || `Read ${comic.title} from the comic portfolio.`
  };
}

export default async function ComicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comic = await getComicBySlug(slug);
  if (!comic) notFound();

  return (
    <SiteFrame>
      <section className="page-section">
        <Link href="/comics" className="back-link">← Back to comic portfolio</Link>

        <div className="comic-hero">
          <div className="comic-hero__cover">
            <img src={comic.coverSrc} alt={comic.title} />
          </div>
          <div className="comic-hero__content">
            <p className="eyebrow">Comic Project</p>
            <h2>{comic.title}</h2>
            {comic.summary ? <p className="section-description">{comic.summary}</p> : null}

            <div className="tag-list">
              {comic.year ? <span className="tag-pill">{comic.year}</span> : null}
              {comic.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
              {comic.pageSrcs.length ? <span className="tag-pill">{comic.pageSrcs.length} pages</span> : null}
            </div>

            {comic.pdfSrc ? (
              <a href={comic.pdfSrc} className="primary-button" target="_blank" rel="noreferrer">Open PDF Version</a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="page-section">
        <header className="section-subheader">
          <h3>Pages</h3>
        </header>
        {comic.pageSrcs.length ? (
          <div className="comic-pages">
            {comic.pageSrcs.map((pageSrc, index) => (
              <figure key={pageSrc} className="comic-page-card">
                <img src={pageSrc} alt={`${comic.title} page ${index + 1}`} className="comic-page-card__image" />
              </figure>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No page images found</h3>
            <p>Add numbered page images like 01.jpg, 02.jpg, 03.jpg in this comic folder.</p>
          </div>
        )}
      </section>
    </SiteFrame>
  );
}
