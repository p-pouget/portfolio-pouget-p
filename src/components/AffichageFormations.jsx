export default function AffichageFormations({ curriculumIntegral }) {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
        Formations
      </h2>
      <div className="border-b border-black mb-8" />

      <div className="flex flex-col gap-1">
        {[...curriculumIntegral.formations].reverse().map((formation) => (
          // Ici pas bug mais precaution = [...] crée une copie : reverse() modifie le tableau d'origine, donc on copie avant pour ne pas casser le state sinon bug

          <div
            key={formation._id}
            className="border-b border-black/10 py-5 px-4"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-0.5 md:gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {formation.diplome}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#5E5E5E] shrink-0">
                {/* shrink gere le nombre de ligne de l'élément = responsive ok et donc pas besoin de gerer avec max-w ...*/}
                {formation.date}
              </p>
            </div>
            <p className="text-xs uppercase tracking-wide text-[#5E5E5E] mb-1">
              {formation.etablissement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
