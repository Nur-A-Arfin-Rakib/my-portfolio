import { techStack } from "../data/data";

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6c63ff]/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">What I Use</span>
          <h2 className="section-title text-[#e8e8f0]">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-[#6b6b8a] mt-4 max-w-xl mx-auto">
            Technologies I work with to build fast, modern, and scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="bg-[#13131f] border border-[#1e1e30] rounded-2xl p-5 flex flex-col items-center gap-3 card-hover cursor-default"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold font-['Syne']"
                style={{ background: `${tech.color}15`, color: tech.color }}
              >
                {tech.icon}
              </div>
              <span className="text-xs text-[#8888aa] font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
