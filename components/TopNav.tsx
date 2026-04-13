"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/comics", label: "Comic Portfolio" }
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="top-nav" aria-label="Primary navigation">
      <ul className="top-nav__list">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link href={item.href} className={`top-nav__link${active ? " is-active" : ""}`}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
