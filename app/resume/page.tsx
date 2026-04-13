import { SiteFrame } from "@/components/SiteFrame";
import { getResumeExists } from "@/lib/comics";
import { siteConfig } from "@/lib/site-config";

export default async function ResumePage() {
  const resumeExists = await getResumeExists();

  return (
    <SiteFrame>
      <section className="page-section">
        <header className="page-header page-header--split">
          <div>
            <p className="eyebrow">Professional</p>
            <h2>Resume</h2>
          </div>
          <div className="page-header__actions">
            {resumeExists ? (
              <a href="/resume.pdf" className="primary-button" target="_blank" rel="noreferrer">Open PDF</a>
            ) : (
              <span className="inline-note">Add resume.pdf in /public</span>
            )}
          </div>
        </header>

        <p className="section-description">{siteConfig.resumeSummary.intro}</p>

        <div className="resume-grid">
          <article className="timeline-card">
            <h3>Experience</h3>
            <div className="timeline-list">
              {siteConfig.resumeSummary.experience.map((item) => (
                <div key={`${item.title}-${item.period}`} className="timeline-item">
                  <span className="timeline-item__dot" />
                  <div>
                    <h4>{item.title}</h4>
                    <p className="timeline-item__period">{item.period}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="timeline-card">
            <h3>Education</h3>
            <div className="timeline-list">
              {siteConfig.resumeSummary.education.map((item) => (
                <div key={`${item.title}-${item.period}`} className="timeline-item">
                  <span className="timeline-item__dot" />
                  <div>
                    <h4>{item.title}</h4>
                    <p className="timeline-item__period">{item.period}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="page-section">
        <header className="section-subheader">
          <h3>Skills</h3>
        </header>
        <div className="tag-list tag-list--large">
          {siteConfig.resumeSummary.skills.map((skill) => (
            <span key={skill} className="tag-pill tag-pill--large">{skill}</span>
          ))}
        </div>
      </section>

      <section className="page-section">
        <header className="section-subheader">
          <h3>Resume Preview</h3>
        </header>
        {resumeExists ? (
          <div className="resume-preview">
            <iframe src="/resume.pdf" title="Resume preview" className="resume-preview__frame" />
          </div>
        ) : (
          <div className="empty-state">
            <h3>No resume PDF yet</h3>
            <p>Replace this state by adding <code>public/resume.pdf</code>. The page will render it automatically.</p>
          </div>
        )}
      </section>
    </SiteFrame>
  );
}
