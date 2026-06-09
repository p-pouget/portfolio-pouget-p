import { Link } from "react-router-dom";

export default function AffichageExperiences({ curriculumIntegral }) {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
        Expériences
      </h2>
      <div className="border-b border-black mb-8" />

      <div className="flex flex-col gap-1">
        {/* CONST dans le map mais avant le return sinon casse car code dans return = jsx et non javascript + return = point d'arret et dans map car itération pour chaque élement du tableau */}

        {curriculumIntegral.experiences.map((experience) => {
          const descriptionRaccourci =
            experience.description.length > 200
              ? experience.description.slice(0, 200).trimEnd() + "..."
              : experience.description;

          const descriptionRaccourciMobile =
            experience.description.length > 100
              ? experience.description.slice(0, 100).trimEnd() + "..."
              : experience.description;

          const entrepriseRaccourciMobile =
            experience.entreprise.length > 30
              ? experience.entreprise.slice(0, 30).trimEnd() + "..."
              : experience.entreprise;

          return (
            <Link
              to={`/cv/${experience.id}`}
              key={experience.id}
              className="group block border-b border-black/10 hover:border-black py-5 px-4 transition-colors duration-300"
            >
              <div className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-0.5 md:gap-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    {experience.titre}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#5E5E5E] shrink-0">
                    {experience.date}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-wide text-[#5E5E5E] mb-1">
                  <span className="md:hidden">{entrepriseRaccourciMobile}</span>
                  <span className="hidden md:inline">
                    {experience.entreprise}
                  </span>
                </p>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-[#5E5E5E] text-xs tracking-wide md:tracking-normal md:text-sm group-hover:text-black transition-colors duration-300">
                    <span className="hidden md:inline">
                      {descriptionRaccourci}
                    </span>
                    <span className="md:hidden">
                      {descriptionRaccourciMobile}
                    </span>
                  </p>
                  <span className="hidden md:inline text-xs font-bold uppercase tracking-wide text-[#5E5E5E] group-hover:text-black border-b border-transparent group-hover:border-black transition-colors duration-300 md:shrink-0">
                    {/* shrink gere le nombre de ligne de l'élément = responsive ok et donc pas besoin de gerer avec max-w ...*/}
                    See more →
                  </span>
                </div>
                <span className="md:hidden inline-block mt-4 text-xs font-bold uppercase tracking-wide text-[#5E5E5E] group-hover:text-black border-b border-transparent group-hover:border-black transition-colors duration-300 md:shrink-0">
                  {/* Inline-Bloc car sinon le span ne prend pas mt .. car élément libre */}
                  See more →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
