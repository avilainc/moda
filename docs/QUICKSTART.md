# 🚀 Guia de Início Rápido - Easy4me Moda

## ⚡ Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/grdcompany/easy4me-moda.git

# 2. Entre na pasta
cd easy4me-moda

# 3. Instale as dependências
npm install --legacy-peer-deps

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: **http://localhost:3000** 🎉

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git (opcional)

## 🎯 Próximos Passos

### 1. Personalize as Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Suas cores personalizadas
  }
}
```

### 2. Atualize o Conteúdo

Edite os componentes em `src/components/sections/`:

- `Hero.tsx` - Chamada principal
- `Features.tsx` - Funcionalidades
- `Products.tsx` - Produtos
- `Testimonials.tsx` - Depoimentos

### 3. Configure SEO

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Título',
  description: 'Sua Descrição',
  // ...
}
```

### 4. Adicione Produtos

Crie/edite o arquivo de produtos e atualize a interface Product em `src/types/index.ts`.

## 🎨 Personalização Rápida

### Logo

Substitua o texto no `Header.tsx`:

```tsx
<h1 className="text-2xl">
  Seu<span className="text-gradient">Logo</span>
</h1>
```

### Fontes

Troque as fontes em `src/app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from 'next/font/google'
```

### Imagens

Adicione suas imagens em `public/` e use o componente Next Image:

```tsx
import Image from 'next/image'

<Image
  src="/sua-imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
/>
```

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Testar build localmente
npm run start

# Verificar erros
npm run lint

# Verificar tipos
npm run type-check
```

## 📱 Testando Responsividade

1. Abra o DevTools (F12)
2. Clique no ícone de dispositivo móvel
3. Teste em diferentes tamanhos:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1024px+)

## 🚀 Deploy Rápido

### Vercel (Mais Fácil)

1. Crie conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Clique em "Deploy"
4. Pronto! 🎉

### Netlify

1. Crie conta na [Netlify](https://netlify.com)
2. Arraste a pasta do projeto
3. Configure build: `npm run build`
4. Output: `.next`
5. Deploy!

## 🐛 Problemas Comuns

### Erro de dependências

```bash
npm install --legacy-peer-deps
```

### Erro de compilação

```bash
# Limpe o cache
rm -rf .next
npm run dev
```

### Erro de tipos

```bash
# Reinstale types
npm install --save-dev @types/react @types/node
```

### Porta 3000 em uso

```bash
# Use outra porta
PORT=3001 npm run dev
```

## 📚 Recursos

- [Documentação Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 💡 Dicas Pro

### Performance

1. Use Next Image para todas as imagens
2. Implemente lazy loading
3. Minimize JavaScript não utilizado
4. Use Server Components quando possível

### SEO

1. Adicione meta descriptions únicas
2. Use headings hierárquicos (h1, h2, h3)
3. Otimize alt text das imagens
4. Crie sitemap.xml

### Acessibilidade

1. Use labels em todos os inputs
2. Adicione aria-labels
3. Teste com leitor de tela
4. Garanta contraste adequado

## 🎓 Tutorial em 5 Minutos

### Adicionar Nova Seção

1. Crie arquivo em `src/components/sections/`:

```tsx
'use client'

export const MinhaSecao = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-luxury">
        <h2>Minha Nova Seção</h2>
        {/* Seu conteúdo */}
      </div>
    </section>
  )
}
```

2. Importe em `src/app/page.tsx`:

```tsx
import { MinhaSecao } from '@/components/sections/MinhaSecao'

// Adicione no return
<MinhaSecao />
```

### Criar Novo Componente

```tsx
// src/components/ui/MeuComponente.tsx
interface Props {
  titulo: string
}

export const MeuComponente: React.FC<Props> = ({ titulo }) => {
  return <div className="...">{titulo}</div>
}
```

## 🤝 Precisa de Ajuda?

- 📧 Email: contato@easy4me.com.br
- 💬 GitHub Issues
- 📱 WhatsApp: (11) 99999-9999

## ⭐ Checklist de Lançamento

- [ ] Conteúdo atualizado
- [ ] Imagens otimizadas
- [ ] SEO configurado
- [ ] Analytics adicionado
- [ ] Testado em mobile
- [ ] Testado em desktop
- [ ] Performance > 90
- [ ] Formulários funcionando
- [ ] Links externos abrem nova aba
- [ ] Favicon adicionado
- [ ] 404 personalizada
- [ ] SSL configurado
- [ ] Domínio configurado

## 🎉 Pronto!

Seu site está rodando e pronto para customização. Divirta-se! 🚀

---

**Dúvidas?** Consulte a [documentação completa](./DOCUMENTATION.md)
