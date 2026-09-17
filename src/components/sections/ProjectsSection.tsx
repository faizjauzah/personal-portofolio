import { Card } from "../ui/Card";

export function ProjectsSection() {
  const projects = [
    {
      title: "Retail Product Detection",
      type: "Undergraduate Thesis · Solo Project",
      description: "Semi-supervised learning pipeline using YOLOv12-Nano with pseudo-labeling and Noisy Student Training, lifting labeling efficiency by 50% and reaching 95% mAP across 408 retail images.",
      color: "red" as const,
      pattern: "circle" as const,
      tags: ["Computer Vision", "YOLOv12", "Semi-Supervised Learning"],
      repo: "https://github.com/faizjauzah/optimal-ssl-split",
    },
    {
      title: "NLP Text Summarizer",
      type: "Team Project · Project Leader",
      description: "Led a 2-member team building an extractive text summarization app with NLTK, covering tokenization, stop-word removal, sentence scoring, and adjustable summary length via Streamlit.",
      color: "blue" as const,
      pattern: "triangle" as const,
      tags: ["NLP", "NLTK", "Streamlit"],
      repo: "https://github.com/faizjauzah/text-summarizer",
    },
    {
      title: "Taxi Price Prediction",
      type: "Solo Project",
      description: "Linear regression model on urban taxi transportation data using PySpark, achieving an R-squared of 86% after outlier detection, log transformation, and context-aware preprocessing.",
      color: "yellow" as const,
      pattern: "square" as const,
      tags: ["PySpark", "Regression", "Data Analysis"],
      //repo: "https://github.com/faizjauzah/taxi-price-prediction", //belom ada linknya, lupa bikin
    },
    {
      title: "BinBuddy",
      type: "Team Project · Project Leader",
      description: "Led a 5-member team building an Android waste-management app with MVVM, Room, Retrofit, and Hilt/Dagger, including a customizable trash pickup reminder system and an education hub.",
      color: "red" as const,
      pattern: "square" as const,
      tags: ["Android", "Kotlin", "MVVM"],
      repo: "https://github.com/faizjauzah/binbuddy-expo",
    },
    {
      title: "StatisF1",
      type: "Team Project · Project Leader",
      description: "Led a 4-member team building an F1 statistics and marketing analytics website with engagement dashboards and Grok AI-powered insights for users.",
      color: "blue" as const,
      pattern: "circle" as const,
      tags: ["PHP", "JavaScript", "Full-Stack"],
      repo: "https://github.com/faizjauzah/StatisF1",
    },
    {
      title: "Explore Jogja",
      type: "Team Project · Project Leader",
      description: "Managed a 4-member team building a travel website for Yogyakarta visitors, covering recommended destinations, accommodations, food, and local tips.",
      color: "yellow" as const,
      pattern: "triangle" as const,
      tags: ["Web Development", "PHP", "SQL"],
      repo: "https://github.com/faizjauzah/vancana-expo",
    },
  ];

  return (
    <section id="projects" className="bg-[#F0C020] py-16 md:py-24 px-4 md:px-8 border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b-4 border-black pb-4 inline-block bg-[#D02020] text-white px-6 py-2 shadow-[4px_4px_0px_0px_black] transform rotate-1">
          <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tighter">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8">
          {projects.map((project, i) => (
            <a key={i} href={project.repo} target="_blank" rel="noreferrer" className="block h-full">
              <Card decorationColor={project.color} decorationPattern={project.pattern} className={`h-full cursor-pointer ${i % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}`}>
                <p className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-2">{project.type}</p>
                <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter mb-4 leading-none">{project.title}</h3>
                <p className="font-medium text-lg mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
