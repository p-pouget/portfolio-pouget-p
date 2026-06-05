import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AffichageProjects from "../components/AffichageProjects";
import StatutChargement from "../components/StatutChargement";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsErreur, setProjectsErreur] = useState(false);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await fetch(`/projets.json`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setProjects(result);
      } catch (e) {
        setProjectsErreur(true);
        toast.error("Impossible de charger les projets ");
      }
    }

    getProjects();
  }, []);

  return (
    <section className="px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
      {/* PASSAGE OBJET ENTIER CAR NON REUTILISE */}

      {/* IA Souhaite {xxErreur ? null ... } mais pas d'accord car plus logique de rester true/false ?*/}
      {projectsErreur ? (
        false
      ) : projects && projects.length > 0 ? (
        <>
          {projects.map((data) => (
            <AffichageProjects key={data.id} projetIntegral={data} />
          ))}
        </>
      ) : (
        <StatutChargement />
      )}
      {/* DOUBLE TERNAIRE : Si erreur Null alors : Si projects existe ET projects.length>0 → affiche le composant | Sinon → affiche erreur */}
    </section>
  );
}
