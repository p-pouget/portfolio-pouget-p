import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] border-t border-black flex flex-col md:flex-row items-center justify-between w-full py-4 h-32 md:h-18 md:px-24 mt-8 md:mt-12">
      <div className="font-semibold text-sm flex items-center justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/pierre-pouget-53b3743bb/"
          target="_blank"
          rel="noreferrer"
          className="text-[#5E5E5E] uppercase border-b border-transparent hover:border-black hover:text-black transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/p-pouget"
          target="_blank"
          rel="noreferrer"
          className="text-[#5E5E5E] uppercase border-b border-transparent hover:border-black hover:text-black transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <span className="text-xs text-[#5E5E5E]">
          © 2026 — Tous droits réservés.
        </span>

        <Link
          to="/login"
          className="text-xs md:text-sm font-semibold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          Login Admin
        </Link>
      </div>
    </footer>
  );
}
