export default function AffichageFormContact({
  donnees,
  gererSaisie,
  soumettre,
  statutEnvoi,
}) {
  return (
    <section className="px-4 md:px-24 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10">
        Contact
      </h1>

      {/* AUTOFILL GERE DANS index.css */}
      <form onSubmit={soumettre} className="flex flex-col gap-8 max-w-2xl">
        <div className="w-full">
          <input
            type="text"
            name="nomComplet"
            value={donnees.nomComplet}
            onChange={gererSaisie}
            placeholder="Nom Complet"
            required
            className="w-full border-b border-black py-2 text-sm md:text-base placeholder:text-[#5E5E5E] text-black outline-none"
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            name="email"
            value={donnees.email}
            onChange={gererSaisie}
            placeholder="Adresse mail"
            required
            className="w-full border-b border-black py-2 text-sm md:text-base placeholder:text-[#5E5E5E] text-black outline-none"
          />
        </div>

        <div className="w-full mb-4">
          <textarea
            name="message"
            value={donnees.message}
            onChange={gererSaisie}
            placeholder="Votre message ..."
            required
            rows="5"
            className="w-full border-b border-black py-2 text-sm md:text-base  placeholder:text-[#5E5E5E] text-black outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={statutEnvoi}
          className="w-max text-xs md:text-sm font-semibold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black disabled:cursor-not-allowed"
        >
          {statutEnvoi ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </section>
  );
}
