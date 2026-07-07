import Link from "next/link";

const sections = [
  {
    title: "Foundations",
    items: [
      { label: "Cores",        href: "/foundations/colors",     desc: "Paleta completa: Graphite, Steel Blue, Gold, Teal e estados" },
      { label: "Tipografia",   href: "/foundations/typography", desc: "Inter, Sora, JetBrains Mono — escala e hierarquia" },
      { label: "Espaçamento",  href: "/foundations/spacing",    desc: "Grid de 4px, escala de espaço e layout" },
      { label: "Elevação",     href: "/foundations/elevation",  desc: "Sombras, bordas e camadas de superfície" },
      { label: "Animações",    href: "/foundations/motion",     desc: "Keyframes, durações e curvas de easing" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Botões",      href: "/components/button",  desc: "Primary, Secondary, Ghost, Outline, Danger, Success" },
      { label: "Inputs",      href: "/components/input",   desc: "Text, com ícones, estados de erro e hint" },
      { label: "Cards",       href: "/components/card",    desc: "Default, Elevated, Outlined, Ghost — com glow" },
      { label: "Badges",      href: "/components/badge",   desc: "Todos os variants semânticos e de marca" },
      { label: "Alertas",     href: "/components/alert",   desc: "Info, Success, Warning, Error — com fechar" },
      { label: "Modais",      href: "/components/modal",   desc: "Tamanhos, backdrop, keyboard trap" },
      { label: "Tabelas",     href: "/components/table",   desc: "Cabeçalho, corpo, hover, responsivo" },
    ],
  },
  {
    title: "Tokens",
    items: [
      { label: "CSS Variables", href: "/tokens/css-vars",   desc: "Todas as custom properties — dark e light" },
      { label: "JS Tokens",     href: "/tokens/js-tokens",  desc: "Exportação TypeScript para uso em código" },
      { label: "Tailwind",      href: "/tokens/tailwind",   desc: "Configuração completa do tailwind.config.ts" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-black"
              style={{ background: "linear-gradient(135deg, #C6A96B 0%, #A88B4E 100%)", color: "#0B0D0F" }}
            >
              CDD
            </div>
            <div>
              <h1 className="text-lg font-bold font-display text-[var(--text-primary)]">CDD Design System</h1>
              <p className="text-xs text-[var(--text-tertiary)]">v1.0 — CDD Tech Solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2F9E44]/30 bg-[#2F9E44]/12 px-2.5 py-1 text-xs font-medium text-[#2F9E44]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F9E44]" />
              Stable v1.0
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--border-subtle)] bg-gradient-to-b from-[#1F4B99]/10 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A96B] mb-4">CDD Tech Solutions</p>
          <h2 className="font-display text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
            Design System<br />
            <span style={{ background: "linear-gradient(90deg, #C6A96B, #4FD1C5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              que une todos os produtos
            </span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Tokens, componentes e documentação para garantir que qualquer produto CDD seja reconhecível como CDD — sem exceção.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/foundations/colors"
              className="inline-flex items-center gap-2 rounded-md bg-[#C6A96B] px-5 py-2.5 text-sm font-semibold text-[#0B0D0F] hover:bg-[#D9C08A] transition-colors"
            >
              Explorar Foundations →
            </Link>
            <Link href="/components/button"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-default)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:border-[#C6A96B] hover:text-[#C6A96B] transition-colors"
            >
              Ver Componentes
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {sections.map(section => (
          <div key={section.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-5">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 hover:border-[#C6A96B]/40 hover:bg-[var(--bg-elevated)] transition-all duration-200"
                >
                  <p className="font-semibold text-[var(--text-primary)] group-hover:text-[#C6A96B] transition-colors mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-[var(--text-tertiary)]">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>

      <footer className="border-t border-[var(--border-subtle)] mt-16 py-8 text-center text-sm text-[var(--text-tertiary)]">
        CDD Tech Solutions — Ribeirão Preto, SP •{" "}
        <a href="https://github.com/teixeiraemanuelm-creator/cdd-design-system"
          className="text-[#C6A96B] hover:underline" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}
