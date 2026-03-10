import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Mentions légales — Extrad Solution",
};

export default function MentionsLegales() {
  return (
    <LegalLayout
      title="Mentions légales"
      lastUpdated="[À COMPLÉTER]"
      sections={[
        {
          title: "Éditeur du site",
          content: (
            <>
              <p><strong className="text-[#F5F0EB]">Raison sociale :</strong> [À COMPLÉTER]</p>
              <p><strong className="text-[#F5F0EB]">Forme juridique :</strong> [À COMPLÉTER — ex : SAS, SARL, auto-entrepreneur]</p>
              <p><strong className="text-[#F5F0EB]">Capital social :</strong> [À COMPLÉTER]</p>
              <p><strong className="text-[#F5F0EB]">SIRET :</strong> [À COMPLÉTER]</p>
              <p><strong className="text-[#F5F0EB]">Numéro de TVA intracommunautaire :</strong> [À COMPLÉTER]</p>
              <p><strong className="text-[#F5F0EB]">Adresse du siège social :</strong> [À COMPLÉTER]</p>
              <p><strong className="text-[#F5F0EB]">Adresse e-mail :</strong> [À COMPLÉTER]</p>
              <p><strong className="text-[#F5F0EB]">Directeur de la publication :</strong> [À COMPLÉTER]</p>
            </>
          ),
        },
        {
          title: "Hébergement",
          content: (
            <>
              <p>Ce site est hébergé par :</p>
              <p><strong className="text-[#F5F0EB]">Vercel Inc.</strong><br />440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />https://vercel.com</p>
            </>
          ),
        },
        {
          title: "Propriété intellectuelle",
          content: (
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive d'Extrad Solution ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est strictement interdite.
            </p>
          ),
        },
        {
          title: "Limitation de responsabilité",
          content: (
            <>
              <p>Extrad Solution s'efforce de maintenir les informations publiées sur ce site à jour et exactes. Toutefois, nous ne saurions garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées.</p>
              <p>Extrad Solution est un prestataire de coordination logistique. Les informations publiées sur ce site ne constituent pas un conseil juridique. Nous ne fournissons pas de conseil juridique direct et ne saurions être tenus responsables des décisions prises sur la base des informations présentes sur ce site.</p>
            </>
          ),
        },
        {
          title: "Données personnelles",
          content: (
            <p>
              Le traitement des données personnelles collectées via ce site est décrit dans notre <a href="/politique-de-confidentialite" className="text-[#C9A96E] hover:underline">Politique de confidentialité</a>.
            </p>
          ),
        },
        {
          title: "Droit applicable",
          content: (
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          ),
        },
      ]}
    />
  );
}
