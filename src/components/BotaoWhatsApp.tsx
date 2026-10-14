// Link de contato; fica oculto se o telefone estiver ausente ou inválido.
import { whatsappUrl } from "../utils/formatarMoeda";
export function WhatsAppButton({ phone }: { phone?: string }) {
  const url = whatsappUrl(phone);
  if (!url) return null;
  return (
    <a
      className="whatsapp-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com o estabelecimento pelo WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">
        ↗
      </span>
      <span>Fale com a gente</span>
    </a>
  );
}
