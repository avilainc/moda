# 🚀 Ativação do GitHub Pages - Passo a Passo

## ✅ Passos para Ativar

### 1. Acesse as Configurações do Repositório
👉 https://github.com/avilainc/moda/settings/pages

### 2. Configure a Source
- Em **"Source"**, selecione: **GitHub Actions**
- Salve as configurações

### 3. Aguarde o Deploy
- O workflow será executado automaticamente
- Acompanhe em: https://github.com/avilainc/moda/actions
- Aguarde o badge verde ✅

### 4. Acesse seu Site
🌐 **URL do site**: https://avilainc.github.io/moda

---

## 📋 O que foi Configurado

✅ **Workflow GitHub Actions** (`.github/workflows/deploy.yml`)
- Deploy automático a cada push na branch `main`
- Build otimizado do Next.js
- Upload para GitHub Pages

✅ **Next.js Static Export** (`next.config.js`)
- `output: 'export'` - Gera site estático
- `basePath: '/moda'` - Configura base path
- `assetPrefix: '/moda'` - Configura assets
- `images: { unoptimized: true }` - Imagens para build estático

✅ **Arquivos Auxiliares**
- `.nojekyll` - Evita processamento Jekyll
- Documentação atualizada

---

## 🔄 Deploy Automático

Agora, **a cada push** para `main`, o site será atualizado automaticamente!

```bash
git add .
git commit -m "Atualizar conteúdo"
git push origin main
```

O GitHub Pages fará o resto! 🎉

---

## 🛠️ Comandos Úteis

### Testar build local
```bash
npm run build
```

### Verificar pasta de saída
A pasta `out/` contém o site estático após o build.

---

## 📱 Customizar Domínio (Opcional)

Se quiser usar um domínio personalizado:

1. Adicione arquivo `public/CNAME`:
```
seudominio.com
```

2. Configure DNS no seu provedor:
```
Type: CNAME
Name: www
Value: avilainc.github.io
```

3. Em GitHub Pages settings, adicione o custom domain

---

## 🐛 Troubleshooting

### Deploy falhou?
- Verifique os logs: https://github.com/avilainc/moda/actions
- Confirme que todas as dependências estão no `package.json`

### Site não carrega corretamente?
- Limpe o cache do navegador (Ctrl + F5)
- Verifique se o basePath está correto no `next.config.js`

### Mudanças não aparecem?
- GitHub Pages pode levar alguns minutos para atualizar
- Force refresh: Ctrl + Shift + R

---

## 🎯 Próximos Passos

1. ✅ Ative o GitHub Pages (link acima)
2. ✅ Aguarde o primeiro deploy
3. ✅ Acesse https://avilainc.github.io/moda
4. ✅ Configure Meta Pixel ID no repositório (Settings → Secrets → Actions)
5. ✅ Adicione secrets necessárias para produção

**Variáveis de Ambiente (GitHub Secrets)**:
- `NEXT_PUBLIC_FB_PIXEL_ID` - ID do Meta Pixel
- `NEXT_PUBLIC_GA_ID` - Google Analytics (opcional)
- Outras variáveis conforme necessário

---

**Status Atual**: ✅ Configuração completa! Aguardando ativação do GitHub Pages.
