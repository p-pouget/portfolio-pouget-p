import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AffichageCardDetail from "../components/AffichageCardDetail";
import StatutChargement from "../components/StatutChargement";

const API_URL = import.meta.env.VITE_API_URL;

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState();
  const [projectErreur, setProjectErreur] = useState(false);

  // Pour Fichier Local =========================

  useEffect(() => {
    async function getProjet() {
      try {
        const response = await fetch(`${API_URL}/api/projets/${id}`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setProject(result);
      } catch (e) {
        setProjectErreur(true);
        toast.error("Impossible de charger le projet");
      }
    }
    getProjet();
  }, [id]); // ← id en dépendance : si l'URL change, le useEffect se relance et re-fetch

  return (
    <>
      {/* CARD = Destrcutration car conponents réutilisable
        Validation de la présence de l'objet (profil !== null) grace a ternaire.
        DOCUMENT UNIQUE - Aucune itération (.map) n'est requise
      */}

      {/* IA Souhaite {xxErreur ? null ... } mais pas d'accord car plus logique de rester true/false ?*/}
      {projectErreur ? (
        false
      ) : project ? (
        <AffichageCardDetail
          titre={project.titre}
          stack={project.stack}
          description={project.description}
          lienGithub={project.lienGithub}
          lienDeploiement={project.lienDeploiement}
          img={project.img}
        />
      ) : (
        <StatutChargement />
      )}
      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si projet existe → affiche le composant | Sinon → affiche erreur */}
    </>
  );
}
