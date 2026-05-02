import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-[#1e1e30]" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-['Syne'] font-800 text-xl font-bold">
          <span className="gradient-text">R.</span>
          <span className="text-[#e8e8f0]">akib</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === l.href
                  ? "bg-[#6c63ff]/15 text-[#6c63ff]"
                  : "text-[#6b6b8a] hover:text-[#e8e8f0]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden md:flex btn-primary text-sm py-2.5 px-5">
          Hire Me ✨
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#e8e8f0] p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-[#1e1e30] px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => { setActive(l.href); setOpen(false); }}
              className="text-[#6b6b8a] hover:text-[#e8e8f0] py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-2 justify-center text-sm">Hire Me ✨</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
