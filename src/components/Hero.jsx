import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImg from "../assets/profile.jpeg";
import { personalInfo } from "../data/data";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6c63ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff6584]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6c63ff]/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#6c63ff 1px, transparent 1px), linear-gradient(90deg, #6c63ff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-[#6b6b8a] font-medium">Available for work</span>
            </div>

            <p className="text-[#6c63ff] font-['Syne'] text-lg font-semibold mb-2">
              Hey, I'm 👋
            </p>

            <h1 className="font-['Syne'] font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none mb-4 tracking-tight">
              <span className="text-[#e8e8f0]">Nur A Arfin</span>
              <br />
              <span className="gradient-text">Rakib</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#6c63ff]" />
              <p className="text-[#6b6b8a] font-medium text-lg">
                {personalInfo.designation}
              </p>
            </div>

            <p className="text-[#8888aa] leading-relaxed max-w-lg mb-8 text-base">
              🚀 Turning ideas into stunning websites. Building modern, scalable web applications with React & Node.js.
              Available for projects and collaborations. ⭐
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#contact" className="btn-primary">
                Say Hello 📨
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-outline"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-[#6b6b8a] text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#6c63ff]/30"
                style={{
                  animation: "spin-slow 20s linear infinite",
                  margin: "-20px",
                }}
              />

              {/* Stats floating */}
              <div className="absolute -top-6 -left-8 bg-[#13131f] border border-[#1e1e30] rounded-2xl px-4 py-3 float z-10">
                <p className="text-2xl font-bold font-['Syne'] gradient-text">10+</p>
                <p className="text-xs text-[#6b6b8a]">Projects Built</p>
              </div>
              <div className="absolute -bottom-6 -right-8 bg-[#13131f] border border-[#1e1e30] rounded-2xl px-4 py-3 float z-10" style={{ animationDelay: "1s" }}>
                <p className="text-2xl font-bold font-['Syne'] gradient-text">15+</p>
                <p className="text-xs text-[#6b6b8a]">Technologies</p>
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-[#13131f] border border-[#1e1e30] rounded-2xl px-4 py-3 float z-10" style={{ animationDelay: "0.5s" }}>
                <p className="text-2xl font-bold font-['Syne'] text-green-400">✓</p>
                <p className="text-xs text-[#6b6b8a]">Available</p>
              </div>

              {/* Image */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#1e1e30] pulse-glow relative z-10">
                <img
                  src={profileImg}
                  alt="Nur A Arfin Rakib"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#6b6b8a] hover:text-[#6c63ff] transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
