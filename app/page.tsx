import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <SiteFrame>
      <section className="page-section">
        <header className="page-header">
          <div>
            <p className="eyebrow">Introduction</p>
            <h2>About</h2>
          </div>
        </header>

        <div className="intro-card">
          <div>
            <p className="intro-card__lead">{siteConfig.intro}</p>
            <div className="rich-text">
              {siteConfig.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="hero-actions">
            <a href="/resume" className="primary-button">View Resume</a>
            <a href="/comics" className="secondary-button">View Comic Portfolio</a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <header className="section-subheader">
          <h3>What This Site Covers</h3>
        </header>
        <div className="feature-grid">
          {siteConfig.highlights.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-card__icon">✦</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
