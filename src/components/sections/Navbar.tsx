import { useState } from "react";
import { scrollToSection } from "../../lib/scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Experience", "Projects", "Skills", "Contact"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false); // closes the mobile menu too, harmless on desktop
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F0F0F0] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Geometric Logo */}
        <div className="flex items-center gap-1 md:gap-2 scale-75 md:scale-100 origin-left">
          <div className="w-6 h-6 rounded-full bg-[#D02020] border-2 border-black" />
          <div className="w-6 h-6 bg-[#1040C0] border-2 border-black" />
          <div className="w-6 h-6 bg-[#F0C020] border-2 border-black" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
          <span className="ml-4 font-black text-2xl tracking-tighter uppercase">Faiz J.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleNavClick(e, link.toLowerCase())} className="font-bold uppercase tracking-widest text-lg hover:text-[#D02020] transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button  */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold uppercase text-sm w-20">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F0F0F0] border-b-4 border-black flex flex-col p-6 gap-6 shadow-xl">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className="font-bold uppercase tracking-widest text-2xl hover:text-[#D02020] transition-colors border-b-2 border-black/10 pb-2 last:border-0"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
