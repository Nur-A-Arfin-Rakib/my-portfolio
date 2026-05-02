import { education } from "../data/data";

const Education = () => (
  <section id="education" className="py-24 relative">
    <div className="absolute top-0 left-0 w-72 h-72 bg-[#6c63ff]/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="section-label">My Journey</span>
        <h2 className="section-title text-[#e8e8f0]">
          Educational <span className="gradient-text">Background</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#ff6584] to-transparent" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-8 relative">
              {/* Dot */}
              <div className="w-16 h-16 rounded-2xl bg-[#13131f] border border-[#1e1e30] flex items-center justify-center text-2xl flex-shrink-0 relative z-10">
                {edu.icon}
              </div>
              {/* Content */}
              <div className="bg-[#13131f] border border-[#1e1e30] rounded-2xl p-5 flex-1 card-hover">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-[#e8e8f0]">{edu.degree}</h3>
                    <p className="text-[#8888aa] mt-1 text-sm">{edu.institute}</p>
                  </div>
                  <span className="text-xs text-[#6c63ff] bg-[#6c63ff]/10 px-3 py-1.5 rounded-full font-medium">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
