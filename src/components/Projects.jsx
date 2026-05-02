import { useState } from "react";
import { Github, ExternalLink, X, Zap, Target, ArrowRight } from "lucide-react";
import { projects } from "../data/data";

const ProjectDetail = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
    <div
      className="relative bg-[#0f0f1a] border border-[#1e1e30] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] transition-colors"
      >
        <X size={16} />
      </button>

      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
        style={{ background: `${project.color}15` }}
      >
        {project.emoji}
      </div>

      <h2 className="font-['Syne'] font-bold text-2xl text-[#e8e8f0] mb-1">{project.title}</h2>
      <p className="text-[#6b6b8a] text-sm mb-4">{project.subtitle}</p>

      <p className="text-[#8888aa] leading-relaxed mb-6 text-sm">{project.longDescription}</p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="font-['Syne'] font-semibold text-[#e8e8f0] mb-3 flex items-center gap-2">
          <Zap size={14} className="text-[#6c63ff]" /> Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-6 bg-[#13131f] rounded-2xl p-4 border border-[#1e1e30]">
        <h4 className="font-['Syne'] font-semibold text-[#e8e8f0] mb-2 flex items-center gap-2">
          ⚡ Challenges
        </h4>
        <p className="text-[#8888aa] text-sm leading-relaxed">{project.challenges}</p>
      </div>

      {/* Future */}
      <div className="mb-8 bg-[#13131f] rounded-2xl p-4 border border-[#1e1e30]">
        <h4 className="font-['Syne'] font-semibold text-[#e8e8f0] mb-2 flex items-center gap-2">
          <Target size={14} className="text-[#ff6584]" /> Future Plans
        </h4>
        <p className="text-[#8888aa] text-sm leading-relaxed">{project.future}</p>
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center text-sm">
          <ExternalLink size={14} /> Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline flex-1 justify-center text-sm">
          <Github size={14} /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <div
    className="bg-[#13131f] border border-[#1e1e30] rounded-3xl p-6 card-hover cursor-pointer group"
    onClick={onClick}
  >
    {/* Top */}
    <div className="flex items-start justify-between mb-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
        style={{ background: `${project.color}15` }}
      >
        {project.emoji}
      </div>
      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-9 h-9 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all"
        >
          <Github size={15} />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-9 h-9 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all"
        >
          <ExternalLink size={15} />
        </a>
      </div>
    </div>

    <h3 className="font-['Syne'] font-bold text-xl text-[#e8e8f0] mb-1">{project.title}</h3>
    <p className="text-sm text-[#6b6b8a] mb-3">{project.subtitle}</p>
    <p className="text-[#8888aa] text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-5">
      {project.tech.slice(0, 3).map((t) => (
        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#1e1e30] text-[#8888aa]">{t}</span>
      ))}
      {project.tech.length > 3 && (
        <span className="text-xs px-2.5 py-1 rounded-full bg-[#1e1e30] text-[#6b6b8a]">+{project.tech.length - 3}</span>
      )}
    </div>

    <button className="flex items-center gap-2 text-sm font-semibold text-[#6c63ff] group-hover:gap-3 transition-all">
      View Details <ArrowRight size={14} />
    </button>
  </div>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6c63ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">My Work</span>
          <h2 className="section-title text-[#e8e8f0]">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#6b6b8a] mt-4 max-w-xl mx-auto">
            A selection of projects I've built. Click any card for full details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;
