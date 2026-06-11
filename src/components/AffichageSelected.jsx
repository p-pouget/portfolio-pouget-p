import { Link } from "react-router-dom";

export default function AffichageSelected({ projetSelected }) {
  const descriptionRaccourci =
    projetSelected.description.length > 200
      ? projetSelected.description.slice(0, 200).trimEnd() + "..."
      : projetSelected.description;

  const descriptionRaccourciMobile =
    projetSelected.description.length > 100
      ? projetSelected.description.slice(0, 100).trimEnd() + "..."
      : projetSelected.description;

  const stackRaccourci =
    projetSelected.stack.join(" / ").length > 30
      ? projetSelected.stack.join(" / ").slice(0, 30).trimEnd() + "..."
      : projetSelected.stack.join(" / ");

  return (
    <article className="px-4 md:px-24">
      <Link
        to={`/projects/${projetSelected._id}`}
        className="group block border-b border-black/10 hover:border-black px-4 py-5 cursor-pointer transition-colors duration-300"
      >
        <div className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
          <div className="flex flex-col md:flex-row md:items-baseline gap-0.5 md:gap-4 mb-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              {projetSelected.titre}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wide mb-1 text-[#5E5E5E]">
              {stackRaccourci}
            </p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <p className="text-[#5E5E5E] text-xs tracking-wide md:tracking-normal md:text-sm group-hover:text-black transition-colors duration-300">
              <span className="hidden md:inline">{descriptionRaccourci}</span>
              <span className="md:hidden">{descriptionRaccourciMobile}</span>
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
    </article>
  );
}
