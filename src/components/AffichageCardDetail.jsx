import { useNavigate } from "react-router-dom";

export default function AffichageCardDetail({
  titre,
  description,
  stack,
  lienGithub,
  lienDeploiement,
  img,
}) {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-24 pt-8">
      <div className="border-l border-black max-w-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
          {titre}
        </h1>
        <hr className="border-t border-black mb-6" />

        {img && (
          <div className="mb-6">
            <img
              src={img}
              alt={titre}
              className="w-full h-72 object-cover md:grayscale-60"
            />
          </div>
        )}
        {/* COURT CIRCUIT && : Si ca existe, affiche la balise, si rien(=null)
        Affiche rien. Le && agit comme un ALORS. */}
        {stack?.length > 0 && (
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5E5E5E] mb-6">
            {stack.join(" / ")}
          </p>
        )}
        <p className="text-sm md:text-base text-[#5E5E5E] mb-8">
          {description}
        </p>
        <div className="flex flex-col gap-4 md:gap-2 mb-6 md:p-4">
          {/* // COURT CIRCUIT && : Si ca existe, affiche la balise, si rien(=null)
          Affiche rien. Le && agit comme un ALORS. */}
          {lienGithub && (
            <a
              href={lienGithub}
              target="_blank"
              rel="noreferrer"
              className="md:px-4 mb-4 group flex items-end justify-between border-b border-black/10 pb-2 hover:border-black transition-colors duration-300"
            >
              <span class="text-sm font-semibold uppercase tracking-widest text-[#5E5E5E] group-hover:text-black translate-x-0 group-hover:translate-x-2 transition-transform">
                VIEW Code
              </span>
              <span class="text-sm font-semibold text-[#5E5E5E] group-hover:text-black">
                GitHub
              </span>
            </a>
          )}
          {/* // COURT CIRCUIT && : Si ca existe, affiche la balise, si rien(=null)
          Affiche rien. Le && agit comme un ALORS. */}
          {lienDeploiement && (
            <a
              href={lienDeploiement}
              target="_blank"
              rel="noreferrer"
              className="md:px-4 mb-4 group flex items-end justify-between border-b border-black/10 pb-2 hover:border-black transition-colors duration-300"
            >
              <span class="text-sm font-semibold uppercase tracking-widest text-[#5E5E5E] group-hover:text-black translate-x-0 group-hover:translate-x-2 transition-transform">
                VIEW Project
              </span>
              <span class="text-sm font-semibold text-[#5E5E5E] group-hover:text-black">
                Deploy
              </span>
            </a>
          )}
        </div>
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer block ml-auto text-xs md:text-sm font-semibold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          Retour
        </button>
      </div>
    </section>
  );
}
