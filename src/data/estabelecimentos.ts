// Dados comerciais dos exemplos: nome, identidade visual, contato, categorias e produtos.
import type { Establishment } from "../types/cardapio";

// Cadastre clientes aqui. Coloque imagens em public/images/<id>/ e use /images/<id>/<arquivo>.
export const establishments: Establishment[] = [
  // Quiosque Azul: altere abaixo os dados e produtos deste estabelecimento demonstrativo.
  {
    id: "quiosque-azul",
    name: "Quiosque Azul",
    tagline: "Seu lugar à beira-mar",
    // Cores e informações de contato do quiosque.
    theme: {
      primary: "#176b67",
      primaryDark: "#104f4c",
      accent: "#e9a35a",
      surface: "#ffffff",
      background: "#f4f5f1",
    },
    contact: {
      whatsapp: "5513999990001",
      address: "Praia de exemplo · Itanhaém, SP",
      hours: "Todos os dias, 9h às 18h",
      instagram: "@quiosqueazul",
    },
    categories: [
      {
        id: "porcoes",
        name: "Porções",
        description: "Para compartilhar sem pressa",
      },
      {
        id: "bebidas",
        name: "Bebidas",
        description: "Geladas para acompanhar o dia",
      },
      { id: "pratos", name: "Pratos", description: "Sabor de praia à mesa" },
    ],
    // Produtos, preços em reais, caminhos opcionais das imagens e disponibilidade.
    products: [
      {
        id: "iscas-peixe",
        name: "Iscas de peixe",
        description: "Peixe empanado, limão e molho da casa.",
        price: 58,
        categoryId: "porcoes",
        available: true,
      },
      {
        id: "batata-rustica",
        name: "Batata rústica",
        description: "Dourada, com ervas e maionese temperada.",
        price: 32,
        categoryId: "porcoes",
        available: true,
      },
      {
        id: "coco-gelado",
        name: "Água de coco",
        description: "Coco verde servido gelado.",
        price: 12,
        categoryId: "bebidas",
        available: true,
      },
      {
        id: "limonada",
        name: "Limonada da casa",
        description: "Limão, água e um toque de hortelã.",
        price: 14,
        categoryId: "bebidas",
        available: false,
      },
      {
        id: "peixe-grelhado",
        name: "Peixe grelhado",
        description: "Acompanha arroz, salada e farofa.",
        price: 69,
        categoryId: "pratos",
        available: true,
      },
    ],
  },
  // Hamburgueria Central: segundo exemplo para demonstrar o tema e dados próprios.
  {
    id: "hamburgueria-central",
    name: "Hamburgueria Central",
    tagline: "Feito na chapa. Feito com vontade.",
    theme: {
      primary: "#a5422e",
      primaryDark: "#78301f",
      accent: "#e9b54a",
      surface: "#fffdf9",
      background: "#f5f1eb",
    },
    contact: {
      whatsapp: "5513999990002",
      address: "Centro · Itanhaém, SP",
      hours: "Ter a dom, 18h às 23h",
      instagram: "@centralhamburgueria",
    },
    categories: [
      {
        id: "hamburgueres",
        name: "Hambúrgueres",
        description: "Smash na chapa, pão macio",
      },
      {
        id: "combos",
        name: "Combos",
        description: "Seu lanche com acompanhamento",
      },
      {
        id: "acompanhamentos",
        name: "Acompanhamentos",
        description: "Para completar o pedido",
      },
      { id: "bebidas", name: "Bebidas", description: "Clássicos bem gelados" },
    ],
    products: [
      {
        id: "central-classico",
        name: "Central Clássico",
        description:
          "Smash 160g, queijo, cebola caramelizada e molho especial.",
        price: 34,
        categoryId: "hamburgueres",
        available: true,
      },
      {
        id: "duplo-cheddar",
        name: "Duplo Cheddar",
        description: "Dois smash, cheddar cremoso e picles da casa.",
        price: 39,
        categoryId: "hamburgueres",
        available: true,
      },
      {
        id: "combo-central",
        name: "Combo Central",
        description: "Central Clássico, batata pequena e refrigerante.",
        price: 49,
        categoryId: "combos",
        available: true,
      },
      {
        id: "batata-palito",
        name: "Batata palito",
        description: "Porção crocante com páprica.",
        price: 19,
        categoryId: "acompanhamentos",
        available: false,
      },
      {
        id: "refrigerante-lata",
        name: "Refrigerante lata",
        description: "Consulte os sabores disponíveis.",
        price: 7,
        categoryId: "bebidas",
        available: true,
      },
    ],
  },
];

export function validateEstablishments(items: Establishment[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const shop of items) {
    if (!shop.id || ids.has(shop.id))
      errors.push(`Identificador ausente ou duplicado: ${shop.id}`);
    ids.add(shop.id);
    const categories = new Set(shop.categories.map(({ id }) => id));
    for (const product of shop.products)
      if (
        !product.id ||
        !product.name ||
        !Number.isFinite(product.price) ||
        product.price < 0 ||
        !categories.has(product.categoryId)
      )
        errors.push(
          `Produto inválido em ${shop.id}: ${product.id || product.name}`,
        );
  }
  return errors;
}
