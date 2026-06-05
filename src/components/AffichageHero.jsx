// PASSAGE DE L'OBJET ENTIER .. PAS REUTILISABLE MAIS MOINS VERBEUX ET PLUS LISIBLE = DANS CE CAS OK

export default function AffichageHero({ hero }) {
  return (
    <section className="px-4 md:px-24 py-8 md:py-12">
      <h1 className="text-5xl md:text-7xl mb-8 font-bold tracking-tight">
        {hero.titre}
      </h1>

      <div className="border-l-2 border-black pl-4 mb-8">
        <p className="text-[#5E5E5E] text-lg md:text-xl font-semibold uppercase">
          {hero.valeurs[0]}
        </p>
        <p className="text-lg md:text-xl font-semibold uppercase ml-6 md:ml-10">
          {hero.valeurs[1]}
        </p>
        <p className="text-[#5E5E5E] text-lg md:text-xl font-semibold uppercase">
          {hero.valeurs[2]}
        </p>
      </div>

      <p className="text-[#5E5E5E] text-sm tracking-wide max-w-2xs md:tracking-normal md:text-lg md:max-w-xl">
        {hero.description}
      </p>
    </section>
  );
}
