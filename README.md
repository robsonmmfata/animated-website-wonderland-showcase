
# 000criarsites - Plataforma de Criação de Sites

Uma réplica moderna e animada da plataforma 000criarsites, desenvolvida com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Landing Page Animada**: Hero section com gradientes e animações fluidas
- **Navegação Completa**: Sistema de roteamento com todas as páginas
- **Design Responsivo**: Totalmente adaptado para todos os dispositivos
- **Animações Avançadas**: Micro-interações e transições suaves
- **Componentes Reutilizáveis**: Arquitetura modular e escalável

## 📱 Páginas Implementadas

- **Início**: Landing page principal com hero section animado
- **Sobre**: História da empresa e informações dos fundadores
- **Preços**: Tabela de preços com comparação de planos
- **Depoimentos**: Avaliações e casos de sucesso dos clientes
- **Perguntas**: FAQ completo com categorias organizadas
- **Contato**: Formulário de contato e informações da empresa

## 🎨 Design System

### Cores Principais
- **Purple**: #8B5CF6 (Roxo primário)
- **Pink**: #EC4899 (Rosa secundário)
- **Blue**: #3B82F6 (Azul complementar)
- **Cyan**: #06B6D4 (Ciano de apoio)

### Tipografia
- **Fonte Principal**: Inter (moderna e legível)
- **Fonte Secundária**: Poppins (títulos e destaques)

### Animações
- **Float**: Elementos flutuantes suaves
- **Fade In Up**: Entrada suave de elementos
- **Scale In**: Efeito de zoom nos cards
- **Hover Effects**: Interações de hover refinadas

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Vite** - Build tool moderna
- **React Router** - Roteamento SPA
- **Lucide React** - Ícones modernos
- **Shadcn/ui** - Componentes de interface

## 📦 Instalação e Uso

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute o projeto
npm run dev

# Build para produção
npm run build
```

## 🎯 Características Especiais

### Animações e Microinterações
- Elementos com animação de entrada escalonada
- Hover effects com scale e glow
- Gradientes animados no background
- Transições suaves entre páginas

### Performance
- Carregamento otimizado de imagens
- Lazy loading de componentes
- Código minificado para produção
- CSS otimizado com Tailwind

### Responsividade
- Design mobile-first
- Breakpoints bem definidos
- Navegação adaptativa
- Cards responsivos

## 📊 Estrutura do Projeto

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/ (componentes shadcn)
├── pages/
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── hooks/
├── lib/
└── main.tsx
```

## 🎨 Sistema de Cores Customizado

O projeto utiliza um sistema de cores bem definido no `tailwind.config.ts`:

- **Brand Colors**: Purple, Pink, Blue, Cyan
- **Semantic Colors**: Primary, Secondary, Accent
- **State Colors**: Success, Warning, Error
- **Neutral Colors**: Gray scales

## 📱 Responsividade

O design é totalmente responsivo com:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🚀 Otimizações

- **Bundle Size**: Otimizado com tree-shaking
- **Images**: Lazy loading implementado
- **Fonts**: Preload das fontes principais
- **CSS**: Purge automático do Tailwind

## 📈 Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

---

Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS
