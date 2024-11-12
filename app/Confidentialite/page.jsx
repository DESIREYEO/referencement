import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PolitiqueDeConfidentialite = () => {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité</title>
      </Head>
      <div className="relative pr-[100px] pl-[100px] pt-[20px]">
        <div className="p-8 mt-24">
          <h1 className="text-3xl font-bold mb-6">POLITIQUE DE CONFIDENTIALITÉ</h1>
          <p className="mb-4">
            La présente politique de confidentialité fixe les conditions dans lesquelles toutes les
            informations (y compris toute donnée à caractère personnel, selon la définition qui en est
            donnée par le droit applicable à la protection des données) collectées auprès de vous, ou que
            vous fournissez, par le biais du site web <a href="https://bakkr-com.vercel.app" className="text-blue-600 hover:underline">https://bakkr-com.vercel.app</a>, seront traitées par nos
            soins ou par des partenaires tiers cités dans nos mentions.
          </p>
          <p className="mb-4">
            Veuillez lire attentivement ce qui suit pour comprendre nos pratiques concernant les
            informations vous concernant et la façon dont nous allons les traiter. Le but de cette
            politique de confidentialité est d'informer les utilisateurs de notre site des données
            personnelles que nous recueillons ainsi que les informations suivantes :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Les données personnelles que nous recueillons</li>
            <li>L'utilisation des données recueillies</li>
            <li>Qui a accès aux données recueillies</li>
            <li>Les droits des utilisateurs du site</li>
            <li>La politique de cookies du site</li>
          </ul>
          <p className="mb-6">
            Cette politique de confidentialité fonctionne parallèlement aux conditions générales
            d'utilisation de notre site.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Lois applicables</h2>
          <p className="mb-4">
            Conformément au Règlement général sur la protection des données (RGPD), cette politique de
            confidentialité est conforme aux règlements suivants. Les données à caractère personnel
            doivent être :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Traitées de manière licite, loyale et transparente au regard de la personne concernée</li>
            <li>Collectées pour des finalités déterminées, explicites et légitimes</li>
            <li>Adéquates, pertinentes et limitées à ce qui est nécessaire</li>
            <li>Exactes et tenues à jour</li>
            <li>Conservées sous une forme permettant l'identification pendant une durée n'excédant pas celle nécessaire</li>
            <li>Traitées de façon à garantir une sécurité appropriée des données</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">2. Consentement</h2>
          <p className="mb-6">
            En utilisant notre site et nos services, les utilisateurs conviennent et consentent aux
            conditions énoncées dans cette politique de confidentialité, ainsi qu'à la collecte, l'utilisation
            et la conservation des données comme indiqué.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Données collectées automatiquement</h2>
          <p className="mb-4">
            Lorsque vous visitez et utilisez notre site, nous pouvons automatiquement recueillir et conserver
            les renseignements suivants :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Lieu</li>
            <li>Liens sur lesquels un utilisateur clique tout en utilisant le site</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">4. Données recueillies de façon non automatique</h2>
          <p className="mb-4">
            Nous collectons également les données suivantes lorsque vous effectuez certaines actions sur
            notre site ou notre application mobile :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Prénom et nom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse d'un bien immobilier</li>
            <li>Photos des biens immobiliers</li>
            <li>Nombre de biens sous gestion</li>
            <li>Profil de l'agence (affiché sur notre application mobile)</li>
          </ul>
          <p className="mb-6">
            Ces informations sont utilisées pour envoyer des e-mails aux agences immobilières, pour afficher
            leurs biens et leur profil sur notre application mobile Bakkro.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Comment nous utilisons les données personnelles</h2>
          <p className="mb-4">
            Les données personnelles recueillies seront utilisées uniquement à des fins précisées dans
            cette politique ou sur les pages pertinentes de notre site. Nous utilisons les données pour :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>La communication avec les agences immobilières</li>
            <li>L'affichage des biens et du profil des agences dans notre application mobile</li>
            <li>Des analyses statistiques pour améliorer nos services</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">6. Avec qui nous partageons les données personnelles</h2>
          <p className="mb-4">
            Nous pouvons divulguer les données utilisateur aux membres de notre organisation ou à des
            tiers lorsque cela est nécessaire pour réaliser les objectifs énoncés dans cette politique.
            Nous nous engageons à ne pas vendre ou partager vos données avec d'autres tiers, sauf dans
            les cas suivants :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Si la loi l'exige</li>
            <li>Pour protéger nos droits légaux</li>
            <li>Dans le cadre d'une vente de l'entreprise</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">7. Durée de conservation des données</h2>
          <p className="mb-6">
            Nous ne conservons pas les données des utilisateurs au-delà de ce qui est nécessaire pour
            atteindre les fins pour lesquelles elles sont recueillies. Les données peuvent être conservées
            plus longtemps dans certains cas légaux ou contractuels.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Comment nous protégeons vos données personnelles</h2>
          <p className="mb-6">
            Nous utilisons le protocole de sécurité TLS pour transmettre les renseignements personnels.
            Les données stockées sont sécurisées et accessibles uniquement par notre personnel autorisé,
            qui est soumis à des accords de confidentialité stricts.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. Vos droits en tant qu'utilisateur</h2>
          <p className="mb-4">En vertu du RGPD, les utilisateurs ont les droits suivants :</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit de restreindre le traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'objection</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">10. Politique sur les cookies</h2>
          <p className="mb-6">
            Nous utilisons des cookies analytiques et de ciblage pour améliorer l'expérience utilisateur.
            Vous pouvez désactiver les cookies via les paramètres de votre navigateur, mais cela pourrait
            affecter la fonctionnalité de notre site.
          </p>

          <h2 className="text-2xl font-bold mb-4">11. Modifications</h2>
          <p className="mb-6">
            Cette politique de confidentialité peut être modifiée à tout moment pour se conformer aux lois
            ou pour s'adapter à notre processus de collecte de données. Les utilisateurs seront informés
            par e-mail en cas de changements majeurs.
          </p>

          <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
          <p className="mb-4">
            Pour toute question ou demande relative à vos données, veuillez nous contacter à :
            <a href="mailto:administrateur@bakkro.com" className="text-blue-600 hover:underline"> administrateur@bakkro.com</a>
          </p>
          <p className="mb-4">
            Adresse de l'entreprise : Côte d'Ivoire - Abidjan
          </p>
          <p className="mb-4">Date d'entrée en vigueur : le 9 septembre 2024</p>
        </div>
      </div>
    </>
  );
};

export default PolitiqueDeConfidentialite;