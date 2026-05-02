import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { personalInfo } from "../data/data";

const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6c63ff]/3 to-transparent pointer-events-none" />
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title text-[#e8e8f0]">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="text-[#6b6b8a] mt-4 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left — Info */}
        <div>
          <h3 className="font-['Syne'] font-bold text-2xl text-[#e8e8f0] mb-6">Talk to me</h3>
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 bg-[#13131f] border border-[#1e1e30] rounded-2xl p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6c63ff]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#6c63ff]" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b8a] mb-1 uppercase tracking-wider">Email</p>
                <p className="text-[#e8e8f0] font-medium text-sm">{personalInfo.email}</p>
                <p className="text-xs text-[#6c63ff] mt-1 group-hover:underline">Write me →</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 bg-[#13131f] border border-[#1e1e30] rounded-2xl p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff6584]/10 flex items-center justify-center">
                <Phone size={20} className="text-[#ff6584]" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b8a] mb-1 uppercase tracking-wider">Phone</p>
                <p className="text-[#e8e8f0] font-medium text-sm">{personalInfo.phone}</p>
                <p className="text-xs text-[#ff6584] mt-1 group-hover:underline">Call me →</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#13131f] border border-[#1e1e30] rounded-2xl p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Linkedin size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b8a] mb-1 uppercase tracking-wider">LinkedIn</p>
                <p className="text-[#e8e8f0] font-medium text-sm">nur-a-arfin</p>
                <p className="text-xs text-blue-400 mt-1 group-hover:underline">Connect →</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#13131f] border border-[#1e1e30] rounded-2xl p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Github size={20} className="text-[#e8e8f0]" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b8a] mb-1 uppercase tracking-wider">GitHub</p>
                <p className="text-[#e8e8f0] font-medium text-sm">Nur-A-Arfin-Rakib</p>
                <p className="text-xs text-[#8888aa] mt-1 group-hover:underline">View repos →</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <h3 className="font-['Syne'] font-bold text-2xl text-[#e8e8f0] mb-6">Write me your project</h3>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Message sent! I'll get back to you soon. 😊"); }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-[#13131f] border border-[#1e1e30] rounded-2xl px-5 py-4 text-[#e8e8f0] text-sm placeholder-[#4a4a6a] focus:outline-none focus:border-[#6c63ff] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#13131f] border border-[#1e1e30] rounded-2xl px-5 py-4 text-[#e8e8f0] text-sm placeholder-[#4a4a6a] focus:outline-none focus:border-[#6c63ff] transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Describe your project..."
                rows={5}
                required
                className="w-full bg-[#13131f] border border-[#1e1e30] rounded-2xl px-5 py-4 text-[#e8e8f0] text-sm placeholder-[#4a4a6a] focus:outline-none focus:border-[#6c63ff] transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
