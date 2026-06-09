export default function AffichageCompetences({ curriculumIntegral }) {
  const { hardSkills, softSkills, langues } = curriculumIntegral.competences;

  return (
    <section className="py-8 md:py-12">
      <div className="border border-black px-8 py-4 flex flex-col gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-2">
            Compétences
          </h2>
          <div className="border-b border-black mb-2" />

          <p className="text-sm font-semibold uppercase tracking-wide text-[#5E5E5E] mb-3">
            Hard Skills
          </p>
          <ul className="flex flex-col gap-2">
            {hardSkills.map((skill) => (
              <li
                key={skill}
                className="text-xs font-semibold uppercase tracking-wide flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-black shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5E5E5E] mb-3">
            Soft Skills & Langues
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-semibold uppercase tracking-wide border border-black px-2 py-0.5"
              >
                {skill}
              </span>
            ))}
            {langues.map((langue) => (
              <span
                key={langue}
                className="text-xs font-semibold uppercase tracking-wide border border-black px-2 py-0.5 text-[#5E5E5E]"
              >
                {langue}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
