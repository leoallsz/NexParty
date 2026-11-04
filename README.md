# NexParty

Marketplace de fornecedores de festas e eventos de São José do Rio Preto e região (nexparty.com.br).

## Stack
- React 18 + React Router (HashRouter) + Framer Motion + Leaflet (mapa), em build do Vite já compilado
- Dados salvos no navegador (localStorage), sem backend

## Telas
Início, Explorar (mapa), Avaliações, Planos, Como Funciona, Sobre, Login/Cadastro, painel do cliente e do fornecedor, **Criar evento**, **Detalhes do evento** (checklist e orçamento), **Pacotes**, **Checkout (simulado)**, **Confirmação** e páginas legais.

## Como rodar
O `src/main.js` é um módulo ES, então precisa de servidor local:

    npx serve .

Também funciona no GitHub Pages (Settings → Pages → branch main, pasta root).

## Observações
- `src/main.js` é o código compilado e formatado: os nomes de variáveis continuam abreviados.
- Rotas `/admin` ainda são placeholders.
