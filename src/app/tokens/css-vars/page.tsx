import { DocLayout, Section, CodeBlock } from "@/app/components";

export default function CssVarsPage() {
  return (
    <DocLayout title="CSS Variables" description="Todas as custom properties disponíveis para uso nos produtos CDD.">
      <Section title="Como importar">
        <CodeBlock code={`/* No globals.css do seu produto: */
@import url("https://raw.githubusercontent.com/teixeiraemanuelm-creator/cdd-design-system/main/src/tokens/globals.css");

/* Ou copie o conteúdo de src/tokens/globals.css para seu projeto */`} />
      </Section>

      <Section title="Backgrounds">
        <CodeBlock code={`--bg-base:      #0B0D0F;  /* Fundo mais profundo */
--bg-primary:   #121417;  /* Fundo principal */
--bg-card:      #1A1E23;  /* Cards e superfícies */
--bg-elevated:  #222830;  /* Superfície elevada */
--bg-hover:     #2C3340;  /* Estado hover */`} />
      </Section>

      <Section title="Texto">
        <CodeBlock code={`--text-primary:   #F4F6F8;  /* Título, dado crítico */
--text-secondary: #9AA3AE;  /* Descrições, labels */
--text-tertiary:  #616B77;  /* Placeholder, metadado */
--text-disabled:  #404850;  /* Desabilitado */`} />
      </Section>

      <Section title="Marca">
        <CodeBlock code={`--cdd-gold:        #C6A96B;  /* Primário — CTA, foco, identidade */
--cdd-gold-light:  #D9C08A;
--cdd-gold-dark:   #A88B4E;
--cdd-steel:       #1F4B99;  /* Info, links, ação secundária */
--cdd-steel-light: #2D5FBF;
--cdd-teal:        #4FD1C5;  /* Acento, destaque, métricas */
--cdd-teal-light:  #76DDD4;`} />
      </Section>

      <Section title="Estados">
        <CodeBlock code={`--success:        #2F9E44;
--success-bg:     rgba(47,158,68,0.12);
--success-border: rgba(47,158,68,0.25);
--warning:        #F59F00;
--warning-bg:     rgba(245,159,0,0.12);
--error:          #E03131;
--error-bg:       rgba(224,49,49,0.12);`} />
      </Section>

      <Section title="Aplicar tema claro">
        <CodeBlock code={`/* No elemento raiz ou no toggle: */
<html class="light">

/* Os tokens de fundo e texto invertem automaticamente */
/* --bg-primary muda de #121417 para #F8F9FA */
/* --text-primary muda de #F4F6F8 para #121417 */`} />
      </Section>
    </DocLayout>
  );
}
