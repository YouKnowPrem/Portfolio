import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import WelcomeImg from "@/public/Welcome.png";
import AnimeWebImg from "@/public/AnimeWeb.png";
import FlappyImg from "@/public/Flappy bird .png";
import MaclarenWeb from "@/public/MaclarenWeb.png";
import MoseosClone from "@/public/MoseosClone.png";
import MotionImg from "@/public/Motion website.png";
import ObysImg from "@/public/ObysClone.png";
import Parinda from "@/public/Parinda.png";
import Snakeweb from "@/public/Snakeweb.png";
import StarImg from "@/public/StarEffect.png";
import WebPortDark from "@/public/WebPortfoliodark.png";
import Webclock from "@/public/Webclock.png";
import WhackImg from "@/public/Whack-a-Mole.png";
import WorkClone from "@/public/WorkClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Games",
    hash: "#games",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Joined Jammu University ",
    location: "Jammu, J&K, India",
    description:
      "Currently pursuing B.A. LL.B. (Hons.) at University of Jammu (Batch of 2025–2030) ",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Hosting, Google Cloud Platform, WordPress & Migration Exp.",
    location: "Jammu, J&K, India",
    description:
      "I contributed to several WordPress websites, managing tasks ranging from DNS setup to staging and deployment ,and migrating to Google Cloud Platform.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
  {
    title: "Legend Tier Winner, Google Skill Boost Program – Session 1 (2025)",
    location: "Online",
    description:
      "Recognized for outstanding performance and completion of advanced skill challenges; currently participating in Session 2 (2025).",
    icon: React.createElement(LuGraduationCap),
    date: "Jan-Jun 2025",
  },
  {
    title: "Principled and Multifaceted",
    location: "For Myself",
    description:
      "I refine my creative problem-solving skills while embodying principled and multifaceted approaches to ensure effective and ethical solutions.",
    icon: React.createElement(FaReact),
    date: "life time",
  },
  {
    title: "The side hobby",
    location: "Jammu, India",
    description:
      "I'm now tring to up skill myself, exploring technology alongside law studies to question existing frameworks and apply technical insight toward better policy-making and future governance. Learning others langs. and much more in pipeline.",
    icon: React.createElement(FaServer),
    date: "2024 - present",
  }, 
] as const;

export const projectsData = [
  {
    title: "Welcome Website",
    description:
      "This Website is a kind of welcome page. It's a single page website with a touch of elegant animations.",
    tags: ["HTML", "CSS", "Javascript", "Locomotive"],
    imageUrl: WelcomeImg,
    imagePath: "https://youknowprem.github.io/Welcome-to-India/",
  },
  {
    title: "Web Portfolio",
    description:
      "An elegant dark-themed portfolio with smooth transitions and dynamic animations, offering a sleek and modern experience",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", "GSAP", "SCSS"],
    imageUrl: WebPortDark,
    imagePath: "https://youknowprem.github.io/Dark-Theme-Web-Portfolio/"
  },
  {
    title: "Parinda Website",
    description:
      "A clean, paper-themed portfolio with smooth animations and transitions, offering a minimalist & creative layout for showcaseing",
    tags: ["Nextjs","React", "Typescript", "Framer Motion", "lenis-locomotive-scroll", "Tailwindcss"],
    imageUrl: Parinda,
    imagePath: "https://parinda-pi.vercel.app"
  },
  {
    title: "Work Studio Clone",
    description:
      "An Awwwards winning Work Studio design website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: WorkClone,
    imagePath: "https://clone-works-studio.vercel.app"
  },
  {
    title: "Interactive Star effect",
    description:
      "This star will follow your lead till you hover your mouse on screen",
    tags: ["Vite","React", "Typescript", "Framer Motion", "Tailwindcss", 'GSAP'],
    imageUrl: StarImg,
    imagePath: "https://youknowprem.github.io/starFollower"
  },
  {
    title: "Obys Clone",
    description:
      "An Awwwards winning Obys design website, with a lot of animations and interactions.",
    tags: ["React", "Next js", "Typescript", "Motion"],
    imageUrl: ObysImg,
    imagePath: "https://obys-clone-five.vercel.app"
  }, 
  {
    title: "Motion clone",
    description:
      "An Awwwards winning Ochi design website, with a lot of animations and interactions.",
    tags: ["React", "Next js", "Typescript", "Three.js", "Prismic", "Framer Motion"],
    imageUrl: MotionImg,
    imagePath: "https://web-template1-rust.vercel.app/"
  },
  {
    title: "Landing Page",
    description:
      "A web page that display a video and animations.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: MoseosClone,
    imagePath: "https://youknowprem.github.io/website/"
  },
  {
    title: "Theme Webpage",
    description:
      "A web page that is based on Maclaren theme.",
    tags: ["React", "Javascript", "CSS", "HTML"],
    imageUrl: MaclarenWeb,
    imagePath: "https://youknowprem.github.io/Maclaren-Animated-Landing-Page"
  },
] as const;

export const gamesData = [
  {
    title: "Whack a Mole",
    description:
      "A fun, fast-paced Whack-a-Mole game with engaging visuals and smooth animations. Test your reflexes!",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "lenis", "Tailwindcss", "GSAP"],
    imageUrl: WhackImg,
    imagePath: "https://whack-a-mole-10.vercel.app/",
    category: "Arcade"
  },
  {
    title: "Snake Web Game",
    description:
      "Classic snake game reimagined for the web. Eat, grow, and avoid hitting yourself in this nostalgic game.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: Snakeweb,
    imagePath: "https://snake-game-ashen-psi.vercel.app",
    category: "Classic"
  },
  {
    title: "Flappy Bird Clone",
    description:
      "Navigate through pipes in this challenging Flappy Bird inspired game. Simple controls, addictive gameplay.",
    tags: ["HTML", "CSS", "Javascript", "Canvas"],
    imageUrl: FlappyImg,
    imagePath: "https://flappy-svg.vercel.app/",
    category: "Arcade"
  },
  {
    title: "Duel Web Clock",
    description:
      "An interactive dual clock display with beautiful animations and time zone support.",
    tags: ["HTML", "Javascript", "CSS", "Animation"],
    imageUrl: Webclock,
    imagePath: "https://web-duel-clock.vercel.app",
    category: "Utility"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "React",
  "Nextjs",
  "Nodejs",
  "Three js",
  "TriggerScroll",
  "Git",
  "Github",
  "Using Open Source",
  "Forking Repos",
  "Using Kiro IDE",
  "Locally Installing LLMs",
  "Chess Enthusiast",
  "Playing Games",
  "Prompt Writer",
  "Using AI as Assistant",
  "Adaptability",
  "Innovative Thinking",
  "Using AI to get any Project done",
  "Strategic Planning",
  "Critical thinking",
  "Versatile Problem-Solving",
  "Ethical Decision-Making",
  "Try to get Interdisciplinary Knowledge"
] as const;
