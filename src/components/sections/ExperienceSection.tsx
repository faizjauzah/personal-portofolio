import { Accordion } from "../ui/Accordion";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      content: (
        <div className="space-y-4">
          <p className="font-bold text-[#D02020] uppercase tracking-wider text-sm md:text-base">Pengadilan Tinggi Agama Gorontalo | Oct 2025 - Nov 2025</p>
          <p>Developed a web-based guest management system to digitize visitor registration and administrative processes for the institution.</p>
          <p>
            Designed database structures and implemented <strong>CRUD operations</strong> for recording guest information, visit purposes, appointment schedules, and meeting methods.
          </p>
        </div>
      ),
    },
    {
      title: "Laboratory Teaching Assistant",
      content: (
        <div className="space-y-4">
          <p className="font-bold text-[#1040C0] uppercase tracking-wider text-sm md:text-base">Universitas Islam Indonesia | Sep 2023 - Jul 2025</p>
          <p>Supported five courses across six semesters: Fundamental App Development, Information Systems Development, Web-Based App Development, Algorithms & Data Structures, and Programming Logic.</p>
          <p>
            Guided over <strong>140+ students</strong> across multiple classes in debugging, object-oriented programming, and UI design with SceneBuilder, while supervising practical exams to ensure academic integrity.
          </p>
        </div>
      ),
    },
    {
      title: "Scientific Division Staff",
      content: (
        <div className="space-y-4">
          <p className="font-bold text-[#F0C020] uppercase tracking-wider text-sm md:text-base">HMIF | Sep 2024 - Jan 2025</p>
          <p>Organized and oversaw the planning, coordination, and execution of webinars to enhance student knowledge in Informatics, collaborating with external speakers and internal teams.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="bg-[#1040C0] py-16 md:py-24 px-4 md:px-8 border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-b-4 border-black pb-4 inline-block bg-white px-6 py-2 shadow-[4px_4px_0px_0px_black] transform -rotate-1">
          <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tighter text-[#121212]">Experience</h2>
        </div>

        <div className="transform rotate-1">
          <Accordion items={experiences} />
        </div>
      </div>
    </section>
  );
}
