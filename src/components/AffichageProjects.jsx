import { Link } from "react-router-dom";

export default function AffichageProjects({ projetIntegral }) {
  const descriptionRaccourci =
    projetIntegral.description.length > 200
      ? projetIntegral.description.slice(0, 200).trimEnd() + "..."
      : projetIntegral.description;

  const descriptionRaccourciMobile =
    projetIntegral.description.length > 100
      ? projetIntegral.description.slice(0, 100).trimEnd() + "..."
      : projetIntegral.description;

  const stackRaccourci =
    projetIntegral.stack.join(" / ").length > 25
      ? projetIntegral.stack.join(" / ").slice(0, 25).trimEnd() + "..."
      : projetIntegral.stack.join(" / ");

  return (
    <article className="md:px-24 md:max-w-xl md:mx-auto">
      {/* Le md:px n'est pas un doublon = permet de resserer colonnes */}
      <Link
        to={`/projects/${projetIntegral._id}`}
        className="group block cursor-pointer"
      >
        {projetIntegral.img ? (
          <div className="mb-3">
            <img
              src={projetIntegral.img}
              alt={projetIntegral.titre}
              className="w-full h-48 object-cover md:grayscale-60 md:group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ) : (
          <div className="mb-3">
            <img
              src="https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE"
              alt="Photographie par default représentant un vieil appareil photo"
              className="w-full h-48 object-cover md:grayscale-60 md:group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        )}
        {/* TERNAIRE : Si img existe → affiche le img | Sinon → img par default */}

        <div className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#5E5E5E] mb-1">
            {stackRaccourci}
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">
            {projetIntegral.titre}
          </h3>
          <p className="mb-3 text-[#5E5E5E] text-sm tracking-wide md:tracking-normal md:max-w-sm group-hover:text-black transition-colors duration-300">
            <span className="md:hidden">{descriptionRaccourciMobile}</span>
            <span className="hidden md:inline">{descriptionRaccourci}</span>
          </p>
          <span className="text-xs font-bold uppercase tracking-wide text-[#5E5E5E] group-hover:text-black border-b border-transparent group-hover:border-black transition-colors duration-300">
            See more →
          </span>
        </div>
      </Link>
    </article>
  );
}
