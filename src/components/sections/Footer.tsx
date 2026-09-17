import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#121212] text-white py-16 md:py-24 px-4 md:px-8 border-t-8 border-[#D02020]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Bold CTA */}
        <div className="bg-[#F0C020] text-black border-4 border-white p-8 md:p-12 mb-16 transform rotate-1 max-w-3xl w-full">
          <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tighter leading-tight mb-4">Actively Seeking Opportunities</h2>
          <p className="font-bold text-lg md:text-xl max-w-xl mx-auto">
            I am currently looking for an internship or full-time roles in AI/ML Engineering, Data Scientist, Computer Vision, Web Development, Mobile Development, or Software Engineering.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 md:gap-12 w-full mb-16">
          <a href="mailto:mfaizjauzah24@gmail.com" className="group flex items-center gap-3 hover:-translate-y-1 transition-transform">
            <Mail className="w-8 h-8 text-[#D02020] group-hover:scale-110 transition-transform" strokeWidth={3} />
            <span className="font-bold text-xl uppercase tracking-widest group-hover:text-[#D02020] transition-colors">mfaizjauzah24@gmail.com</span>
          </a>

          <div className="hidden md:block w-2 h-2 bg-white rounded-full" />

          <a href="tel:+6281228730052" className="group flex items-center gap-3 hover:-translate-y-1 transition-transform">
            <Phone className="w-8 h-8 text-[#1040C0] group-hover:scale-110 transition-transform" strokeWidth={3} />
            <span className="font-bold text-xl uppercase tracking-widest group-hover:text-[#1040C0] transition-colors whitespace-nowrap">+62 812 2873 0052</span>
          </a>

          <div className="hidden md:block w-2 h-2 bg-white rounded-full" />

          <a href="https://www.linkedin.com/in/faizjauzah" target="_blank" rel="noreferrer" className="group flex items-center gap-3 hover:-translate-y-1 transition-transform">
            <Linkedin className="w-8 h-8 text-[#F0C020] group-hover:scale-110 transition-transform" strokeWidth={3} />
            <span className="font-bold text-xl uppercase tracking-widest group-hover:text-[#F0C020] transition-colors">LinkedIn</span>
          </a>

          <div className="hidden md:block w-2 h-2 bg-white rounded-full" />

          <a href="https://github.com/faizjauzah" target="_blank" rel="noreferrer" className="group flex items-center gap-3 hover:-translate-y-1 transition-transform">
            <Github className="w-8 h-8 text-white group-hover:scale-110 transition-transform" strokeWidth={3} />
            <span className="font-bold text-xl uppercase tracking-widest group-hover:text-white transition-colors">GitHub</span>
          </a>

          <div className="hidden md:block w-2 h-2 bg-white rounded-full" />

          <a href="https://instagram.com/faizjauzah" target="_blank" rel="noreferrer" className="group flex items-center gap-3 hover:-translate-y-1 transition-transform">
            <Instagram className="w-8 h-8 text-[#E1306C] group-hover:scale-110 transition-transform" strokeWidth={3} />
            <span className="font-bold text-xl uppercase tracking-widest group-hover:text-[#E1306C] transition-colors">@faizjauzah</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-gray-800 pt-8 w-full text-center">
          <p className="font-bold uppercase tracking-widest text-sm text-gray-400">© {new Date().getFullYear()} Muhammad Faiz Jauzah. Form Follows Function.</p>
        </div>
      </div>
    </footer>
  );
}
