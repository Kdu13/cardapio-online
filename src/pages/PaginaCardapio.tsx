import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
// Página do cardápio: cabeçalho, busca, categorias, produtos, rodapé e contato.
import type { Establishment } from "../types/cardapio";
import { CategoryNavigation as NavegacaoCategorias } from "../components/NavegacaoCategorias";
import { ProductCard as CartaoProduto } from "../components/CartaoProduto";
import { Footer as Rodape } from "../components/Rodape";
import { WhatsAppButton as BotaoWhatsApp } from "../components/BotaoWhatsApp";
export function PaginaCardapio({
  establishment,
}: {
  establishment: Establishment;
}) {
  const [activeCategory, setActiveCategory] = useState(
    establishment.categories[0]?.id ?? "",
  );
  const [query, setQuery] = useState("");
  const [logoFailed, setLogoFailed] = useState(false);
  const category = establishment.categories.find(
    ({ id }) => id === activeCategory,
  );
  const products = useMemo(
    () =>
      establishment.products.filter((product) => {
        const matchesCategory = query.trim()
          ? true
          : product.categoryId === activeCategory;
        return (
          matchesCategory &&
          product.name
            .toLocaleLowerCase("pt-BR")
            .includes(query.trim().toLocaleLowerCase("pt-BR"))
        );
      }),
    [activeCategory, establishment.products, query],
  );
  useEffect(() => {
    document.title = `${establishment.name} · Cardápio`;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description)
      description.content = `${establishment.tagline} Confira o cardápio de ${establishment.name}.`;
    const color = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (color) color.content = establishment.theme.primary;
  }, [establishment]);
  const style = {
    "--primary": establishment.theme.primary,
    "--primary-dark": establishment.theme.primaryDark,
    "--accent": establishment.theme.accent,
    "--surface": establishment.theme.surface,
    "--page-bg": establishment.theme.background,
  } as CSSProperties;
  return (
    <div className="menu-page" style={style}>
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-row">
            {establishment.logo && !logoFailed ? (
              <img
                className="brand-logo"
                src={establishment.logo}
                alt={`Logo ${establishment.name}`}
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="brand-mark" aria-hidden="true">
                {establishment.name.slice(0, 1)}
              </div>
            )}
            <span className="brand-caption">CARDÁPIO DIGITAL</span>
            <span className="demo-tag">EXEMPLO DEMONSTRATIVO</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              {establishment.contact.address ?? "Feito para aproveitar"}
            </p>
            <h1>{establishment.name}</h1>
            <p>{establishment.tagline}</p>
          </div>
          <div className="hero-meta">
            {establishment.contact.hours && (
              <span>◷ &nbsp;{establishment.contact.hours}</span>
            )}
            {establishment.contact.address && (
              <span>⌖ &nbsp;{establishment.contact.address}</span>
            )}
          </div>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <span />
        </div>
      </header>
      <main className="menu-content">
        <section aria-labelledby="menu-title">
          <div className="menu-intro">
            <div>
              <p className="eyebrow">Escolha com calma</p>
              <h2 id="menu-title">Nosso cardápio</h2>
            </div>
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <span className="sr-only">Buscar produto</span>
              <input
                type="search"
                placeholder="Buscar no cardápio"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>
          {establishment.categories.length ? (
            <NavegacaoCategorias
              categories={establishment.categories}
              activeId={activeCategory}
              onSelect={setActiveCategory}
            />
          ) : (
            <p className="empty-state">
              As categorias serão adicionadas em breve.
            </p>
          )}
          <div className="category-heading">
            <div>
              <p className="eyebrow">
                {query.trim()
                  ? "Resultados em todas as categorias"
                  : (category?.description ?? "Preparado para você")}
              </p>
              <h2>{query.trim() ? "Busca" : (category?.name ?? "Produtos")}</h2>
            </div>
            <span className="product-count">
              {products.length} {products.length === 1 ? "item" : "itens"}
            </span>
          </div>
          {products.length ? (
            <div className="product-grid">
              {products.map((product) => (
                <CartaoProduto key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-mark">⌕</span>
              <h3>
                {query
                  ? "Não encontramos esse produto"
                  : "Nenhum produto nesta categoria"}
              </h3>
              <p>
                {query
                  ? "Tente buscar por outro nome ou escolha uma categoria."
                  : "Volte em breve para conferir as novidades."}
              </p>
            </div>
          )}
        </section>
      </main>
      <Rodape name={establishment.name} contact={establishment.contact} />
      <BotaoWhatsApp phone={establishment.contact.whatsapp} />
    </div>
  );
}
