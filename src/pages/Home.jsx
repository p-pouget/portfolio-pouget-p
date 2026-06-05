import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AffichageHero from "../components/AffichageHero";
import AffichageSelected from "../components/AffichageSelected";
import StatutChargement from "../components/StatutChargement";

export default function Home() {
  /* GESTION DES ÉTATS (STATE)
    - profil : Initialisé à null car il représente un document unique (Objet).
    - selected : Initialisé à [] (tableau vide) car il représente une collection de documents.
  */

  const [profil, setProfil] = useState();
  const [selected, setSelected] = useState([]);
  const [profilErreur, setProfilErreur] = useState(false);
  const [selectedErreur, setSelectedErreur] = useState(false);

  // ====================================

  /* EXTRACTION DU PROFIL 
    Simule une requête ciblant un document unique (Ex: db.collection.findOne())
    Le retour attendu est un objet brut, et non un tableau, injecté directement dans l'état.
  */

  useEffect(() => {
    async function getProfil() {
      try {
        const response = await fetch(`/hero.json`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setProfil(result);
      } catch (e) {
        setProfilErreur(true);
        toast.error("Impossible de charger le profil");
      }
    }

    getProfil();
  }, []);

  // ====================================

  /* EXTRACTION DES PROJETS SÉLECTIONNÉS
    Simule une route d'API renvoyant un tableau de documents préalablement filtrés par le serveur (Ex: db.collection.find({ selected: true })).
    Le retour attendu est un tableau d'objets, injecté directement dans l'état.
  */

  useEffect(() => {
    async function getSelected() {
      try {
        const response = await fetch(`/projets.json`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        // A SUPPRIMER LORS FILTRAGE API
        const projetsSelected = result.filter(
          (projet) => projet.selected === true,
        );
        const LimiteProjets = projetsSelected.slice(0, 3);
        setSelected(LimiteProjets);
      } catch (e) {
        setSelectedErreur(true);
        toast.error("Impossible de charger les projets");
      }
    }

    getSelected();
  }, []);

  // ======================================

  return (
    <>
      {/* --- Section HERO --- PASSAGE OBJET ENTIER CAR NON REUTILISE  
        DOCUMENT UNIQUE - Aucune itération (.map) n'est requise ni sémantiquement correcte ici.
      */}

      {/* IA Souhaite {xxErreur ? null ... } mais pas d'accord car plus logique de rester true/false ?*/}
      {profilErreur ? (
        false
      ) : profil ? (
        <AffichageHero hero={profil} />
      ) : (
        <StatutChargement />
      )}
      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si profil existe → affiche le composant | Sinon → affiche erreur */}

      {/* --- Section selected --- PASSAGE OBJET ENTIER CAR NON REUTILISE */}

      {/* IA Souhaite {xxErreur ? null ... } mais pas d'accord car plus logique de rester true/false ?*/}
      {selectedErreur ? (
        false
      ) : selected.length > 0 ? (
        <>
          <section className="px-4 md:px-24">
            <p className="text-xs font-bold uppercase tracking-wide text-[#5E5E5E] border-b [#5E5E5E] py-2">
              Selected Work
            </p>
          </section>
          {selected.map((data) => (
            <AffichageSelected key={data.id} projetSelected={data} />
          ))}
        </>
      ) : (
        <StatutChargement />
      )}

      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si selected existe ET selected.length>0 → affiche le composant | Sinon → affiche erreur */}
    </>
  );
}
