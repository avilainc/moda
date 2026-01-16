# 🤝 Guia de Contribuição - Easy4me Moda

Obrigado por considerar contribuir com o Easy4me Moda! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

Ao participar deste projeto, você concorda em manter um ambiente respeitoso e inclusivo para todos.

### Nossas Expectativas

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

## 🚀 Como Contribuir

### Reportando Bugs

Antes de reportar um bug, verifique se ele já não foi reportado. Se não:

1. Use o template de issue de bug
2. Descreva o comportamento esperado vs atual
3. Inclua steps para reproduzir
4. Adicione screenshots se aplicável
5. Inclua informações de ambiente (OS, browser, versão)

### Sugerindo Melhorias

1. Use o template de feature request
2. Explique claramente a melhoria proposta
3. Descreva casos de uso
4. Explique por que seria útil

### Pull Requests

1. **Fork** o repositório
2. **Clone** seu fork
3. **Crie** uma branch feature/fix
4. **Faça** suas alterações
5. **Teste** suas alterações
6. **Commit** com mensagens semânticas
7. **Push** para seu fork
8. **Abra** um Pull Request

## 📝 Padrões de Código

### TypeScript

```typescript
// ✅ BOM
interface ProductProps {
  id: number
  name: string
  price: number
}

const Product: React.FC<ProductProps> = ({ id, name, price }) => {
  return <div>{name}</div>
}

// ❌ EVITAR
const Product = (props: any) => {
  return <div>{props.name}</div>
}
```

### Nomenclatura

- **Componentes**: PascalCase (`Button.tsx`, `ProductCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useCart.ts`, `useAuth.ts`)
- **Utilitários**: camelCase (`formatCurrency.ts`, `validateEmail.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **Tipos**: PascalCase (`ProductType`, `UserData`)

### Estrutura de Componentes

```tsx
'use client' // Se necessário

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MyIcon } from 'lucide-react'

// Types
interface MyComponentProps {
  title: string
  items: Item[]
}

// Component
export const MyComponent: React.FC<MyComponentProps> = ({ title, items }) => {
  // Hooks
  const [isOpen, setIsOpen] = useState(false)

  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  // Render
  return (
    <div className="container">
      <h2>{title}</h2>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

### Estilização

```tsx
// ✅ BOM - Classes do Tailwind organizadas
<div className="flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  Content
</div>

// ✅ BOM - Usando clsx para condicionais
<div className={clsx(
  'px-4 py-2 rounded-lg',
  isActive && 'bg-blue-500 text-white',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
  Content
</div>

// ❌ EVITAR - Inline styles
<div style={{ padding: '10px', backgroundColor: 'red' }}>
  Content
</div>
```

## 🧪 Testes

### Antes de Submeter PR

```bash
# Verificar tipos
npm run type-check

# Executar linter
npm run lint

# Build de produção
npm run build

# Testar localmente
npm run start
```

### Cobertura de Testes

Idealmente, adicione testes para:
- Novos componentes
- Novas funcionalidades
- Correções de bugs

## 📝 Mensagens de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adicionar/corrigir testes
- `build`: Build system, dependencies
- `ci`: CI/CD configuration
- `chore`: Outras alterações

### Exemplos

```
feat(produtos): adiciona filtro por categoria

Implementa sistema de filtros para produtos permitindo
filtragem por categorias múltiplas.

Closes #123
```

```
fix(carrinho): corrige cálculo de total

O total estava sendo calculado incorretamente quando
havia produtos com desconto.

Fixes #456
```

## 🔍 Checklist do Pull Request

Antes de submeter, certifique-se:

- [ ] Código segue os padrões do projeto
- [ ] Comentários adicionados em código complexo
- [ ] Documentação atualizada se necessário
- [ ] Sem erros de lint ou type-checking
- [ ] Build de produção funciona
- [ ] Testado em diferentes navegadores
- [ ] Testado em mobile
- [ ] Screenshots adicionados se mudanças visuais
- [ ] PR description explica as mudanças
- [ ] Issue relacionada linkada

## 🎨 Design Guidelines

### Cores

- Use as cores do tema definidas no Tailwind config
- Mantenha contraste adequado (WCAG AA no mínimo)
- Use classes de cor semânticas

### Espaçamento

- Use escala de espaçamento do Tailwind (4, 8, 12, 16, 24, 32, etc)
- Mantenha consistência em componentes similares

### Tipografia

- Use classes de tipografia definidas
- Mantenha hierarquia clara (h1 > h2 > h3)
- Garanta legibilidade (line-height adequado)

### Animações

- Use Framer Motion para animações complexas
- Mantenha animações suaves (300ms-500ms)
- Respeite `prefers-reduced-motion`

## 📚 Recursos Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Best Practices](https://react.dev/learn)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## ❓ Dúvidas?

- Abra uma issue para discussão
- Entre em contato: contato@easy4me.com.br
- Participe das discussões no GitHub

## 🏆 Reconhecimento

Contribuidores serão listados no README e terão nosso reconhecimento público!

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

---

**Obrigado por contribuir! 🎉**

Sua ajuda torna este projeto melhor para todos.
