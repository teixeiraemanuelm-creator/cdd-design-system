"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const nav = [
  {
    group: "Foundations",
    links: [
      { label: "Cores",       href: "/foundations/colors" },
      { label: "Tipografia",  href: "/foundations/typography" },
      { label: "Espaçamento", href: "/foundations/spacing" },
      { label: "Elevação",    href: "/foundations/elevation" },
      { label: "Animações",   href: "/foundations/motion" },
    ],
  },
  {
    group: "Components",
    links: [
      { label: "Botões",  href: "/components/button" },
      { label: "Inputs",  href: "/components/input" },
      { label: "Cards",   href: "/components/card" },
      { label: "Badges",  href: "/components/badge" },
      { label: "Alertas", href: "/components/alert" },
      { label: "Modais",  href: "/components/modal" },
      { label: "Tabelas", href: "/components/table" },
    ],
  },
  {
    group: "Tokens",
    links: [
      { label: "CSS Variables", href: "/tokens/css-vars" },
      { label: "JS Tokens",     href: "/tokens/js-tokens" },
      { label: "Tailwind",      href: "/tokens/tailwind" },
    ],
  },
];

export function DocLayout({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  const path = usePathname();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 border-r border-[var(--border-subtle)] bg-[var(--bg-base)] overflow-y-auto">
        <div className="px-5 py-5 border-b border-[var(--border-subtle)]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-black shrink-0"
              style={{ background: "linear-gradient(135deg, #C6A96B, #A88B4E)", color: "#0B0D0F" }}>
              CDD
            </div>
            <span className="text-sm font-bold text-[var(--text-primary)]">Design System</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-6">
          {nav.map(section => (
            <div key={section.group}>
              <p className="text-2xs font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-2 px-2">
                {section.group}
              </p>
              <ul className="space-y-0.5">
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-sm px-3 py-1.5 text-sm transition-colors",
                        path === link.href
                          ? "bg-[#C6A96B]/15 text-[#C6A96B] font-medium"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="lg:pl-64 flex-1 p-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">{title}</h1>
          {description && <p className="mt-2 text-base text-[var(--text-secondary)]">{description}</p>}
        </div>
        {children}
      </main>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-subtle)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] p-4 text-sm font-mono text-[#4FD1C5] overflow-x-auto mt-3">
      <code>{code}</code>
    </pre>
  );
}

export function Preview({ children, dark = true }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={cn(
      "rounded-md border border-[var(--border-default)] p-6 flex flex-wrap gap-4 items-center",
      dark ? "bg-[var(--bg-card)]" : "bg-white"
    )}>
      {children}
    </div>
  );
}
