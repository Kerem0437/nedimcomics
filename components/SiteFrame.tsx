import type { ReactNode } from "react";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { TopNav } from "@/components/TopNav";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <main className="site-shell">
      <ProfileSidebar />
      <section className="content-panel">
        <TopNav />
        <div className="content-panel__body">{children}</div>
      </section>
    </main>
  );
}
