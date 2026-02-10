# 📁 Estrutura do Projeto - Portfolio Pedro Tunes

## 🎯 Visão Geral

Este documento explica a organização e propósito de cada arquivo e pasta do projeto.

```
portfolio-pedro/
├── 📁 public/              # Arquivos estáticos públicos
│   ├── vite.svg           # Logo do Vite
│   └── favicon.ico        # Ícone do site (adicione o seu)
│
├── 📁 src/                # Código fonte principal
│   ├── 📁 components/     # Componentes React
│   │   ├── Navigation.tsx           # Menu de navegação
│   │   ├── Navigation.css          
│   │   ├── Hero.tsx                # Seção inicial (About)
│   │   ├── Hero.css
│   │   ├── ProjectCard.tsx         # Card individual de projeto
│   │   ├── ProjectCard.css
│   │   ├── ProjectModal.tsx        # Modal com detalhes do projeto
│   │   ├── ProjectModal.css
│   │   ├── Projects.tsx            # Seção de projetos
│   │   ├── Projects.css
│   │   ├── Contact.tsx             # Seção de contatos
│   │   ├── Contact.css
│   │   └── index.ts                # Exportação centralizada
│   │
│   ├── 📁 data/           # Dados estáticos
│   │   ├── projects.ts             # Lista de todos os projetos
│   │   └── contacts.ts             # Informações de contato
│   │
│   ├── 📁 hooks/          # Custom React Hooks
│   │   └── useCustomHooks.ts       # useScrollSpy, useMediaQuery, useLocalStorage
│   │
│   ├── 📁 types/          # Definições TypeScript
│   │   └── index.ts                # Interfaces e tipos
│   │
│   ├── 📁 utils/          # Funções utilitárias
│   │   └── helpers.ts              # Funções auxiliares
│   │
│   ├── 📁 styles/         # Estilos globais
│   │   └── App.css                 # Variáveis CSS e estilos base
│   │
│   ├── App.tsx            # Componente principal da aplicação
│   └── main.tsx           # Ponto de entrada do React
│
├── index.html             # HTML base
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── tsconfig.node.json     # Config TypeScript para Node
├── vite.config.ts         # Configuração do Vite
├── .eslintrc.cjs          # Configuração ESLint
├── .gitignore             # Arquivos ignorados pelo Git
├── vercel.json            # Configuração de deploy Vercel
├── README.md              # Documentação principal
└── SETUP.md               # Guia de configuração
```

## 📋 Detalhamento dos Arquivos

### 🎨 Components

#### Navigation.tsx
**Propósito**: Menu de navegação responsivo com hamburger

**Responsabilidades**:
- Menu lateral animado
- Botão hamburger interativo
- Links de navegação suave (smooth scroll)
- Indicador de seção ativa

**Props**:
```typescript
interface NavigationProps {
  activeSection: string;  // ID da seção ativa atual
}
```

#### Hero.tsx
**Propósito**: Seção de apresentação inicial

**Conteúdo**:
- Nome e saudação
- Botão de contato (CTA)
- Descrição "Sobre mim"
- Animações de entrada

#### ProjectCard.tsx
**Propósito**: Card visual de cada projeto

**Props**:
```typescript
interface ProjectCardProps {
  project: Project;      // Dados do projeto
  onClick: () => void;   // Handler para abrir modal
}
```

**Features**:
- Imagem de background
- Nome do projeto
- Ícones de tecnologias
- Hover effects

#### ProjectModal.tsx
**Propósito**: Modal com detalhes completos do projeto

**Props**:
```typescript
interface ProjectModalProps {
  project: Project | null;  // Projeto selecionado
  onClose: () => void;      // Handler para fechar
}
```

**Conteúdo**:
- Descrição completa
- Imagem grande
- Links (demo e repositório)
- Botão de fechar

#### Projects.tsx
**Propósito**: Gerencia todas as seções de projetos

**Responsabilidades**:
- Grid de projetos em destaque
- Grid de todos os projetos
- Estado do modal (abrir/fechar)
- Animações stagger

#### Contact.tsx
**Propósito**: Seção de informações de contato

**Conteúdo**:
- Cards para cada tipo de contato
- Links externos
- Ícones animados
- Grid responsivo

### 📊 Data

#### projects.ts
**Estrutura**:
```typescript
{
  id: number;              // ID único
  name: string;            // Nome do projeto
  description: string;     // Descrição completa
  technologies: Technology[];  // Array de techs
  imageUrl: string;        // URL da imagem
  demoUrl?: string;        // Link demo (opcional)
  repoUrl?: string;        // Link GitHub (opcional)
  status: 'completed' | 'in-progress';
  featured?: boolean;      // Aparece em destaque
}
```

