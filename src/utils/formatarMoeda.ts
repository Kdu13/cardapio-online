// Funções utilitárias: formatação BRL e validação/montagem do link do WhatsApp.
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}
export function whatsappUrl(phone?: string): string | undefined {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, "");
  const international = digits.startsWith("55") ? digits : `55${digits}`;
  return /^55\d{10,11}$/.test(international)
    ? `https://wa.me/${international}`
    : undefined;
}
