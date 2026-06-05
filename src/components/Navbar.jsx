import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#F9F9F9] border-b border-black h-18 flex items-center justify-between px-4 md:px-24 w-full sticky top-0 z-50">
      <div>
        <Link
          to="/"
          className="text-black font-semibold uppercase tracking-wide text-lg md:text-2xl md:hover:border-black md:border-2 md:p-1 md:border-transparent duration-300 "
        >
          Pierre Pouget.
        </Link>
      </div>

      <div className="hidden font-semibold text-sm uppercase md:flex items-center gap-10">
        <Link
          to="/cv"
          className="text-[#5E5E5E] border-b border-transparent hover:border-black hover:text-black transition-colors duration-300"
        >
          Curriculum
        </Link>
        <Link
          to="/projects"
          className="text-[#5E5E5E] border-b border-transparent hover:border-black hover:text-black transition-colors duration-300"
        >
          Projets
        </Link>
        <Link
          to="/contact"
          className="text-[#5E5E5E] border-b border-transparent hover:border-black hover:text-black transition-colors duration-300"
        >
          Contact
        </Link>
      </div>

      {/* MENU BURGER*/}
      <button
        onClick={burgerMenu}
        className="md:hidden p-2 text-black hover:text-[#5E5E5E] transition-colors duration-300 z-51"
      >
        {isMenuOpen ? (
          <span className="text-3xl font-semibold">X</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        className={`md:hidden absolute z-50 top-0 left-0 w-full h-screen bg-[#F9F9F9] flex flex-col items-center justify-center gap-14 transition-opacity duration-400 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          to="/"
          onClick={burgerMenu}
          className="text-3xl font-semibold text-black uppercase tracking-widest hover:text-[#5E5E5E]"
        >
          Home
        </Link>
        <Link
          to="/cv"
          onClick={burgerMenu}
          className="text-3xl font-semibold text-black uppercase tracking-widest hover:text-[#5E5E5E]"
        >
          CV
        </Link>
        <Link
          to="/projects"
          onClick={burgerMenu}
          className="text-3xl font-semibold text-black uppercase tracking-widest hover:text-[#5E5E5E]"
        >
          Projets
        </Link>
        <Link
          to="/contact"
          onClick={burgerMenu}
          className="text-3xl font-semibold text-black uppercase tracking-widest hover:text-[#5E5E5E]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
