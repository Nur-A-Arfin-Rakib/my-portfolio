import { skills } from "../data/data";

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-[#e8e8f0] font-medium">{name}</span>
      <span className="text-sm text-[#6c63ff] font-semibold">{level}%</span>
    </div>
    <div className="h-2 bg-[#1e1e30] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${level}%`,
          background: "linear-gradient(90deg, #6c63ff, #ff6584)",
          transition: "width 1s ease",
        }}
      />
    </div>
  </div>
);

const SkillCard = ({ title, items, emoji }) => (
  <div className="bg-[#13131f] border border-[#1e1e30] rounded-3xl p-6 card-hover">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{emoji}</span>
      <h3 className="font-['Syne'] font-bold text-lg text-[#e8e8f0]">{title}</h3>
    </div>
    {items.map((s) => (
      <SkillBar key={s.name} {...s} />
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="section-label">My Technical Level</span>
        <h2 className="section-title text-[#e8e8f0]">
          My <span className="gradient-text">Skills</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard title="Frontend" emoji="🎨" items={skills.frontend} />
        <SkillCard title="Backend" emoji="⚙️" items={skills.backend} />
        <SkillCard title="Tools" emoji="🛠️" items={skills.tools} />
      </div>
    </div>
  </section>
);

export default Skills;
