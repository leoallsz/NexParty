# NexParty

Marketplace de fornecedores de festas e eventos de São José do Rio Preto e região (nexparty.com.br).

## Stack
- React 18 + React Router (`HashRouter`) + Framer Motion + Leaflet.
- Aplicação estática já compilada; dados salvos no navegador (`localStorage`), sem backend.

## Rodar localmente
O `src/main.js` é um módulo ES. Sirva a pasta raiz com um servidor local:

```sh
npx serve .
```

## Publicar no Cloudflare Pages
Este repositório está configurado como site estático, sem etapa de build ou instalação de dependências. O `wrangler.toml` indica a pasta raiz (`.`) como diretório publicado, e `_headers` aplica cabeçalhos básicos de segurança.

1. No painel Cloudflare, abra **Workers & Pages → Create application → Pages → Connect to Git** e conecte `leoallsz/NexParty`.
2. Escolha a branch `main`.
3. Configure **Build command** como vazio (sem comando) e **Build output directory** como `.` (raiz do repositório).
4. Salve e faça o deploy. Novos commits na branch conectada serão publicados automaticamente.

O projeto usa `HashRouter`, então as rotas da aplicação ficam depois de `#` e não precisam de regras de fallback/redirect no servidor.

Para testar localmente com Wrangler, execute `npx wrangler pages dev .` na raiz. Será necessário autenticar na Cloudflare para publicar pelo CLI; para a integração contínua, use a conexão Git do painel.

## Animações
A camada `src/animations.css` adiciona movimento premium e discreto em todo o site: blocos de conteúdo entram com fade, background flutuante em um brilho suave, hover elevado em cards e botões, além do suporte a `prefers-reduced-motion` para acessibilidade.

## Observações
- `src/main.js` é o código compilado e formatado; os nomes de variáveis continuam abreviados.
- Rotas `/admin` ainda são placeholders.
