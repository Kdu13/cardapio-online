// Tela mostrada quando o endereço não corresponde a nenhum estabelecimento cadastrado.
export function PaginaNaoEncontrada() {
  return (
    <main className="not-found">
      <div className="brand-mark" aria-hidden="true">
        ?
      </div>
      <p className="eyebrow">Cardápio não encontrado</p>
      <h1>Este endereço ainda não tem um cardápio.</h1>
      <p>Confira o QR Code ou o link que você recebeu.</p>
      <a href="/">Voltar ao início</a>
    </main>
  );
}
