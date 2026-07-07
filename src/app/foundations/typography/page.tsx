import { DocLayout, Section, CodeBlock } from "@/app/components";

const scale = [
  { name: "2xs", size: "10px", lh: "14px", use: "Metadados, timestamps, labels de tabela" },
  { name: "xs",  size: "12px", lh: "16px", use: "Badges, captions, notas de rodapé" },
  { name: "sm",  size: "13px", lh: "18px", use: "Labels de formulário, texto de apoio" },
  { name: "base",size: "15px", lh: "22px", use: "Corpo de texto, parágrafos, listas" },
  { name: "lg",  size: "17px", lh: "24px", use: "Subtítulos, leads, texto de destaque" },
  { name: "xl",  size: "20px", lh: "28px", use: "Títulos de seção, cabeçalhos de card" },
  { name: "2xl", size: "24px", lh: "32px", use: "Títulos de página" },
  { name: "3xl", size: "30px", lh: "38px", use: "Headings de dashboard" },
  { name: "4xl", size: "36px", lh: "44px", use: "Display médio" },
  { name: "5xl", size: "48px", lh: "56px", use: "Display hero, landing pages" },
];

export default function TypographyPage() {
  return (
    <DocLayout title="Tipografia" description="Inter para UI, Sora para display, JetBrains Mono para código e dados.">
      <Section title="Famílias">
        <div className="space-y-4">
          <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
            <p className="text-xs text-[var(--text-tertiary)] mb-2 font-mono">font-sans — Inter</p>
            <p className="text-3xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
              O PDV que cresce com o seu negócio.
            </p>
            <p className="text-base text-[var(--text-secondary)] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Interface, labels, botões, dados — Inter é a família padrão de todo produto CDD.
            </p>
          </div>
          <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
            <p className="text-xs text-[var(--text-tertiary)] mb-2 font-mono">font-display — Sora</p>
            <p className="text-4xl font-bold text-[#C6A96B]" style={{ fontFamily: "Sora, Inter, sans-serif" }}>
              CDD Tech Solutions
            </p>
            <p className="text-base text-[var(--text-secondary)] mt-2">
              Headings de landing page, hero sections, títulos de marca.
            </p>
          </div>
          <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
            <p className="text-xs text-[var(--text-tertiary)] mb-2 font-mono">font-mono — JetBrains Mono</p>
            <p className="text-xl font-medium text-[#4FD1C5]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              R$ 1.234,56 • SKU-0042 • #C6A96B
            </p>
            <p className="text-base text-[var(--text-secondary)] mt-2">
              SKUs, IDs, valores monetários, código, tokens de cor.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Escala tipográfica">
        <div className="space-y-3 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
          {scale.map(s => (
            <div key={s.name} className="flex items-baseline gap-4 border-b border-[var(--border-subtle)] pb-3 last:border-0 last:pb-0">
              <span className="w-10 shrink-0 font-mono text-xs text-[var(--text-tertiary)]">{s.name}</span>
              <span style={{ fontSize: s.size, lineHeight: s.lh }} className="flex-1 text-[var(--text-primary)] truncate">
                CDD Tech Solutions
              </span>
              <span className="text-xs text-[var(--text-tertiary)] shrink-0 hidden sm:block">{s.size}</span>
              <span className="text-xs text-[var(--text-tertiary)] shrink-0 hidden md:block max-w-[200px] truncate">{s.use}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Import (Next.js)">
        <CodeBlock code={`// app/layout.tsx
import { Inter, Sora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora  = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600","700","800"] });

// Ou via CSS (já incluso em globals.css):
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap");`} />
      </Section>
    </DocLayout>
  );
}
