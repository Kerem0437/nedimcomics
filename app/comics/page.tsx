import { ComicGrid } from "@/components/ComicGrid";
import { SiteFrame } from "@/components/SiteFrame";
import { getAllComics } from "@/lib/comics";

export default async function ComicsPage() {
  const comics = await getAllComics();

  return (
    <SiteFrame>
      <section className="page-section">
        <header className="page-header">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Comic Portfolio</h2>
          </div>
        </header>
        <p className="section-description">
          This page reads folders from <code>public/comics</code>. Add a new comic folder, commit it to GitHub, and it will show up after the next deploy.
        </p>
      </section>

      <section className="page-section">
        <ComicGrid comics={comics} />
      </section>
    </SiteFrame>
  );
}
