export const personalInfo = {
  name: "Nur A Arfin Rakib",
  designation: "Full Stack Developer",
  tagline: "I build modern web experiences",
  bio: [
    "Hey! I'm Rakib — a passionate Full Stack Developer from Bangladesh, currently studying at Bangladesh Army University of Science and Technology. My journey into programming started with pure curiosity about how websites work, and that curiosity quickly became a full-blown obsession.",
    "I specialize in building modern, responsive web applications using React.js on the frontend and Node.js with Express on the backend. I love the challenge of turning complex problems into clean, intuitive user experiences. Whether it's crafting pixel-perfect UIs or designing scalable REST APIs, I bring the same level of care and attention to both sides of the stack.",
    "Outside of coding, I enjoy exploring new technologies, collaborating on open-source projects, and the occasional late-night debugging session that somehow turns into a feature sprint. When I'm not at my desk, you'll find me watching football or catching up with friends."
  ],
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "GitHub Repos", value: "20+" },
  ],
  email: "arfinrakib2017@gmail.com",
  phone: "01972789917",
  github: "https://github.com/Nur-A-Arfin-Rakib",
  linkedin: "https://www.linkedin.com/in/nur-a-arfin-22a009349",
};

export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 78 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 72 },
    { name: "Express.js", level: 70 },
    { name: "REST API", level: 75 },
    { name: "MongoDB", level: 65 },
  ],
  tools: [
    { name: "Git & GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 60 },
    { name: "Postman", level: 70 },
  ],
};

export const techStack = [
  { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { name: "React", icon: "⚛", color: "#61dafb" },
  { name: "Node.js", icon: "⬡", color: "#68a063" },
  { name: "Express", icon: "EX", color: "#ffffff" },
  { name: "MongoDB", icon: "🍃", color: "#47a248" },
  { name: "HTML5", icon: "H5", color: "#e34f26" },
  { name: "CSS3", icon: "C3", color: "#264de4" },
  { name: "Git", icon: "⌥", color: "#f05032" },
  { name: "Tailwind", icon: "TW", color: "#38bdf8" },
  { name: "REST API", icon: "API", color: "#6c63ff" },
];

export const education = [
  {
    degree: "B.Sc. in CSE",
    institute: "Bangladesh Army University of Science and Technology",
    year: "2024 – Present",
    icon: "🎓",
  },
  {
    degree: "HSC",
    institute: "Thakurgaon Govt. College",
    year: "2020 – 2022",
    icon: "📚",
  },
  {
    degree: "SSC",
    institute: "Thakurgaon Govt. Boys High School",
    year: "2012 – 2020",
    icon: "🏫",
  },
];

export const projects = [
  {
    id: 1,
    title: "KeenKeeper",
    subtitle: "Personal Relationship Manager",
    description: "KeenKeeper is a thoughtful web application designed to serve as a personal relationship manager, helping users to nurture and maintain their important friendships. Its core mission is to prevent meaningful connections from fading away due to the fast pace of modern life.",
    longDescription: "The application provides an intuitive dashboard that offers an immediate overview of one's social circle, intelligently categorizing friends into three clear statuses: 'On Track,' 'Almost Due,' and 'Overdue.' Key features include the ability to add and manage friends, view a complete history of interactions on the Timeline page, and analyze communication patterns through visual data on the Stats page.",
    tech: ["React.js", "React Router", "Tailwind CSS", "Recharts", "Context API"],
    github: "https://github.com/Nur-A-Arfin-Rakib/Keenkeeper",
    live: "https://keen-granita-6228c8.netlify.app/",
    challenges: "The biggest challenge was designing a real-time state management system for timeline entries that persisted across page navigation without a backend database, solved using React Context API.",
    future: "Planning to add user authentication, cloud sync, push notification reminders, and a mobile app version using React Native.",
    color: "#6c63ff",
    emoji: "👥",
  },
  {
    id: 2,
    title: "DigiTools",
    subtitle: "AI-Powered Productivity Suite",
    description: "DigiTools is a sophisticated online marketplace offering a curated suite of over 100 premium, AI-powered digital tools. Designed for modern professionals, creators, and businesses, the platform aims to supercharge digital workflow.",
    longDescription: "DigiTools centralizes essential services that enhance productivity and streamline complex tasks. The platform features a clean, professional UI with intuitive navigation, a comprehensive tool catalog, and a seamless user experience designed to boost digital productivity.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Netlify"],
    github: "https://github.com/Nur-A-Arfin-Rakib/digitools-platform-A6",
    live: "https://rainbow-kheer-b6e753.netlify.app/",
    challenges: "Organizing and presenting 100+ tools in a way that remains discoverable and user-friendly required careful UI/UX planning and component architecture.",
    future: "Planning to integrate real AI APIs, add user accounts with saved tools, and build a subscription model.",
    color: "#ff6584",
    emoji: "🛠️",
  },
];
