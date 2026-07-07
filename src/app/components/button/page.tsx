"use client";
import { useState } from "react";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { DocLayout, Section, CodeBlock, Preview } from "@/app/components";
import { Button } from "@/components/Button";

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);
  const simulate = () => { setLoading(true); setTimeout(() => setLoading(false), 2000); };

  return (
    <DocLayout title="Botões" description="6 variants, 5 tamanhos, estado de loading, acessibilidade completa.">
      <Section title="Variants">
        <Preview>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </Preview>
        <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>`} />
      </Section>

      <Section title="Tamanhos">
        <Preview>
          <Button size="xs">XSmall</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">XLarge</Button>
        </Preview>
      </Section>

      <Section title="Com ícones e loading">
        <Preview>
          <Button><Plus size={16} />Novo produto</Button>
          <Button variant="danger"><Trash2 size={16} />Deletar</Button>
          <Button loading={loading} onClick={simulate}>
            {loading ? "Salvando..." : "Salvar alterações"}
          </Button>
        </Preview>
        <CodeBlock code={`<Button loading={isLoading} onClick={handleSave}>
  {isLoading ? "Salvando..." : "Salvar alterações"}
</Button>`} />
      </Section>

      <Section title="Desabilitado e fullWidth">
        <Preview>
          <Button disabled>Desabilitado</Button>
          <Button fullWidth>Full Width</Button>
        </Preview>
      </Section>
    </DocLayout>
  );
}