#### contacts.ts
**Estrutura**:
```typescript
{
  type: 'email' | 'linkedin' | 'github';
  label: string;           // Label visual
  value: string;           // Valor exibido
  url: string;             // Link/href
  icon: string;            // Classe do ícone
}
```

### 🪝 Hooks

#### useScrollSpy
**Propósito**: Detecta qual seção está visível

**Uso**:
```typescript
const activeSection = useScrollSpy(['about', 'destaque', 'projetos', 'contato']);
```

**Retorno**: ID da seção ativa como string

#### useMediaQuery
**Propósito**: Queries responsivas em JavaScript

**Uso**:
```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
```

**Retorno**: boolean

#### useLocalStorage
**Propósito**: Gerencia localStorage com tipagem

**Uso**:
```typescript
const [value, setValue] = useLocalStorage<string>('key', 'default');
```

### 🔧 Utils

#### helpers.ts

**getTechIcon**: Mapeia tecnologia para classe de ícone
```typescript
getTechIcon('react') // retorna 'ti-brand-react'
```

**getOrCreateUserId**: Gera/recupera UUID único do usuário

**sendAnalytics**: Envia dados de visita

**preloadProjects**: Faz preload de projetos hospedados

### 📐 Types

#### index.ts
Define todas as interfaces e tipos TypeScript:

- `Project`: Estrutura de um projeto
- `Technology`: União de strings de tecnologias
- `ContactInfo`: Estrutura de contato

### 🎨 Styles

#### App.css
Contém:
- CSS Variables (cores, fontes, espaçamentos)
- Reset CSS básico
- Estilos de scrollbar
- Estilos de seleção
- Media queries globais

## 🔄 Fluxo de Dados

```
main.tsx
  └─> App.tsx
       ├─> Navigation (activeSection)
       │    └─ useScrollSpy
       │
       ├─> Hero
       │
       ├─> Projects
       │    ├─> ProjectCard (cada projeto)
       │    └─> ProjectModal (projeto selecionado)
       │
       └─> Contact
```

## 🎬 Ciclo de Vida

1. **Carregamento Inicial** (`main.tsx`)
   - React monta no DOM
   - App.tsx é renderizado

2. **App.tsx** (useEffect)
   - Envia analytics
   - Inicia preload de projetos
   - Configura interval de preload

3. **Navigation**
   - Hook detecta scroll
   - Atualiza seção ativa
   - Menu se fecha ao clicar

4. **Interação com Projetos**
   - Usuário clica em card
   - Estado atualiza (selectedProject)
   - Modal abre com animação
   - Usuário clica fora ou no X
   - Modal fecha com animação

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
Base: < 768px
Tablet: 768px - 968px
Desktop: > 968px
```

### Ajustes por Componente

**Navigation**:
- Mobile: Menu overlay full-screen
- Desktop: Menu lateral compacto

**Hero**:
- Mobile: Grid 1 coluna
- Desktop: Grid 2 colunas

**Projects**:
- Mobile: 1 card por linha
- Tablet: 2 cards por linha
- Desktop: Auto-fit (min 350px)

**Contact**:
- Mobile: 1 card por linha
- Desktop: Grid auto-fit

## 🎨 Sistema de Design

### Cores
```css
--color-bg: #0c0c0b        /* Fundo principal */
--color-text: #fff         /* Texto */
--color-accent: #4a9eff    /* Destaque (azul) */
--color-secondary: #141413 /* Secundário */
--color-hover: #f5f5ef     /* Hover (claro) */
```

### Tipografia
- Display: Anton SC (títulos grandes)
- Body: Tomorrow (texto geral)

### Espaçamentos
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 2rem     /* 32px */
--spacing-lg: 4rem     /* 64px */
--spacing-xl: 6rem     /* 96px */
```

## 🚀 Performance

### Otimizações Implementadas

1. **Lazy Loading**: Modal só renderiza quando necessário
2. **Memoization**: Componentes otimizados com React
3. **CSS Variables**: Performance de tema
4. **Framer Motion**: Animações em GPU
5. **Preload**: Projetos carregam em background

### Lighthouse Esperado

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🔐 Boas Práticas

### TypeScript
✅ Todas as props tipadas
✅ Interfaces claras
✅ Type safety em hooks
✅ No `any` types

### React
✅ Componentes funcionais
✅ Hooks customizados reutilizáveis
✅ Separação de concerns
✅ Props drilling minimizado

### CSS
✅ BEM-like naming
✅ CSS Variables para temas
✅ Mobile-first approach
✅ Animações performáticas

### Estrutura
✅ Modularização clara
✅ Single Responsibility
✅ DRY (Don't Repeat Yourself)
✅ Código autodocumentado

---

**💡 Dica**: Use este documento como referência ao modificar ou adicionar funcionalidades!
