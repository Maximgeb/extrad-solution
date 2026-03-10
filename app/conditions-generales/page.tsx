import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Conditions générales — Extrad Solution",
};

export default function ConditionsGenerales() {
  return (
    <LegalLayout
      title="Conditions générales de vente et de service"
      lastUpdated="[À COMPLÉTER]"
      sections={[
        {
          title: "Objet",
          content: (
            <p>
              Les présentes conditions générales régissent les relations contractuelles entre Extrad Solution (ci-après « le Prestataire ») et toute personne physique ou morale (ci-après « le Client ») souhaitant bénéficier de ses services de coordination logistique et de relocation internationale.
            </p>
          ),
        },
        {
          title: "Nature des services",
          content: (
            <>
              <p>Extrad Solution propose des services de coordination logistique pour la mobilité et la relocation internationales, incluant notamment :</p>
              <ul className="list-none space-y-2 mt-2">
                {[
                  "Planification et coordination de l'itinéraire de relocation",
                  "Réservation et coordination de transport (aviation privée ou commerciale)",
                  "Coordination des transferts terrestres",
                  "Gestion et accompagnement documentaire",
                  "Orientation vers des partenaires juridiques qualifiés (sans fourniture de conseil juridique direct)",
                  "Accompagnement et suivi personnalisé",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 p-4 rounded-sm" style={{ background: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.15)" }}>
                <strong className="text-[#C9A96E]">Important :</strong> Extrad Solution est un prestataire de coordination logistique. Nous ne fournissons pas de conseil juridique et n'intervenons pas dans des procédures judiciaires. Toute demande impliquant un contournement de la loi ou une procédure judiciaire en cours sera refusée.
              </p>
            </>
          ),
        },
        {
          title: "Acceptation des conditions",
          content: (
            <p>
              Toute commande ou demande de service implique l'acceptation pleine et entière des présentes conditions générales. Le Client déclare avoir pris connaissance des présentes conditions avant de valider sa demande.
            </p>
          ),
        },
        {
          title: "Tarification",
          content: (
            <>
              <p>Les tarifs des services sont communiqués lors de la consultation initiale et formalisés dans un devis personnalisé. Le tarif de base démarre à 14 999€ selon le projet.</p>
              <p className="mt-2">Le devis personnalisé tient compte de :</p>
              <ul className="list-none space-y-1.5 mt-2">
                {[
                  "La destination et l'origine",
                  "Le nombre de personnes et de bagages",
                  "Les prestations logistiques requises",
                  "Le niveau d'urgence et les délais",
                  "Les éventuels services additionnels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">Les prix sont exprimés en euros TTC, sauf mention contraire.</p>
            </>
          ),
        },
        {
          title: "Modalités de paiement",
          content: (
            <>
              <p>[À COMPLÉTER selon vos pratiques — exemple :]</p>
              <p>Le règlement s'effectue selon les modalités convenues dans le devis : acompte à la commande, solde à la réalisation du service ou paiement intégral selon la nature du projet. Les modes de paiement acceptés sont précisés dans le devis.</p>
            </>
          ),
        },
        {
          title: "Obligations du Client",
          content: (
            <>
              <p>Le Client s'engage à :</p>
              <ul className="list-none space-y-1.5 mt-2">
                {[
                  "Fournir des informations exactes, complètes et à jour nécessaires à la réalisation du service",
                  "Coopérer de bonne foi avec le Prestataire",
                  "S'assurer que sa demande ne contrevient à aucune loi ou réglementation applicable",
                  "Informer immédiatement le Prestataire de tout changement de situation pertinent",
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
          title: "Obligations du Prestataire",
          content: (
            <p>
              Extrad Solution s'engage à réaliser les services commandés avec professionnalisme et diligence, dans le respect des délais convenus. Le Prestataire est soumis à une obligation de moyens et non de résultat, certains facteurs extérieurs pouvant affecter l'exécution du service (conditions météorologiques, décisions administratives, grèves, etc.).
            </p>
          ),
        },
        {
          title: "Responsabilité",
          content: (
            <>
              <p>La responsabilité d'Extrad Solution ne saurait être engagée en cas de :</p>
              <ul className="list-none space-y-1.5 mt-2">
                {[
                  "Force majeure ou événement imprévisible",
                  "Informations inexactes fournies par le Client",
                  "Refus administratif ou douanier indépendant de notre volonté",
                  "Décisions juridiques ou judiciaires affectant le projet",
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
          title: "Confidentialité",
          content: (
            <p>
              Extrad Solution s'engage à traiter toutes les informations relatives au Client avec la plus stricte confidentialité. Ces informations ne sont utilisées qu'aux fins de réalisation du service et ne sont pas transmises à des tiers sans accord explicite du Client.
            </p>
          ),
        },
        {
          title: "Droit applicable et litiges",
          content: (
            <p>
              Les présentes conditions générales sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord, les tribunaux compétents seront ceux du ressort du siège social d'Extrad Solution.
            </p>
          ),
        },
      ]}
    />
  );
}
