// Botões acessíveis para trocar a categoria visível no cardápio.
import type { Category } from "../types/cardapio";
interface Props {
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}
export function CategoryNavigation({ categories, activeId, onSelect }: Props) {
  return (
    <nav className="category-nav" aria-label="Categorias do cardápio">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={
            activeId === category.id ? "category-chip active" : "category-chip"
          }
          aria-pressed={activeId === category.id}
          onClick={() => onSelect(category.id)}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
}
