import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AffichageCardDetail from "../components/AffichageCardDetail";
import StatutChargement from "../components/StatutChargement";

const BASE_URL = "/curriculum.json"; // Mettre le / sinon BUG

export default function Experience() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState();
  const [experienceErreur, setExperienceErreur] = useState(false);

  // Pour Fichier Local =========================

  useEffect(() => {
    async function getExperience() {
      try {
        // JSON local : A CHANGER LORS API
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Fichier introuvable");
        const data = await response.json();
        const found = data.experiences.find((a) => a.id === id); // PAS DE NUMBER = REFAIRE LES FICHIER DATA
        if (!found) throw new Error("Données introuvable");
        setExperience(found);
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
