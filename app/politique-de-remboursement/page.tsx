import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Politique de remboursement — Extrad Solution",
};

export default function PolitiqueRemboursement() {
  return (
    <LegalLayout
      title="Politique de remboursement"
      lastUpdated="[À COMPLÉTER]"
      sections={[
        {
          title: "Nature des services",
          content: (
            <p>
              Les services d'Extrad Solution sont des prestations de coordination logistique sur mesure, engageant des ressources humaines et opérationnelles dès la confirmation du projet. De ce fait, les conditions de remboursement tiennent compte du niveau d'avancement du service.
            </p>
          ),
        },
        {
          title: "Annulation avant démarrage du service",
          content: (
            <>
              <p>[À COMPLÉTER selon vos pratiques — exemple :]</p>
              <ul className="list-none space-y-2 mt-2">
                {[
                  "Annulation plus de 48h avant le début de la coordination : remboursement de l'acompte sous déduction des frais administratifs engagés",
                  "Annulation moins de 48h avant le début de la coordination : l'acompte est acquis en totalité au titre des ressources mobilisées",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          title: "Annulation en cours de service",
          content: (
            <p>
              Si le Client décide d'interrompre le service après son démarrage, les frais déjà engagés par Extrad Solution (réservations, coordination, prestataires) sont facturés au prorata de l'avancement. Aucun remboursement ne peut être accordé sur les frais de tiers déjà engagés (billets d'avion, hébergement, etc.).
            </p>
          ),
        },
        {
          title: "Cas de force majeure",
          content: (
            <p>
              En cas d'événement de force majeure rendant impossible l'exécution du service (catastrophe naturelle, décision gouvernementale, etc.), les conditions de remboursement sont définies au cas par cas, en bonne foi entre les parties.
            </p>
          ),
        },
        {
          title: "Procédure de remboursement",
          content: (
            <>
              <p>Pour toute demande de remboursement, le Client doit :</p>
              <ul className="list-none space-y-1.5 mt-2">
                {[
                  "Notifier Extrad Solution par écrit à l'adresse e-mail : [À COMPLÉTER]",
                  "Préciser le motif de la demande",
                  "Fournir les justificatifs nécessaires",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                Extrad Solution s'engage à répondre à toute demande de remboursement dans un délai de [À COMPLÉTER] jours ouvrés à compter de la réception de la demande complète.
              </p>
            </>
          ),
        },
        {
          title: "Contact",
          content: (
            <p>
              Pour toute question relative à notre politique de remboursement, contactez-nous à :<br />
              <strong className="text-[#F5F0EB]">[À COMPLÉTER — e-mail]</strong><br />
              Ou via notre <a href="/contact" className="text-[#C9A96E] hover:underline">page de contact</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
