"use client";
import { useState } from "react";
import { DocLayout, Section, CodeBlock } from "@/app/components";
import { Alert } from "@/components/Alert";

export default function AlertPage() {
  const [open, setOpen] = useState(true);
  return (
    <DocLayout title="Alertas" description="4 variants semânticos com suporte a título, fechar e ícone customizado.">
      <Section title="Todos os variants">
        <div className="space-y-3">
          <Alert variant="info" title="Informação">Sua assinatura Trial expira em 7 dias. Faça upgrade para continuar usando.</Alert>
          <Alert variant="success" title="Venda registrada">R$ 142,50 recebido via PIX. Cupom disponível para impressão.</Alert>
          <Alert variant="warning" title="Estoque baixo">3 produtos com estoque abaixo do mínimo configurado.</Alert>
          <Alert variant="error" title="Erro ao abrir caixa">Nenhum caixa aberto para esta loja. Abra o caixa antes de vender.</Alert>
        </div>
      </Section>

      <Section title="Com botão fechar">
        {open
          ? <Alert variant="info" title="Novidade" onClose={() => setOpen(false)}>
              Você pode fechar este alerta clicando no X ao lado.
            </Alert>
          : <button onClick={() => setOpen(true)} className="text-sm text-[#C6A96B] hover:underline">
              Reabrir alerta
            </button>
        }
        <CodeBlock code={`<Alert variant="info" title="Título" onClose={() => setOpen(false)}>
  Mensagem do alerta aqui.
</Alert>`} />
      </Section>
    </DocLayout>
  );
}
