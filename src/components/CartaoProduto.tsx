import { useState } from "react";
// Cartão visual de um produto, incluindo preço, imagem de reserva e estado indisponível.
import type { Product } from "../types/cardapio";
import { formatCurrency } from "../utils/formatarMoeda";
export function ProductCard({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article
      className={`product-card${product.available ? "" : " is-unavailable"}`}
    >
      {product.image && !imageFailed ? (
        <img
          className="product-image"
          src={product.image}
          alt=""
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="product-image image-placeholder" aria-hidden="true">
          <span>Feito com cuidado</span>
        </div>
      )}
      <div className="product-copy">
        <div className="product-heading">
          <h3>{product.name}</h3>
          {!product.available && (
            <span className="unavailable-label">Indisponível</span>
          )}
        </div>
        {product.description && <p>{product.description}</p>}
        <strong className="product-price">
          {typeof product.price === "number"
            ? formatCurrency(product.price)
            : product.priceLabel}
        </strong>
      </div>
    </article>
  );
}
