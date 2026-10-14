// Dados comerciais dos exemplos: nome, identidade visual, contato, categorias e produtos.
import type { Establishment, Product } from "../types/cardapio";

// Atalho para cadastrar itens; use null quando o cardápio informa preço sob consulta.
function criarItem(
  id: string,
  name: string,
  categoryId: string,
  price: number | null,
  description?: string,
): Product {
  return {
    id,
    name,
    categoryId,
    available: true,
    ...(price === null ? { priceLabel: "Preço sob consulta" } : { price }),
    ...(description ? { description } : {}),
  };
}

// Cadastre clientes aqui. Coloque imagens em public/images/<id>/ e use /images/<id>/<arquivo>.
export const establishments: Establishment[] = [
  // Quiosque Azul: altere abaixo os dados e produtos deste estabelecimento demonstrativo.
  {
    id: "quiosque-azul",
    name: "Quiosque Azul",
    tagline: "Seu lugar à beira-mar",
    demonstration: true,
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
    demonstration: true,
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
  // Quiosque Paraíso: dados transcritos das fotos enviadas pelo usuário.
  {
    id: "quiosque-paraiso",
    name: "Quiosque Paraíso",
    tagline: "No Paraíso é sempre verão!",
    theme: {
      primary: "#23794c",
      primaryDark: "#123e34",
      accent: "#d8c34b",
      surface: "#f8fff5",
      background: "#edf5e8",
    },
    contact: { instagram: "@quiosqueparaiso" },
    categories: [
      { id: "porcoes", name: "Porções", description: "Pequena e grande quando indicado" },
      { id: "salgados", name: "Salgados" },
      { id: "pasteis", name: "Pastéis", description: "Adicional de cheddar, catupiry ou queijo: R$ 5,00" },
      { id: "espetinhos", name: "Espetinhos" },
      { id: "pratos-e-acompanhamentos", name: "Pratos e acompanhamentos" },
      { id: "cerveja-600", name: "Cervejas 600 ml" },
      { id: "cerveja-lata", name: "Cervejas lata 550 ml" },
      { id: "cerveja-sem-alcool", name: "Cervejas sem álcool" },
      { id: "long-neck", name: "Long neck" },
      { id: "refrigerantes", name: "Refrigerantes e águas" },
      { id: "sucos", name: "Sucos" },
      { id: "caipirinhas-batidas", name: "Caipirinhas e batidas" },
      { id: "energeticos", name: "Energéticos" },
      { id: "doses", name: "Doses" },
    ],
    products: [
      // Porções sem tamanho impresso.
      criarItem("azeitona", "Azeitona sem caroço", "porcoes", 55),
      criarItem("torresmo", "Torresmo", "porcoes", 69.9),
      criarItem("mini-salgado", "Mini salgado", "porcoes", 69.9),
      criarItem("provolone-milanesa", "Provolone à milanesa", "porcoes", 74.9),
      criarItem("bolinho-bacalhau-porcao", "Bolinho de bacalhau", "porcoes", 95),
      // Porções P/G cadastradas separadamente para mostrar os dois preços da foto.
      criarItem("mandioca-pequena", "Mandioca · pequena", "porcoes", 54.9),
      criarItem("mandioca-grande", "Mandioca · grande", "porcoes", 74.9),
      criarItem("fritas-pequena", "Fritas · pequena", "porcoes", 54.9),
      criarItem("fritas-grande", "Fritas · grande", "porcoes", 74.9),
      criarItem("cebola-pequena", "Cebola empanada · pequena", "porcoes", 54.9),
      criarItem("cebola-grande", "Cebola empanada · grande", "porcoes", 74.9),
      criarItem("salame-pequena", "Salame · pequena", "porcoes", 54.9),
      criarItem("salame-grande", "Salame · grande", "porcoes", 74.9),
      criarItem("iscas-frango-pequena", "Isca de frango · pequena", "porcoes", 54.9),
      criarItem("iscas-frango-grande", "Isca de frango · grande", "porcoes", 84.9),
      criarItem("frango-passarinho", "Frango à passarinho", "porcoes", 99),
      criarItem("tulipa-pequena", "Tulipa (meio da asa) · pequena", "porcoes", 69.9),
      criarItem("tulipa-grande", "Tulipa (meio da asa) · grande", "porcoes", 99),
      criarItem("calabresa-pequena", "Calabresa acebolada · pequena", "porcoes", 54.9),
      criarItem("calabresa-grande", "Calabresa acebolada · grande", "porcoes", 84.9),
      criarItem("manjuba-pequena", "Manjuba · pequena", "porcoes", 79.9),
      criarItem("manjuba-grande", "Manjuba · grande", "porcoes", 119.9),
      criarItem("porquinho-pequena", "Porquinho · pequena", "porcoes", 79.9),
      criarItem("porquinho-grande", "Porquinho · grande", "porcoes", 119.9),
      criarItem("camarao-7-barbas-pequena", "Camarão 7 barbas · pequena", "porcoes", 79.9),
      criarItem("camarao-7-barbas-grande", "Camarão 7 barbas · grande", "porcoes", 119.9),
      criarItem("tilapia-pequena", "Tilápia · pequena", "porcoes", 79.9),
      criarItem("tilapia-grande", "Tilápia · grande", "porcoes", 119.9),
      criarItem("isca-peixe-pequena", "Isca de peixe · pequena", "porcoes", 79.9),
      criarItem("isca-peixe-grande", "Isca de peixe · grande", "porcoes", 119.9),
      criarItem("pescada-pequena", "Pescada · pequena", "porcoes", 79.9),
      criarItem("pescada-grande", "Pescada · grande", "porcoes", 119.9),
      criarItem("lula-pequena", "Lula · pequena", "porcoes", 79.9),
      criarItem("lula-grande", "Lula · grande", "porcoes", 119.9),
      criarItem("contra-file-pequena", "Contra-filé · pequena", "porcoes", 79.9),
      criarItem("contra-file-grande", "Contra-filé · grande", "porcoes", 119.9),
      criarItem("camarao-rosa", "Camarão rosa", "porcoes", 269.9),
      criarItem("adicional-porcao", "Adicional: catupiry, cheddar ou bacon", "porcoes", 10),
      criarItem("cebola-caseira", "Cebola caseira", "porcoes", 5),
      // Salgados e lanches rápidos.
      criarItem("coxinha", "Coxinha", "salgados", 12.99),
      criarItem("kibe", "Kibe", "salgados", 12.99),
      criarItem("bolinho-bacalhau-unidade", "Bolinho de bacalhau", "salgados", 12.99),
      criarItem("hot-dog", "Hot dog", "salgados", 17.9),
      criarItem("misto-quente", "Misto quente", "salgados", 17.9),
      // Pastéis; os três últimos têm preço especial indicado no impresso.
      criarItem("pastel-queijo", "Pastel de queijo", "pasteis", 18.9),
      criarItem("pastel-pizza", "Pastel de pizza", "pasteis", 18.9),
      criarItem("pastel-bauru", "Pastel de bauru", "pasteis", 18.9),
      criarItem("pastel-carne", "Pastel de carne", "pasteis", 18.9),
      criarItem("pastel-frango", "Pastel de frango", "pasteis", 18.9),
      criarItem("pastel-calabresa", "Pastel de calabresa", "pasteis", 18.9),
      criarItem("pastel-costela", "Pastel de costela bovina", "pasteis", 22.9),
      criarItem("pastel-carne-seca", "Pastel de carne seca", "pasteis", 22.9),
      criarItem("pastel-camarao", "Pastel de camarão", "pasteis", 22.9),
      criarItem("espetinho-frango", "Espetinho de frango", "espetinhos", 19.9, "Preço por unidade."),
      criarItem("espetinho-camarao", "Espetinho de camarão", "espetinhos", 19.9, "Preço por unidade."),
      criarItem("salada-paraiso", "Salada Paraíso", "pratos-e-acompanhamentos", 55, "Palmito, tomate, cebola, alface e azeitona."),
      criarItem("arroz", "Porção de arroz", "pratos-e-acompanhamentos", 15),
      criarItem("feijao", "Porção de feijão", "pratos-e-acompanhamentos", 15),
      criarItem("casquinha-siri", "Casquinha de siri", "pratos-e-acompanhamentos", 20, "Preço por unidade."),
      // Cervejas 600 ml: a placa orienta consultar o preço.
      ...["Teresópolis", "Eisenbahn", "Estrella Galicia", "Stella", "Spaten", "Original", "Brahma Duplo", "Budweiser", "Brahma Chopp", "Império", "Heineken", "Amstel", "Petra", "Itaipava"].map((marca, indice) => criarItem(`cerveja-600-${indice}`, marca, "cerveja-600", null, "Garrafa 600 ml.")),
      ...["Eisenbahn", "Teresópolis", "Estrella Galicia", "Heineken", "Brahma Chopp", "Brahma Duplo", "Petra", "Itaipava", "Império", "Amstel", "Original", "Skol", "Skol Beats"].map((marca, indice) => criarItem(`cerveja-lata-${indice}`, marca, "cerveja-lata", null, "Lata 550 ml.")),
      criarItem("heineken-zero", "Heineken 0%", "cerveja-sem-alcool", null),
      criarItem("brahma-zero", "Brahma 0%", "cerveja-sem-alcool", null),
      ...["Eisenbahn", "Sol", "Cerpa", "Corona", "Stella Artois", "Amstel", "Heineken", "Budweiser", "Praya", "Smirnoff Ice", "Draft Chopp Vinho"].map((marca, indice) => criarItem(`long-neck-${indice}`, marca, "long-neck", null)),
      // Refrigerantes, águas e sucos com valores impressos.
      ...["Coca-Cola", "Fanta Laranja", "Fanta Uva", "Sprite", "Schweppes", "Coca-Cola Zero", "Guaraná", "Del Valle", "Água tônica", "Sprite Lemon"].map((nome, indice) => criarItem(`refrigerante-${indice}`, nome, "refrigerantes", 8, "Lata.")),
      criarItem("h2o", "H2O", "refrigerantes", 10),
      criarItem("agua-mineral", "Água mineral", "refrigerantes", 6),
      criarItem("agua-gas", "Água com gás", "refrigerantes", 6),
      criarItem("copo-gelo-limao", "Copo com gelo e limão", "refrigerantes", 3),
      criarItem("suco-agua", "Suco com água", "sucos", 16.9, "Abacaxi, coco, morango, maracujá, limão, goiaba, manga, caju, kiwi, acerola, manga com acerola e laranja ou frutas vermelhas."),
      criarItem("suco-leite", "Suco com leite", "sucos", 16.9, "Consulte os sabores disponíveis."),
      criarItem("limonada-suica", "Limonada suíça", "sucos", 19.9),
      criarItem("suco-laranja", "Suco de laranja", "sucos", 19.9),
      // Caipirinhas e batidas: sabores e preços conforme a placa.
      ...[["Cachaça 51", 36], ["Velho Barreiro", 36], ["Vodka Sky", 38], ["Smirnoff", 38], ["Ypioca", 36], ["Sagatiba", 37], ["Asa Minas", 36], ["Cabaré", 36], ["Saquê", 36], ["Rum Bacardi", 38], ["Steinhaeger", 38], ["Tequila", 80], ["Absolut", 70], ["Cîroc", 80]].map(([nome, preco], indice) => criarItem(`caipirinha-${indice}`, String(nome), "caipirinhas-batidas", Number(preco), "Sabores variados; consulte as opções.")),
      criarItem("juruloka", "Juruloka", "caipirinhas-batidas", 58, "Jupinga, morango, groselha, leite condensado e limão."),
      criarItem("pina-colada", "Piña Colada", "caipirinhas-batidas", 38, "Rum, abacaxi, leite de coco e leite condensado."),
      criarItem("beijo-na-boca", "Beijo na Boca", "caipirinhas-batidas", 38, "Champanhe, morango e leite condensado."),
      criarItem("espanhola", "Espanhola", "caipirinhas-batidas", 38, "Vinho, abacaxi ou morango e leite condensado."),
      criarItem("drink-paraiso", "Paraíso", "caipirinhas-batidas", 36, "Cachaça de canela, maracujá e limão."),
      ...["Monster", "TNT", "Red Bull"].map((nome, indice) => criarItem(`energetico-${indice}`, nome, "energeticos", 18)),
      // Uísques listados como dose ou combo sem valor individual na foto.
      ...["Old Parr", "Passport", "Red Label", "Black Label", "Jack Daniel's", "White Horse"].map((nome, indice) => criarItem(`whisky-${indice}`, nome, "doses", null, "Dose ou combo.")),
      criarItem("dose-tequila", "Dose de tequila", "doses", 25),
      criarItem("dose-amarula", "Dose de Amarula", "doses", 25),
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
        (typeof product.price === "number" && (!Number.isFinite(product.price) || product.price < 0)) ||
        (typeof product.price !== "number" && !product.priceLabel) ||
        !categories.has(product.categoryId)
      )
        errors.push(
          `Produto inválido em ${shop.id}: ${product.id || product.name}`,
        );
  }
  return errors;
}
