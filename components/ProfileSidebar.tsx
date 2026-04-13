import { siteConfig } from "@/lib/site-config";

export function ProfileSidebar() {
  return (
    <aside className="profile-card">
      <div className="profile-card__hero">
        <img src="/avatar.svg" alt={siteConfig.name} className="profile-card__avatar" />
        <h1 className="profile-card__name">{siteConfig.name}</h1>
        <p className="profile-card__role">{siteConfig.role}</p>
      </div>

      <div className="separator" />

      <div className="profile-card__meta">
        <div className="info-row">
          <span className="info-row__label">Email</span>
          <a href={`mailto:${siteConfig.email}`} className="info-row__value">{siteConfig.email}</a>
        </div>
        <div className="info-row">
          <span className="info-row__label">Phone</span>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="info-row__value">{siteConfig.phone}</a>
        </div>
        <div className="info-row">
          <span className="info-row__label">Location</span>
          <span className="info-row__value">{siteConfig.location}</span>
        </div>
        <div className="info-row">
          <span className="info-row__label">Status</span>
          <span className="info-row__value">{siteConfig.availability}</span>
        </div>
      </div>

      <div className="separator" />

      <div className="social-links">
        {siteConfig.socialLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="social-links__item">
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
