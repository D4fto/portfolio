# 🚀 Guia de Setup - Portfolio Pedro Tunes

Este guia vai te ajudar a configurar e customizar o projeto do zero.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** (vem com Node.js)
- **Git** - [Download](https://git-scm.com/)
- Editor de código (recomendo VS Code)

## 🔧 Instalação Passo a Passo

### 1. Clone ou Baixe o Projeto

```bash
# Se estiver usando Git
git clone [seu-repositorio]
cd portfolio-pedro

# Ou baixe e extraia o ZIP
```

### 2. Instale as Dependências

```bash
npm install
```

Isso vai instalar:
- React & React DOM
- TypeScript
- Vite (build tool)
- Framer Motion (animações)
- Tipos do TypeScript

### 3. Execute o Projeto

```bash
npm run dev
```

Abra http://localhost:5173 no navegador.

## 🎨 Customização

### Adicionar Seus Projetos

**Arquivo**: `src/data/projects.ts`

```typescript
{
  id: 1, // ID único
  name: "Nome do Projeto",
  description: "Descrição completa do projeto...",
  technologies: ['react', 'nodejs', 'typescript'], // tecnologias usadas
  imageUrl: 'https://...',  // URL da imagem (pode ser local também)
  demoUrl: 'https://...',   // Link do projeto (opcional)
  repoUrl: 'https://...',   // Link do GitHub (opcional)
  status: 'completed',      // 'completed' ou 'in-progress'
  featured: true            // true para aparecer em destaque
}
```

**Tecnologias disponíveis:**
- react
- nodejs
- html5
- css3
- javascript
- typescript
- mysql
- python
- csharp
- tailwind

### Alterar Suas Informações

**Arquivo**: `src/data/contacts.ts`

```typescript
{
  type: 'email',  // email, linkedin, github
  label: 'E-mail',
  value: 'seu@email.com',
  url: 'mailto:seu@email.com',
  icon: 'ti-mail'
}
```

**Arquivo**: `src/components/Hero.tsx`

Altere o nome e a descrição "Sobre mim":

```tsx
<h1>
  Oi, eu sou o <br />
  <span>Seu Nome 😃</span>
</h1>

<p>
  Sua descrição profissional aqui...
</p>
```

### Trocar Cores do Site

**Arquivo**: `src/styles/App.css`

```css
:root {
  --color-bg: #0c0c0b;          /* Cor de fundo */
  --color-text: #fff;           /* Cor do texto */
  --color-accent: #4a9eff;      /* Cor de destaque (azul) */
  --color-secondary: #141413;   /* Cor secundária */
}
```

**Sugestões de paletas:**

Tema Verde:
```css
--color-accent: #10b981;
```

Tema Roxo:
```css
--color-accent: #8b5cf6;
```

Tema Laranja:
```css
--color-accent: #f97316;
```

### Adicionar Novas Tecnologias

**Arquivo**: `src/types/index.ts`

Adicione na lista de Technology:

```typescript
export type Technology = 
  | 'react'
  | 'nodejs'
  // ... outras
  | 'sua-nova-tech';  // Adicione aqui
```

**Arquivo**: `src/utils/helpers.ts`

Adicione o ícone correspondente:

```typescript
const iconMap: Record<Technology, string> = {
  // ... outros
  'sua-nova-tech': 'ti-brand-nome-do-icone'
};
```

Encontre ícones em: https://tabler.io/icons

## 📱 Imagens dos Projetos

### Opção 1: URLs Externas
Use o formato atual com URLs externas:
```typescript
imageUrl: 'https://d4fto.github.io/images/projeto.png'
```

### Opção 2: Imagens Locais

1. Crie a pasta `public/images`
2. Adicione suas imagens lá
3. Use no código:
```typescript
imageUrl: '/images/projeto.png'
```

**Dica**: Use imagens com proporção 16:9 (ex: 1920x1080px)

## 🚢 Deploy

### Vercel (Recomendado)

1. Crie conta em https://vercel.com
2. Conecte seu repositório GitHub
3. Clique em "Import Project"
4. Vercel detecta automaticamente as configurações
5. Deploy! 🎉

### Netlify

1. Crie conta em https://netlify.com
2. Arraste a pasta `dist` (após rodar `npm run build`)
3. Ou conecte com GitHub para deploy automático

### GitHub Pages

```bash
# Instale gh-pages
npm install --save-dev gh-pages

# Adicione no package.json
"homepage": "https://seuusuario.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 🔍 Dicas de Performance

### Otimizar Imagens
- Use formatos modernos (WebP)
- Comprima imagens antes de adicionar
- Recomendado: TinyPNG.com

### Lighthouse Score
Rode auditoria no Chrome DevTools:
1. F12 > Lighthouse
2. Analise Performance, Acessibilidade, SEO
3. Implemente sugestões

## 🐛 Solução de Problemas

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 5173 já em uso
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID [numero] /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### Build falha
```bash
npm run build -- --verbose
```

### TypeScript errors
Certifique-se de que todos os arquivos `.tsx` têm as importações corretas.

## 📚 Recursos Adicionais

### Aprender Mais
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

### Inspirações de Design
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Ícones e Fontes
- [Tabler Icons](https://tabler.io/icons)
- [Google Fonts](https://fonts.google.com/)

## 🤝 Suporte

Se tiver dúvidas:
1. Leia a documentação do React/TypeScript
2. Verifique os comentários no código
3. Pesquise no Stack Overflow
4. Abra uma issue no GitHub

## ✅ Checklist de Lançamento

Antes de colocar no ar:

- [ ] Personalizei todas as informações
- [ ] Adicionei meus projetos
- [ ] Testei em diferentes navegadores
- [ ] Testei em mobile
- [ ] Otimizei as imagens
- [ ] Rodei `npm run build` sem erros
- [ ] Testei a build com `npm run preview`
- [ ] Configurei domínio personalizado (opcional)
- [ ] Adicionei Google Analytics (opcional)
- [ ] Fiz backup do código

---

**Boa sorte com seu portfólio! 🚀**
