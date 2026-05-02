import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/data";

const Footer = () => (
  <footer className="border-t border-[#1e1e30] py-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-['Syne'] font-bold text-xl">
          <span className="gradient-text">R.</span>
          <span className="text-[#e8e8f0]">akib</span>
        </a>
        <p className="text-[#6b6b8a] text-sm flex items-center gap-1.5">
          Made with <Heart size={13} className="text-[#ff6584] fill-[#ff6584]" /> by Nur A Arfin Rakib © 2026
        </p>
        <div className="flex gap-3">
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="w-9 h-9 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all">
            <Github size={16} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="w-9 h-9 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-full border border-[#1e1e30] flex items-center justify-center text-[#6b6b8a] hover:text-[#e8e8f0] hover:border-[#6c63ff] transition-all">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
