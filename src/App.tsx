import { Navbar } from "./components/sections/Navbar"
import { HeroSection } from "./components/sections/HeroSection"
import { ExperienceSection } from "./components/sections/ExperienceSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { SkillsSection } from "./components/sections/SkillsSection"
import { Footer } from "./components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#121212] font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
