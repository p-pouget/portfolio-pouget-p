import { useState } from "react";

export default function AffichagePhoto({ curriculumIntegral }) {
  const [photoVisible, setPhotoVisible] = useState(false);

  return (
    <section>
      <button
        onClick={() => setPhotoVisible(!photoVisible)}
        className="w-full border border-black py-3 text-xs font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
      >
        {photoVisible ? "✕ Click to Close Profil" : "→ Click to View Profil"}
      </button>

      {photoVisible ? (
        <div className="mt-4">
          <img
            src={curriculumIntegral.photo}
            alt="Photo de profil"
            className="w-full h-54 object-cover grayscale-60 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ) : (
        <div className="mt-4 w-full h-54" />
      )}
    </section>
  );
}
