// Rodapé com endereço, horário e link opcional para o Instagram.
import type { ContactInfo } from "../types/cardapio";
export function Footer({
  name,
  contact,
}: {
  name: string;
  contact: ContactInfo;
}) {
  const instagram = contact.instagram?.replace(/^@/, "");
  return (
    <footer className="site-footer">
      <div className="footer-info">
        {contact.address && <span>{contact.address}</span>}
        {contact.hours && <span>{contact.hours}</span>}
        {instagram && (
          <a
            href={`https://instagram.com/${encodeURIComponent(instagram)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram · @{instagram}
          </a>
        )}
      </div>
      <p>Cardápio digital de {name}</p>
    </footer>
  );
}
