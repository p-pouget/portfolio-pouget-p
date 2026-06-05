import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AffichageExperiences from "../components/AffichageExperiences";
import AffichageFormations from "../components/AffichageFormations";
import AffichageCompetences from "../components/AffichageCompetences";
import AffichagePhoto from "../components/AffichagePhoto";
import StatutChargement from "../components/StatutChargement";

export default function Cv() {
  const [curriculum, setCurriculum] = useState();
  const [curriculumErreur, setCurriculumErreur] = useState(false);

  useEffect(() => {
    async function getCurriculum() {
      try {
        const response = await fetch(`/curriculum.json`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setCurriculum(result);
      } catch (e) {
        setCurriculumErreur(true);
        toast.error("Impossible de charger le CV ");
      }
    }

    getCurriculum();
  }, []);

  return (
    <section className="px-6 md:px-24">
      {/* PASSAGE OBJET ENTIER CAR NON REUTILISE */}

      {/* IA Souhaite {xxErreur ? null ... } mais pas d'accord car plus logique de rester true/false ?*/}
      {curriculumErreur ? (
        false
      ) : curriculum ? (
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex-1">
            <AffichageExperiences curriculumIntegral={curriculum} />
            <AffichageFormations curriculumIntegral={curriculum} />
          </div>

          <div className="md:w-72 md:shrink-0">
            <AffichageCompetences curriculumIntegral={curriculum} />
            <AffichagePhoto curriculumIntegral={curriculum} />
          </div>
        </div>
      ) : (
        <StatutChargement />
      )}
      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si projects existe → affiche le composant | Sinon → affiche erreur */}
    </section>
  );
}
