import Link from "next/link";
import type { Comic } from "@/lib/comics";

export function ComicGrid({ comics }: { comics: Comic[] }) {
  if (!comics.length) {
    return (
      <div className="empty-state">
        <h3>No comics yet</h3>
        <p>
          Add a folder inside <code>public/comics</code> and your new comic will appear here automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="comic-grid">
      {comics.map((comic) => (
        <Link key={comic.slug} href={`/comics/${comic.slug}`} className="comic-card">
          <div className="comic-card__image-wrap">
            <img src={comic.coverSrc} alt={comic.title} className="comic-card__image" />
          </div>
          <div className="comic-card__content">
            <div className="comic-card__topline">
              <span className="comic-card__year">{comic.year || "Portfolio"}</span>
            </div>
            <h3>{comic.title}</h3>
            <p>{comic.summary || "Open this project to view pages, cover art, and any attached PDF."}</p>
            {!!comic.tags.length && (
              <div className="tag-list">
                {comic.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
