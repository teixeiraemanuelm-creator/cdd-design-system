import { DocLayout, Section, CodeBlock, Preview } from "@/app/components";
import { Badge } from "@/components/Badge";

export default function BadgePage() {
  return (
    <DocLayout title="Badges" description="8 variants semânticos, 2 tamanhos, suporte a dot indicator.">
      <Section title="Todos os variants">
        <Preview>
          {(["primary","secondary","success","warning","error","info","steel","teal"] as const).map(v => (
            <Badge key={v} variant={v}>{v}</Badge>
          ))}
        </Preview>
        <CodeBlock code={`<Badge variant="primary">primary</Badge>
<Badge variant="success">success</Badge>
<Badge variant="warning">warning</Badge>
<Badge variant="error">error</Badge>
<Badge variant="teal">teal</Badge>`} />
      </Section>

      <Section title="Com dot indicator">
        <Preview>
          <Badge variant="success" dot>Online</Badge>
          <Badge variant="warning" dot>Pendente</Badge>
          <Badge variant="error" dot>Erro</Badge>
          <Badge variant="primary" dot>Novo</Badge>
          <Badge variant="steel" dot>Trial</Badge>
        </Preview>
      </Section>

      <Section title="Tamanhos">
        <Preview>
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
        </Preview>
      </Section>

      <Section title="Uso semântico">
        <CodeBlock code={`// Status de assinatura
<Badge variant="success" dot>Ativo</Badge>
<Badge variant="warning" dot>Trial</Badge>
<Badge variant="error" dot>Cancelado</Badge>

// Status de venda
<Badge variant="teal">Concluída</Badge>
<Badge variant="warning">Pendente</Badge>

// Tipo de pagamento
<Badge variant="info">PIX</Badge>
<Badge variant="secondary">Cartão</Badge>`} />
      </Section>
    </DocLayout>
  );
}
