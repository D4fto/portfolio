# Portfolio Pedro Tunes - React + TypeScript

## 🚀 Projeto Moderno de Portfólio

Portfólio profissional desenvolvido com React, TypeScript e Framer Motion, apresentando projetos e habilidades de desenvolvimento.

## 📦 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra rápido
- **Framer Motion** - Animações fluidas e modernas
- **CSS Modules** - Estilização componentizada

## 🏗️ Estrutura do Projeto

```
portfolio-pedro/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── data/               # Dados estáticos
│   │   ├── projects.ts
│   │   └── contacts.ts
│   ├── hooks/              # Custom Hooks
│   │   └── useCustomHooks.ts
│   ├── types/              # Definições TypeScript
│   │   └── index.ts
│   ├── utils/              # Funções utilitárias
│   │   └── helpers.ts
│   ├── styles/             # Estilos globais
│   │   └── App.css
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Ponto de entrada
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Características

### ✨ Design Moderno
- Interface limpa e profissional
- Animações suaves com Framer Motion
- Responsivo para todos os dispositivos
- Tema escuro elegante

### 🎯 Funcionalidades
- **Navegação suave** entre seções
- **Menu lateral animado**
- **Cards de projetos interativos**
- **Modal detalhado** para cada projeto
- **ScrollSpy** para indicar seção ativa
- **Preload de projetos** hospedados

### 🔧 Componentes Modulares
- **Navigation**: Menu responsivo com animações
- **Hero**: Apresentação inicial impactante
- **ProjectCard**: Card interativo para cada projeto
- **ProjectModal**: Modal com detalhes completos
- **Projects**: Grid responsivo de projetos
- **Contact**: Seção de contatos com links

### 🎭 Animações
- Transições suaves entre estados
- Hover effects interativos
- Stagger animations em listas
- Scroll-triggered animations
- Modal com spring physics

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Desenvolvimento

O projeto será iniciado em `http://localhost:5173`

### Build

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 📝 Personalização

### Adicionar Novos Projetos

Edite o arquivo `src/data/projects.ts`:

```typescript
{
  id: 14,
  name: "Seu Projeto",
  description: "Descrição do projeto",
  technologies: ['react', 'typescript'],
  imageUrl: 'url-da-imagem',
  demoUrl: 'url-demo',
  repoUrl: 'url-repositorio',
  status: 'completed',
  featured: true // para aparecer em destaque
}
```

### Modificar Informações de Contato

Edite o arquivo `src/data/contacts.ts`

### Alterar Cores e Estilos

Edite as variáveis CSS em `src/styles/App.css`:

```css
:root {
  --color-bg: #0c0c0b;
  --color-text: #fff;
  --color-accent: #4a9eff;
  --color-secondary: #141413;
}
```

## 🎯 Custom Hooks

### useScrollSpy
Detecta a seção ativa baseada no scroll

### useMediaQuery
Hook para queries responsivas

### useLocalStorage
Gerenciamento de localStorage com TypeScript

## 🛠️ Tecnologias de Stack

- **Frontend**: React 18 + TypeScript
- **Animações**: Framer Motion
- **Build**: Vite
- **Estilização**: CSS Modules + CSS Variables
- **Ícones**: Tabler Icons
- **Fontes**: Google Fonts (Tomorrow, Anton SC)

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🔒 Boas Práticas

- ✅ Componentes modulares e reutilizáveis
- ✅ TypeScript para type safety
- ✅ Hooks customizados para lógica compartilhada
- ✅ Separação de concerns (data, components, styles)
- ✅ Otimização de performance
- ✅ Código limpo e documentado

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Pedro Tunes**
- Email: contatopedrotunes@gmail.com
- LinkedIn: [@D4fto](https://linkedin.com/in/D4fto)
- GitHub: [@D4fto](https://github.com/D4fto)

---

Desenvolvido com ❤️ por Pedro Tunes
