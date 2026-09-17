import { Hero3DView } from "../3d/Hero3DView";
import { scrollToSection } from "../../lib/scroll";

export function HeroSection() {
  const navCards = [
    { title: "Experience", color: "bg-[#D02020]", id: "experience", text: "text-white" },
    { title: "Projects", color: "bg-[#1040C0]", id: "projects", text: "text-white" },
    { title: "Skills", color: "bg-[#F0C020]", id: "skills" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden border-b-4 border-black bg-[#F0F0F0]">
      <Hero3DView />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-24 flex flex-col items-center pointer-events-none">
        <div className="text-center mb-16 md:mb-32">
          <h1 className="font-black uppercase leading-[0.85] text-[#121212] text-outline-white">
            <span className="block text-4xl md:text-6xl lg:text-8xl tracking-tighter mb-2 md:mb-4">Hi, I'm</span>
            <span className="block text-6xl md:text-8xl lg:text-[10rem] tracking-normal">Faiz Jauzah</span>
          </h1>
          <p className="mt-8 md:mt-12 font-bold text-2xl md:text-4xl bg-[#F0C020] border-4 border-black shadow-[6px_6px_0px_0px_black] inline-block px-6 py-3 md:px-8 md:py-4 uppercase pointer-events-auto transform -rotate-2">
            What would you like to know about me?
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-auto pointer-events-auto flex-wrap">
          {navCards.map((card, i) => (
            <a
              key={card.title}
              href={`#${card.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(card.id);
              }}
              className={`block border-4 border-black shadow-[6px_6px_0px_0px_black] p-6 hover:-translate-y-2 transition-transform ${card.color} ${card.text || "text-black"}`}
              style={{ transform: `rotate(${i === 1 ? "1deg" : i === 0 ? "-2deg" : "2deg"})` }}
            >
              <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tighter text-center">{card.title}</h2>
            </a>
          ))}
        </div>
      </div>

      <div className="bauhaus-dot-pattern absolute inset-0 pointer-events-none z-[-1]" />
    </section>
  );
}
