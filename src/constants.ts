import {
  NavItem,
  Project,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  SocialLink,
  AchievementItem,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  name: "Vishal Gaikwad",
  role: "Full Stack Developer",
  tagline:
    "Building real-world web applications with clean design and scalable backend.",
  description:
    "I am a Third Year Information Technology student with a strong interest in full-stack web development. I work with React, Node.js, Express, and MongoDB to build practical, user-focused applications and enjoy learning through projects, hackathons, and problem-solving.",
  resumeUrl:
    "https://drive.google.com/file/d/1_7b7yr5PIW0RjjZlUbGwsQZMwMw-Z1r-/view?usp=sharing",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C++",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Technologies",
    skills: [
      {
        name: "React.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "REST APIs",
        image: "",
      },
      {
        name: "Authentication (JWT & Sessions)",
        image: "https://jwt.io/img/pic_logo.svg",
      },
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Vercel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Render",
        image: "https://www.svgrepo.com/show/331557/render.svg",
      },
    ],
  },

  {
    title: "Development Practices",
    skills: [
      { name: "Full-stack Development", image: "" },
      { name: "Database Management", image: "" },
    ],
  },
  {
    title: "Coursework",
    skills: [
      { name: "Data Structures and Algorithm", image: "" },
      { name: "Operating System", image: "" },
      { name: "DBMS", image: "" },
      { name: "OOPS", image: "" },
      { name: "Computer Network", image: "" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", image: "" },
      { name: "Team Collaboration", image: "" },
      { name: "Leadership", image: "" },
      { name: "Communication", image: "" },
      { name: "Time Management", image: "" },
      { name: "Adaptability", image: "" },
      { name: "Continuous Learning", image: "" },
      { name: "Presentation Skills", image: "" },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "VS Code",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Firebase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Cloudinary",
        image:
          "https://res.cloudinary.com/demo/image/upload/v1690000000/cloudinary-logo.png",
      },
      {
        name: "Mapbox",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mapbox_logo_2019.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material UI",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "shadcn/ui",
        image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
      },
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Canva",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        name: "Eclipse",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Satyverse",
    description:
      "I developed a full-stack web application inspired by Airbnb that allows users to list, explore, and book rental stays. The platform features secure user authentication, property listings with Cloudinary image uploads, integrated review systems, and an interactive Mapbox map view, while also supporting distinct roles for admins and property owners to efficiently manage listings, bookings, and user content.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Render",
      "EJS",
      "Bootstrap",
      "MVC",
    ],
    imageUrl: "/images/stayverse.png",
    demoUrl: "https://stayverse-k32u.onrender.com/",
    repoUrl: "https://github.com/Vishals3151/StayVerse",
    category: "Web App",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website designed to showcase my projects, skills, achievements, and resume. Focused on clean UI, smooth interactions, and clear presentation for recruiters and internship opportunities.",
    tags: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
    imageUrl: "/images/portfolio.png",
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App",
  },
  {
    title: "Ai-for-mentalHealth",
    description:
      "A full-stack mental health web application built using the MERN stack to help users track mood, interact with an AI therapist, take mood assessments, and share thoughts anonymously in a secure environment.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Cookie Sessions",
    ],
    imageUrl: "/images/Ai.png",
    demoUrl: "https://ai-for-mental-health-frontend.vercel.app/",
    repoUrl: "https://github.com/Vishals3151/Ai_for_mentalHealth",
    category: "Web App",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "VIIT",
    role: "Gandarva Sponsorship Team",
    period: "Jan 2024 - Mar 2024",
    description: [
      "Worked as part of the sponsorship team to approach potential sponsors, coordinate communications, and support event funding activities. Assisted in planning, follow-ups, and maintaining sponsor relationships during college events.",
      "Skills: Communication , Negotiation , Team Coordination , Event Management",
    ],
  },
  {
    company: "ITSF Club",
    role: "Documentation Team",
    period: "June 2024 — Jan 2025",
    description: [
      "Handled documentation responsibilities for club activities and events, including preparing reports, maintaining records, and organizing information for internal use. Coordinated with team members to ensure clarity and completeness of documentation.",
      "Skills: Documentation , Report Writing , Content Organization , Team Collaboration",
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "SIH Internal Level Winner",
    issuer: "Vishwakarma Institute of Information Technology (VIIT)",
    date: "2025",
    description:
      "Selected as the Smart India Hackathon (SIH) Internal Level Winner for proposing an innovative, problem-solving solution evaluated by institutional experts.",
    url: "https://drive.google.com/file/d/1HjYr2gaH45lA9pChFgeekBdJsXMgQUQd/view?usp=sharing",
  },
  {
    title: "Top 7 Finalist – 2 Fast 2 Hack",
    issuer: "Symbiosis Institute Pune",
    date: "2024",
    description:
      "Achieved a Top 7 position among multiple teams by building a functional technology solution under strict time constraints during a competitive hackathon.",
    url: "https://drive.google.com/file/d/1rCMkr7TQGhlI71RDXgytlcH9db2fAPo2/view?usp=sharing",
  },
  {
    title: "State-Level Football Player",
    issuer: "State Sports Association",
    date: "2021",
    description:
      "Represented at the state level in football, demonstrating discipline, teamwork, leadership, and competitive performance.",
    url: "https://drive.google.com/file/d/1Dnj4W63phCBYEoxb_tKfBkI4bA5HR-SJ/view?usp=sharing",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Bract's Vishwakarma Institute Of Information Technology",
    degree: "B.Tech in Information Technology",
    period: "2023 - 2027",
    place: "Pune",
    grade: "8.65 GPA",
    description:
      "Pursuing a Bachelor’s degree in Information Technology with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development. Actively building full-stack projects and participating in hackathons.",
  },
  {
    institution: "Deogiri Junior College",
    degree: "HSC (XII), Science",
    period: "2021 — 2023",
    place: "Chhatrapati Sambhajinagar",
    grade: "85.33%",
    description:
      "Focused on Physics, Chemistry, and Mathematics with a strong emphasis on logical problem solving.",
  },
  {
    institution: "New Beginning International School",
    degree: "CBSE (X)",
    period: "2020",
    place: "Chhatrapati Sambhajinagar",
    grade: "96%",
    description:
      "Achieved distinction with a focus on holistic development and foundation sciences.",
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Vishals3151", icon: "Github" },
  {
    platform: "LinkedIn",
    url: "http://www.linkedin.com/in/vishal-gaikwad-9ba99228a",
    icon: "Linkedin",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/vishal_gaikwad6289?igsh=YWdzaTF6aTd2aG13",
    icon: "Instagram",
  },
  {
    platform: "Twitter",
    url: "https://x.com/Vishal078762107?t=UB83hUK5sM54zeUB3GK3fQ&s=09",
    icon: "Twitter",
  },
];
