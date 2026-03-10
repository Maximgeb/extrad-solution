import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Politique de confidentialité — Extrad Solution",
};

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      lastUpdated="[À COMPLÉTER]"
      sections={[
        {
          title: "Responsable du traitement",
          content: (
            <>
              <p>Le responsable du traitement des données personnelles collectées sur ce site est :</p>
              <p><strong className="text-[#F5F0EB]">[À COMPLÉTER — Nom de la société / Nom du responsable]</strong><br />[Adresse]<br />[E-mail de contact]</p>
            </>
          ),
        },
        {
          title: "Données collectées",
          content: (
            <>
              <p>Dans le cadre de nos services, nous sommes susceptibles de collecter les données suivantes :</p>
              <ul className="list-none space-y-2 mt-2">
                {[
                  "Nom et prénom",
                  "Adresse e-mail",
                  "Numéro de téléphone",
                  "Informations relatives à votre situation et votre projet de relocation",
                  "Données de navigation (via cookies analytiques, si consentement donné)",
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
          title: "Finalités du traitement",
          content: (
            <>
              <p>Vos données sont collectées pour les finalités suivantes :</p>
              <ul className="list-none space-y-2 mt-2">
                {[
                  "Traitement de votre demande de consultation ou de devis",
                  "Coordination et suivi de votre projet de relocation",
                  "Communication par e-mail ou WhatsApp dans le cadre de votre dossier",
                  "Amélioration de nos services",
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
          title: "Base légale",
          content: (
            <p>
              Le traitement est fondé sur votre consentement explicite (article 6.1.a du RGPD) et sur l'exécution d'un contrat (article 6.1.b du RGPD) lorsque vous avez souscrit à l'un de nos services.
            </p>
          ),
        },
        {
          title: "Durée de conservation",
          content: (
            <p>
              Vos données sont conservées pour la durée strictement nécessaire à la réalisation des finalités décrites ci-dessus, et au maximum 3 ans à compter de la fin de la relation commerciale, sauf obligation légale de conservation plus longue.
            </p>
          ),
        },
        {
          title: "Partage des données",
          content: (
            <>
              <p>Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :</p>
              <ul className="list-none space-y-2 mt-2">
                {[
                  "Nos partenaires logistiques et juridiques, dans le cadre strict de l'exécution de votre projet",
                  "Nos prestataires techniques (hébergement, CRM), soumis à des engagements de confidentialité",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">Aucune donnée n'est transférée sans votre consentement explicite préalable.</p>
            </>
          ),
        },
        {
          title: "Vos droits",
          content: (
            <>
              <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-none space-y-2 mt-2">
                {[
                  "Droit d'accès",
                  "Droit de rectification",
                  "Droit à l'effacement (droit à l'oubli)",
                  "Droit à la limitation du traitement",
                  "Droit à la portabilité",
                  "Droit d'opposition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">Pour exercer ces droits, contactez-nous à : <strong className="text-[#F5F0EB]">[À COMPLÉTER — e-mail DPO / contact]</strong></p>
              <p className="mt-2">Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
            </>
          ),
        },
        {
          title: "Cookies",
          content: (
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun cookie de tracking ou publicitaire n'est déposé sans votre consentement explicite. Pour en savoir plus, consultez notre politique de cookies [À COMPLÉTER si applicable].
            </p>
          ),
        },
      ]}
    />
  );
}
