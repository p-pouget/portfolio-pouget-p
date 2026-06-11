import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AffichageHero from "../components/AffichageHero";
import AffichageSelected from "../components/AffichageSelected";
import StatutChargement from "../components/StatutChargement";

const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  /* GESTION DES ÉTATS (STATE)
    - profil : Initialisé à null car il représente un document unique (Objet).
    - selected : Initialisé à [] (tableau vide) car il représente une collection de documents.
  */

  const [profil, setProfil] = useState();
  const [selected, setSelected] = useState([]);
  const [profilErreur, setProfilErreur] = useState(false);
  const [selectedErreur, setSelectedErreur] = useState(false);

  useEffect(() => {
    async function getProfil() {
      try {
        const response = await fetch(`${API_URL}/api/hero`);

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

  // logique d'extraction dans le backend
  useEffect(() => {
    async function getSelected() {
      try {
        const response = await fetch(`${API_URL}/api/projets/selected`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setSelected(result);
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
          {/* [...] crée une copie : reverse() modifie le tableau d'origine, donc on copie avant pour ne pas casser le state sinon bug */}
          {[...selected].reverse().map((data) => (
            <AffichageSelected key={data._id} projetSelected={data} />
          ))}
        </>
      ) : (
        <StatutChargement />
      )}

      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si selected existe ET selected.length>0 → affiche le composant | Sinon → affiche erreur */}
    </>
  );
}
