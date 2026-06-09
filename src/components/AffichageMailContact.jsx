import { useState } from "react";

export default function AffichageMailContact({ mail }) {
  const [emailAffiche, setEmailAffiche] = useState(false); // True ou False uniquement = cohérence simple plutot que troisieme état avec useState(

  return (
    <section className="px-4 md:px-24 pt-8 md:pt-12 ">
      <div className="flex items-center gap-4 mb-4 ">
        <button
          onClick={() => setEmailAffiche(!emailAffiche)}
          className="text-xs md:text-sm font-semibold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          Email
        </button>
        <span className="text-sm text-[#5E5E5E] ">
          {emailAffiche ? mail : "Click to reveal"}
        </span>
      </div>

      <div className="border-b border-black mb-12 max-w-2xl" />
    </section>
  );
}
