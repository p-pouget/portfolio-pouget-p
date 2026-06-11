import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AffichageCardDetail from "../components/AffichageCardDetail";
import StatutChargement from "../components/StatutChargement";

const API_URL = import.meta.env.VITE_API_URL;

export default function Experience() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState({});
  const [experienceErreur, setExperienceErreur] = useState(false);

  useEffect(() => {
    async function getExperience() {
      try {
        const response = await fetch(
          `${API_URL}/api/curriculum/experience/${id}`,
        );
        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setExperience(result);
      } catch (e) {
        setExperienceErreur(true);
        toast.error("Impossible de charger les données");
      }
    }
    getExperience();
  }, [id]); // ← id en dépendance : si l'URL change, le useEffect se relance et re-fetch

  return (
    <>
      {/* CARD = Destrcutration car conponents réutilisable
        Validation de la présence de l'objet (experience !== null) grace a ternaire.
        DOCUMENT UNIQUE - Aucune itération (.map) n'est requise
      */}
      {/* IA Souhaite {xxErreur ? null ... } mais pas d'accord car plus logique de rester true/false ?*/}
      {experienceErreur ? (
        false
      ) : experience ? (
        <AffichageCardDetail
          titre={experience.titre}
          entreprise={`${experience.entreprise} | ${experience.date}`}
          description={experience.description}
        />
      ) : (
        <StatutChargement />
      )}
      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si projet existe → affiche le composant | Sinon → affiche erreur */}
    </>
  );
}
