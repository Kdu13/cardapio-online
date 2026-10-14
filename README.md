# Cardápio Digital

Aplicação estática de cardápios para restaurantes, bares e quiosques. Quiosque Azul e Hamburgueria Central são exemplos fictícios e estão identificados como demonstração. Quiosque Paraíso foi cadastrado a partir do cardápio enviado. Não há backend, banco de dados, autenticação, painel nem carrinho.

## Requisitos e execução

É necessário Node.js 18 ou superior e npm.

```bash
npm install
npm run dev
```

O Vite informará o endereço local. Abra `/quiosque-paraiso`, `/quiosque-azul` ou `/hamburgueria-central`. Para gerar e conferir a versão de produção, use `npm run build` e `npm run preview`.

## Atualizar dados ou incluir cliente

Edite `src/data/estabelecimentos.ts`. Cada estabelecimento deve ter um `id` único, que também será o caminho da URL (`/id`), nome, tema, contatos, categorias e produtos. O produto tem identificador estável, categoria existente e `available` para indicar disponibilidade. Use `price` para um valor numérico em reais ou `priceLabel` para preços sob consulta. Não altere a lógica dos componentes para mudar esses dados. Em desenvolvimento, erros de identificadores e referências inválidas aparecem no console.

Para adicionar um cliente, copie um objeto, escolha um id que não exista e atualize nome, tagline, cores, contato, categorias e produtos. A moeda é formatada centralmente por `src/utils/formatarMoeda.ts`.

## Organização do código

Os nomes dos arquivos estão em português. Os comentários no início dos arquivos indicam a função de cada parte.

```text
src/
  Aplicacao.tsx                 # seleciona a página pela rota
  principal.tsx                 # inicia o React e carrega os estilos
  components/
    BotaoWhatsApp.tsx           # contato por WhatsApp
    CartaoProduto.tsx           # apresentação de cada produto
    NavegacaoCategorias.tsx      # seleção de categoria
    Rodape.tsx                  # informações comerciais
  data/estabelecimentos.ts      # dados editáveis dos clientes
  pages/
    PaginaCardapio.tsx          # tela do cardápio
    PaginaNaoEncontrada.tsx     # rota sem estabelecimento
  types/cardapio.ts             # tipos TypeScript compartilhados
  utils/formatarMoeda.ts        # moeda e link do WhatsApp
  styles.css                    # aparência e responsividade
```

## Imagens e identidade

Coloque imagens locais em `public/images/<id-do-cliente>/`, por exemplo `public/images/quiosque-azul/iscas.jpg`, e informe no produto `image: '/images/quiosque-azul/iscas.jpg'`. A mesma pasta pode conter `logo.png`; informe `logo: '/images/quiosque-azul/logo.png'`. Imagens são opcionais: imagem ausente ou com erro mostra um espaço visual de reserva. Prefira imagens comprimidas em WebP ou JPEG e dimensões adequadas ao card. Defina as cores no objeto `theme` (`primary`, `primaryDark`, `accent`, `surface` e `background`).

## WhatsApp, horário e redes sociais

Preencha `contact.whatsapp` com telefone brasileiro com DDD, com ou sem prefixo 55. O botão aparece somente quando o número é válido. Endereço, horário e Instagram são opcionais. Links externos abrem em nova aba com proteção `noopener noreferrer`.

No Quiosque Paraíso, a foto informa o Instagram `@quiosqueparaiso`, mas não mostra telefone, endereço nem horário. Por isso, o botão do WhatsApp fica oculto até que o telefone seja fornecido.

## QR Code e publicação

Configure o domínio definitivo na plataforma de hospedagem; nenhum domínio real está incluído. Gere um QR Code apontando para `https://SEU-DOMINIO/quiosque-paraiso`, `https://SEU-DOMINIO/quiosque-azul` ou `https://SEU-DOMINIO/hamburgueria-central`. Antes de imprimir, teste o QR Code em celular, inclusive abrindo a rota diretamente, sem navegar pela página inicial.

O Vite gera arquivos estáticos em `dist/`, compatíveis com Cloudflare Pages e hospedagens equivalentes. Configure o comando de build como `npm run build` e a pasta de saída como `dist`. As rotas são tratadas pelo fallback SPA do Vite/Cloudflare Pages; em outra hospedagem, configure fallback de caminhos para `index.html`. Faça uma publicação de teste e valide cada URL direta antes de divulgar os QR Codes.

Para atualizar o cardápio, modifique os dados/recursos, confira `npm run build` e publique uma nova versão. Faça backup versionando o projeto Git e mantendo cópia das imagens originais junto aos arquivos do projeto.

## Limitações

Todo conteúdo em `src/data` e recursos públicos fica disponível no navegador; não inclua informações confidenciais. Esta versão não recebe pedidos nem pagamentos. O título e a descrição por estabelecimento são atualizados no navegador; buscadores podem indexar apenas o HTML inicial compartilhado, então o SEO individual por rota é limitado. O projeto não depende de API para exibir produtos. A tipografia decorativa tenta carregar do Google Fonts; com a rede indisponível, fontes locais do sistema permanecem como fallback.
