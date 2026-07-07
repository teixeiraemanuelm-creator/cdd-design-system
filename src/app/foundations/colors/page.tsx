import { DocLayout, Section, CodeBlock } from "@/app/components";

const palette = [
  { name: "Graphite",      hex: "#121417", token: "--bg-primary",    use: "Fundo principal de todos os apps" },
  { name: "Concrete Black",hex: "#0B0D0F", token: "--bg-base",       use: "Fundo mais profundo, barras laterais" },
  { name: "Steel Blue",    hex: "#1F4B99", token: "--cdd-steel",      use: "Informação, links, ação secundária" },
  { name: "Gold Accent",   hex: "#C6A96B", token: "--primary",        use: "CTA principal, foco, identidade da marca" },
  { name: "Tech Teal",     hex: "#4FD1C5", token: "--accent",         use: "Destaque, métricas, interação ativa" },
  { name: "Success",       hex: "#2F9E44", token: "--success",        use: "Confirmação, status OK, aprovação" },
  { name: "Warning",       hex: "#F59F00", token: "--warning",        use: "Atenção, alertas moderados, pendente" },
  { name: "Error",         hex: "#E03131", token: "--error",          use: "Erro, falha, ação destrutiva" },
];

const surfaces = [
  { name: "Surface 0", hex: "#0B0D0F", token: "--bg-base" },
  { name: "Surface 1", hex: "#121417", token: "--bg-primary" },
  { name: "Surface 2", hex: "#1A1E23", token: "--bg-card" },
  { name: "Surface 3", hex: "#222830", token: "--bg-elevated" },
  { name: "Surface 4", hex: "#2C3340", token: "--bg-hover" },
];

export default function ColorsPage() {
  return (
    <DocLayout title="Cores" description="Paleta completa da CDD Tech Solutions — primitivos, semânticos e escala de superfície.">
      <Section title="Paleta de Marca">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {palette.map(c => (
            <div key={c.hex} className="flex items-center gap-4 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
              <div
                className="h-14 w-14 rounded-md shrink-0 border border-black/10"
                style={{ background: c.hex }}
                title={c.hex}
              />
              <div className="min-w-0">
                <p className="font-semibold text-[var(--text-primary)]">{c.name}</p>
                <p className="text-xs font-mono text-[#4FD1C5]">{c.hex}</p>
                <p className="text-xs font-mono text-[var(--text-tertiary)]">{c.token}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">{c.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Escala de Superfície (Dark Theme)">
        <div className="rounded-md overflow-hidden border border-[var(--border-subtle)]">
          {surfaces.map((s, i) => (
            <div key={s.token} className="flex items-center gap-4 p-4 border-b border-[var(--border-subtle)] last:border-0"
              style={{ background: s.hex }}>
              <div className="w-8 h-8 rounded border border-white/10 shrink-0" style={{ background: s.hex }} />
              <div>
                <p className="font-medium text-[var(--text-primary)] text-sm">{s.name}</p>
                <p className="text-xs font-mono text-[var(--text-tertiary)]">{s.token} — {s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Uso correto">
        <CodeBlock code={`/* Sempre via token, nunca hardcoded */

/* ✅ Correto */
color: var(--text-primary);
background: var(--bg-card);
border-color: var(--border-default);

/* ❌ Errado */
color: #F4F6F8;
background: #1A1E23;`} />
      </Section>
    </DocLayout>
  );
}
