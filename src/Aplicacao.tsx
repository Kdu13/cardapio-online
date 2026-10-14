// Aplicação: escolhe o cardápio pela rota e valida os dados no modo de desenvolvimento.
// Importa o cadastro, a tela de cardápio e a tela de rota não encontrada.
import {
  establishments,
  validateEstablishments,
} from "./data/estabelecimentos";
import { PaginaCardapio } from "./pages/PaginaCardapio";
import { PaginaNaoEncontrada } from "./pages/PaginaNaoEncontrada";
const errors = validateEstablishments(establishments);
if (import.meta.env.DEV && errors.length)
  console.error("Dados de cardápio inválidos:", errors);
export default function Aplicacao() {
  // O primeiro trecho do caminho é o id do estabelecimento cadastrado.
  const slug = window.location.pathname.split("/").filter(Boolean)[0] ?? "";
  const establishment = establishments.find((item) => item.id === slug);
  return establishment ? (
    <PaginaCardapio key={establishment.id} establishment={establishment} />
  ) : (
    <PaginaNaoEncontrada />
  );
}
