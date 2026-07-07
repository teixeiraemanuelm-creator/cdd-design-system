# CDD Design System v1.0

> Sistema de design corporativo da **CDD Tech Solutions**.  
> Tokens, componentes e documentação para todos os produtos CDD.

## Produtos que usam este Design System

| Produto | Status |
|---|---|
| Ville PDV | ✅ Aplicado |
| Atlas Pericial | 🔄 Migração planejada |
| Proposta Exata | 🔄 Migração planejada |
| ConcretLab | ⏳ Aguardando desenvolvimento |
| Rota RP | ⏳ Aguardando desenvolvimento |

## Paleta de cores

| Nome | Hex | Uso |
|---|---|---|
| Graphite | `#121417` | Fundo principal |
| Concrete Black | `#0B0D0F` | Fundo profundo |
| Steel Blue | `#1F4B99` | Info, links, ação |
| Gold Accent | `#C6A96B` | CTA, identidade da marca |
| Tech Teal | `#4FD1C5` | Acento, destaque |
| Success | `#2F9E44` | OK, aprovação |
| Warning | `#F59F00` | Atenção, pendente |
| Error | `#E03131` | Falha, destrutivo |

## Tipografia

- **UI:** Inter (400, 500, 600, 700)
- **Display:** Sora (600, 700, 800)
- **Mono:** JetBrains Mono (400, 500)

## Estrutura

```
src/
  tokens/
    globals.css    ← CSS custom properties (importar nos produtos)
    index.ts       ← JS/TS tokens
  components/
    Button.tsx
    Input.tsx
    Card.tsx
    Badge.tsx
    Alert.tsx
    Modal.tsx
    Table.tsx
    index.ts       ← exports centralizados
  app/             ← site de documentação (Next.js)
tailwind.config.ts ← config Tailwind com todos os tokens
```

## Como usar em um produto

```css
/* 1. Importe o globals.css */
@import "./cdd-design-system/src/tokens/globals.css";

/* 2. Use os tokens */
background: var(--bg-primary);
color: var(--text-primary);
border-color: var(--border-default);
```

```tsx
/* 3. Use os componentes */
import { Button, Card, Badge } from "./cdd-design-system/src/components";

<Button variant="primary">Confirmar</Button>
<Badge variant="success" dot>Ativo</Badge>
```

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

---

*CDD Tech Solutions — Ribeirão Preto, SP*
