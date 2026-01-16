# 🎨 Guia de Customização e Otimização - Easy4me Moda

## 🎯 Customizações Rápidas

### 1. Alterar Cores do Tema

**Arquivo**: `tailwind.config.ts`

```typescript
// Altere as cores primárias
colors: {
  primary: {
    500: '#SUA_COR_PRINCIPAL',  // Cor principal
    600: '#SUA_COR_ESCURA',     // Hover
  },
  luxury: {
    gold: '#SUA_COR_OURO',
    rose: '#SUA_COR_ROSA',
  }
}
```

### 2. Mudar Fontes

**Arquivo**: `src/app/layout.tsx`

```typescript
// Importe novas fontes do Google
import { Montserrat, Lora } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-display',
})
```

### 3. Personalizar Textos

**Hero Section** - `src/components/sections/Hero.tsx`:
```tsx
<h1>
  Sua Mensagem{' '}
  <span className="text-gradient">Principal Aqui</span>
</h1>
```

**Features** - `src/components/sections/Features.tsx`:
```tsx
const features = [
  {
    icon: SeuIcone,
    title: 'Seu Título',
    description: 'Sua Descrição',
    color: 'from-blue-500 to-cyan-500',
  },
  // Adicione mais...
]
```

### 4. Adicionar Logo

**Opção 1 - Imagem**:
```tsx
// src/components/layout/Header.tsx
import Image from 'next/image'

<Link href="/">
  <Image 
    src="/logo.png" 
    alt="Logo" 
    width={150} 
    height={50}
    priority
  />
</Link>
```

**Opção 2 - SVG Inline**:
```tsx
<Link href="/">
  <svg className="w-32 h-12">
    {/* Seu SVG aqui */}
  </svg>
</Link>
```

### 5. Trocar Imagens dos Produtos

**Arquivo**: `src/components/sections/Products.tsx`

```tsx
// Substitua o placeholder
<div className="relative aspect-[3/4]">
  <Image
    src="/produtos/produto-1.jpg"
    alt={product.name}
    fill
    className="object-cover"
  />
</div>
```

### 6. Adicionar Redes Sociais

**Arquivo**: `src/lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  links: {
    instagram: 'https://instagram.com/seuperfil',
    facebook: 'https://facebook.com/suapagina',
    whatsapp: '5511999999999',
  }
}
```

## ⚡ Otimizações de Performance

### 1. Otimização de Imagens

```tsx
// Sempre use Next Image
import Image from 'next/image'

<Image
  src="/sua-imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
  quality={90}
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### 2. Lazy Loading de Componentes

```tsx
import dynamic from 'next/dynamic'

// Carregue componentes pesados sob demanda
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Carregando...</div>,
  ssr: false, // Desabilite SSR se necessário
})
```

### 3. Code Splitting Manual

```tsx
// Divida código por rotas
const CheckoutPage = dynamic(() => import('./checkout'))
const ProfilePage = dynamic(() => import('./profile'))
```

### 4. Otimizar Fontes

```typescript
// Use display: 'swap' para evitar FOIT
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

### 5. Reduzir Bundle Size

```bash
# Analise o bundle
npm install -D @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Execute
ANALYZE=true npm run build
```

### 6. Implementar Cache

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 🔍 Melhorias de SEO

### 1. Adicionar Meta Tags Dinâmicas

```typescript
// src/app/produtos/[id]/page.tsx
export async function generateMetadata({ params }) {
  const produto = await getProduto(params.id)
  
  return {
    title: `${produto.name} | Easy4me Moda`,
    description: produto.description,
    openGraph: {
      images: [produto.image],
    },
  }
}
```

### 2. Criar Sitemap

```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://seusite.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://seusite.com/produtos',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]
}
```

### 3. Adicionar Schema.org

```tsx
// src/components/JsonLd.tsx
export const ProductJsonLd = ({ product }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'BRL',
    },
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### 4. Robots.txt

```text
# public/robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://seusite.com/sitemap.xml
```

## 🎨 Customizações Avançadas

### 1. Tema Claro/Escuro

```tsx
// Adicione em layout.tsx
'use client'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

```css
/* globals.css */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ffffff;
  }
}
```

### 2. Animações Customizadas

```typescript
// tailwind.config.ts
keyframes: {
  slideIn: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
},
animation: {
  'slide-in': 'slideIn 0.5s ease-out',
}
```

### 3. Breakpoints Customizados

```typescript
// tailwind.config.ts
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
}
```

## 📊 Analytics e Tracking

### 1. Google Analytics

```tsx
// src/lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// src/app/layout.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import * as gtag from '@/lib/gtag'

export default function Layout({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const url = pathname + searchParams.toString()
    gtag.pageview(url)
  }, [pathname, searchParams])
  
  return <>{children}</>
}
```

### 2. Facebook Pixel

```tsx
// src/lib/fpixel.ts
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

export const pageview = () => {
  window.fbq('track', 'PageView')
}

export const event = (name: string, options = {}) => {
  window.fbq('track', name, options)
}
```

## 🔒 Segurança

### 1. Headers de Segurança

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}
```

### 2. Validação de Formulários

```tsx
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string().min(3, 'Nome muito curto'),
})

export const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  )
}
```

## 💾 Backup e Deploy

### 1. Git Hooks

```bash
# .husky/pre-commit
#!/bin/sh
npm run lint
npm run type-check
```

### 2. Deploy Automático

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📝 Checklist Final

### Antes do Deploy

- [ ] Todas as imagens otimizadas
- [ ] Meta tags configuradas
- [ ] Analytics instalado
- [ ] Formulários funcionando
- [ ] Links testados
- [ ] Mobile responsivo
- [ ] Performance > 90
- [ ] SEO > 90
- [ ] Acessibilidade > 90
- [ ] SSL configurado
- [ ] Domínio configurado
- [ ] Backup configurado
- [ ] Monitoring ativo
- [ ] Error tracking ativo

### Pós Deploy

- [ ] Teste completo em produção
- [ ] Submeta sitemap ao Google
- [ ] Configure Google Search Console
- [ ] Configure analytics goals
- [ ] Monitore performance
- [ ] Configure alerts
- [ ] Documente alterações

---

**Dica Pro**: Sempre teste localmente antes de fazer deploy em produção!

**Precisa de ajuda?** Consulte a [documentação completa](./DOCUMENTATION.md)
