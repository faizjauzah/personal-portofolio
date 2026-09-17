export function SkillsSection() {
  const categories = [
    {
      name: "Languages & Web Dev",
      skills: ["Python", "Java", "Kotlin", "JavaScript", "PHP", "SQL", "HTML & CSS", "React", "Next.js", "Tailwind CSS"],
      color: "bg-[#D02020]",
      textColor: "text-white"
    },
    {
      name: "Machine Learning & CV",
      skills: ["Scikit-learn", "PyTorch", "YOLOv12", "Semi-Supervised Learning", "Object Detection", "Pseudo-Labeling", "NLTK"],
      color: "bg-[#1040C0]",
      textColor: "text-white"
    },
    {
      name: "Data & Backend",
      skills: ["Pandas", "NumPy", "PySpark", "EDA", "Feature Engineering", "MariaDB", "Supabase"],
      color: "bg-[#F0C020]",
      textColor: "text-black"
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Android Studio", "Unity", "XAMPP", "Gradle"],
      color: "bg-[#D02020]",
      textColor: "text-white"
    }
  ];

  return (
    <section id="skills" className="bg-[#F0F0F0] py-16 md:py-24 px-4 md:px-8 border-b-4 border-black relative overflow-hidden">
      {/* Decorative large shapes playing with opacity */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#D02020] rounded-full opacity-10 pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#1040C0] opacity-10 pointer-events-none" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-black text-5xl md:text-7xl uppercase tracking-tighter inline-block border-b-8 border-black pb-2">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col">
              <h3 className="font-black text-2xl uppercase tracking-tighter mb-6 bg-black text-white inline-block px-4 py-2 self-start transform -rotate-2">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {cat.skills.map((skill, index) => {
                  const shapes = ["rounded-none", "rounded-full"];
                  const shape = shapes[index % shapes.length];
                  
                  return (
                    <span 
                      key={skill}
                      className={`
                        ${cat.color} ${cat.textColor} ${shape}
                        border-2 border-black shadow-[4px_4px_0px_0px_black]
                        px-4 py-2 font-bold uppercase tracking-wider text-sm md:text-base
                        hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_black] transition-all cursor-default
                      `}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
