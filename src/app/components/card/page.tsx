import { DocLayout, Section, CodeBlock, Preview } from "@/app/components";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/Card";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export default function CardPage() {
  return (
    <DocLayout title="Cards" description="4 variants, 3 níveis de padding, glow de marca e composição com header e footer.">
      <Section title="Variants">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(["default","elevated","outlined","ghost"] as const).map(v => (
            <Card key={v} variant={v}>
              <p className="text-xs font-mono text-[var(--text-tertiary)] mb-2">{v}</p>
              <p className="font-semibold text-[var(--text-primary)]">Card {v}</p>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Superfície {v === "default" ? "padrão" : v === "elevated" ? "elevada" : v === "outlined" ? "com borda" : "transparente"}.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Com Glow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card glow="gold"><p className="font-semibold text-[#C6A96B]">Glow Gold</p><p className="text-sm text-[var(--text-secondary)] mt-1">Primário, CTA</p></Card>
          <Card glow="steel"><p className="font-semibold text-[#2D5FBF]">Glow Steel</p><p className="text-sm text-[var(--text-secondary)] mt-1">Info, ação</p></Card>
          <Card glow="teal"><p className="font-semibold text-[#4FD1C5]">Glow Teal</p><p className="text-sm text-[var(--text-secondary)] mt-1">Destaque, acento</p></Card>
        </div>
      </Section>

      <Section title="Composição completa">
        <div className="max-w-sm">
          <Card variant="elevated">
            <CardHeader>
              <div>
                <CardTitle>Ville PDV</CardTitle>
                <CardDescription>Ponto de venda para pequenos negócios</CardDescription>
              </div>
              <Badge variant="success" dot>Ativo</Badge>
            </CardHeader>
            <p className="text-sm text-[var(--text-secondary)]">
              Dashboard, caixa, estoque, sangria e relatórios em um único sistema.
            </p>
            <CardFooter>
              <Button size="sm" variant="outline">Ver detalhes</Button>
              <Button size="sm">Acessar</Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock code={`<Card variant="elevated">
  <CardHeader>
    <div>
      <CardTitle>Ville PDV</CardTitle>
      <CardDescription>Ponto de venda para pequenos negócios</CardDescription>
    </div>
    <Badge variant="success" dot>Ativo</Badge>
  </CardHeader>
  <p>Descrição do produto.</p>
  <CardFooter>
    <Button size="sm" variant="outline">Ver detalhes</Button>
    <Button size="sm">Acessar</Button>
  </CardFooter>
</Card>`} />
      </Section>
    </DocLayout>
  );
}
