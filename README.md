# Espiral da Mudança

Site corporativo institucional para a **Espiral da Mudança** — consultoria moderna de gestão de mudanças, orientada por dados, pessoas e propósito.

---

## Visão Geral

Site single-page bilíngue (PT-BR / EN) com navegação por âncoras, toggle de idioma sem reload de página, animações com Framer Motion e design system próprio.

---

## Tech Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | Framework principal |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [Framer Motion](https://www.framer.com/motion/) | Animações |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de UI |

---

## Brand Identity

- **Nome:** Espiral da Mudança
- **Posicionamento:** Consultoria de gestão de mudanças moderna, orientada por tecnologia
- **Logo:** Espiral animada com gradiente teal + indigo (CSS conic-gradient)
- **Tipografia:**
  - Headings: `Syne` (700–800)
  - Body: `DM Sans` (300–400)

### Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| Accent Primary | `#00C4A1` | Teal — destaques, CTAs |
| Accent Secondary | `#5B6FFF` | Indigo — gradientes, hover |
| Dark BG | `#0D1117` | Fundo de seções escuras |
| Body Text | `#111827` | Texto principal |
| Muted | `#6B7280` | Texto secundário |
| Light Surface | `#F8F9FB` | Fundo de seções claras |

---

## Estrutura de Páginas (Single Page / Âncoras)

| # | Seção | Âncora |
|---|---|---|
| 1 | Navbar (sticky) | — |
| 2 | Hero | `#hero` |
| 3 | Sobre | `#sobre` |
| 4 | Serviços | `#servicos` |
| 5 | Metodologia | `#metodologia` |
| 6 | Cases | `#cases` |
| 7 | Insights | `#insights` |
| 8 | Contato | `#contato` |
| 9 | Footer | — |

---

## Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Methodology.tsx
│   ├── Cases.tsx
│   ├── Insights.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── LanguageToggle.tsx
└── lib/
    ├── i18n.ts               # Strings PT + EN
    └── context/
        └── LanguageContext.tsx
```

---

## i18n (PT-BR / EN)

- Contexto React simples com objetos JSON `pt` e `en`
- Toggle no navbar atualiza todo o conteúdo instantaneamente
- Sem mudança de rota — estado local via `LanguageContext`

---

## Animações

| Elemento | Animação |
|---|---|
| Logo espiral | Rotação CSS contínua (conic-gradient) |
| Navbar | Blur/fade ao scrollar além do hero |
| Hero | Staggered text reveal no load (Framer Motion) |
| Seções | Fade-up no scroll (Framer Motion viewport) |
| Cards de serviço | Hover lift + teal glow border |
| Steps de metodologia | Animação sequencial no scroll |
| Toggle de idioma | Swap suave sem reload |

---

## Métricas Exibidas no Hero

- 200+ projetos
- 15 países
- 94% taxa de adoção
- 12 anos de experiência

---

## Serviços

1. Gestão de Mudança Organizacional
2. Transformação Digital
3. Adoção de Tecnologia
4. Comunicação Estratégica
5. Treinamento & Capacitação
6. Diagnóstico de Prontidão

---

## Metodologia — Abordagem Espiral (5 passos)

1. **Diagnosticar** — Entendemos o ponto de partida
2. **Estratégia** — Desenhamos o caminho
3. **Engajamento** — Ativamos pessoas e lideranças
4. **Execução** — Implementamos com rigor
5. **Sustentação** — Consolidamos e medimos resultados

Referências metodológicas: Prosci ADKAR · Kotter 8-Step · McKinsey 7-S

---

## Cases

| Case | Tag | Resultado |
|---|---|---|
| Migração ERP em Indústria de Manufatura | Digital Transformation | 98% de adoção em 6 meses |
| Reestruturação Cultural Pós-Fusão | Cultural Change | Engajamento +40% |
| Adoção de Plataforma SaaS Global | Technology Adoption | ROI em 4 meses |

---

## Qualidade & Acessibilidade

- Mobile responsive em todas as seções
- HTML semântico + ARIA labels + navegação por teclado
- Sem imagens placeholder — visuais em SVG/CSS puros
- Performance: apenas as bibliotecas listadas no stack

---

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse em [http://localhost:3000](http://localhost:3000).

---

## Referências de Design Estudadas

- [Prosci](https://www.prosci.com) — autoridade metodológica
- [McKinsey](https://www.mckinsey.com) — editorial premium
- [WalkMe](https://www.walkme.com) — hero denso em métricas
- [Accenture](https://www.accenture.com) — tipografia bold, seções escuras
- [Whatfix](https://www.whatfix.com) — estética SaaS clean

---

© 2025 Espiral da Mudança. Todos os direitos reservados.
