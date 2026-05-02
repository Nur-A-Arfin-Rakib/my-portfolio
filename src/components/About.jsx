import { personalInfo } from "../data/data";
import profileImg from "../assets/profile.jpeg";
import { MapPin, Coffee, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff6584]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-3xl overflow-hidden border border-[#1e1e30]">
                <img src={profileImg} alt="Rakib" className="w-full h-full object-cover object-top" />
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border border-[#6c63ff]/20 -z-10" />
              <div className="absolute -top-4 -left-4 bg-[#13131f] border border-[#1e1e30] rounded-2xl p-3 flex items-center gap-2">
                <MapPin size={14} className="text-[#6c63ff]" />
                <span className="text-xs text-[#8888aa]">Bangladesh 🇧🇩</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#13131f] border border-[#1e1e30] rounded-2xl p-3 flex items-center gap-2">
                <Code2 size={14} className="text-green-400" />
                <span className="text-xs text-[#8888aa]">Full Stack Dev</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title text-[#e8e8f0] mb-6">
              My <span className="gradient-text">Introduction</span>
            </h2>

            {personalInfo.bio.map((para, i) => (
              <p key={i} className="text-[#8888aa] leading-relaxed mb-4 text-base">
                {para}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {personalInfo.stats.map((s) => (
                <div key={s.label} className="bg-[#13131f] border border-[#1e1e30] rounded-2xl p-4 text-center card-hover">
                  <p className="text-2xl font-bold font-['Syne'] gradient-text">{s.value}</p>
                  <p className="text-xs text-[#6b6b8a] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <a href="#contact" className="btn-primary">Let's Talk 🤝</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
