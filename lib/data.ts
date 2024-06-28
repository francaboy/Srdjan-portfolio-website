import React from "react";
import { FaBroadcastTower, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { RiAdminLine, RiReactjsLine } from "react-icons/ri";
import corpcommentImg from "@/public/assets/img/png/corpcomment.png";
import rmtdevImg from "@/public/assets/img/png/rmtdev.png";
import wordanalyticsImg from "@/public/assets/img/png/wordanalytics.png";
import { StaticImageData } from "next/image";

// detaljni podaci za sajt, za navbar i ostale informacije
export type LinkType = {
  name: "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";
  hash: "home" | "about" | "projects" | "skills" | "experience" | "contact";
};

export const experiencesData = [
  {
    title: "Web Developer",
    company: "FrancaTech",
    location: "Banja Luka, B&H",
    description:
      "Working as developer proficient in HTML, CSS, JavaScript, React.js, Next.js, WordPress, Adobe Suite. Committed to creative, functional websites and apps.",
    icon: React.createElement(RiReactjsLine),
    date: "Mar 2015 - Present",
  },
  {
    title: "Broadcast System Engineer",
    company: "RTRS",
    location: "Banja Luka, B&H",
    description:
      "Managed broadcast equipment, oversaw transmission systems, resolved different technical faults, operated DSNG vehicles, and ensured all requirements for live broadcasts.",
    icon: React.createElement(FaBroadcastTower),
    date: "Jul 2015 - Mar 2024",
  },
  {
    title: "Data Analyst",
    company: "49ing.ch",
    location: "Zürich, Switzerland",
    description:
      "Conducted and analyzed hockey data, created reports and data dashboards, collaborated with stakeholders, ensured all data integrity and reliability.",
    icon: React.createElement(FiDatabase),
    date: "Aug 2021 - Apr 2023",
  },
  {
    title: "IT System Administrator",
    company: "Grant Thornton",
    location: "Banja Luka, B&H",
    description:
      "As system administrator worked on managing and directing daily IT operations, orchestrated all kind of projects, ensured data security and compliance, and streamlined IT processes.",
    icon: React.createElement(RiAdminLine),
    date: "Feb 2021 - Mar 2023",
  },
] as const;

type ProjectType = {
  title: string;
  client: string;
  category: "Featured" | "Websites" | "Design";
  description: string;
  details: string;
  details2: string;
  imageUrl: StaticImageData;
  image1: StaticImageData;
  image2: StaticImageData;
  projectUrl: string;
  technologies: string[];
};

export const projectsData: ProjectType[] = [
  {
    title: "CorpComment",
    client: "Test",
    category: "Websites",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    details:
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible...",
    details2:
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible...",
    imageUrl: corpcommentImg,
    image1: corpcommentImg,
    image2: corpcommentImg,
    projectUrl: "https://corpcomment.example.com",
    technologies: ["React", "Node.js", "CSS"],
  },
  {
    title: "RmtDev",
    client: "Test",
    category: "Design",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    details:
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible...",
    details2:
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible...",
    imageUrl: rmtdevImg,
    image1: rmtdevImg,
    image2: rmtdevImg,
    projectUrl: "https://corpcomment.example.com",
    technologies: ["React", "Node.js", "CSS"],
  },
  {
    title: "Word Analytics",
    client: "Test",
    category: "Featured",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    details:
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible...",
    details2:
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible...",
    imageUrl: wordanalyticsImg,
    image1: corpcommentImg,
    image2: corpcommentImg,
    projectUrl: "https://corpcomment.example.com",
    technologies: ["React", "Node.js", "CSS"],
  },
] as const;

export const skillsData = [
  { name: "HTML", logo: "./assets/img/svg/html.svg", percentage: 100 },
  { name: "CSS", logo: "./assets/img/svg/css.svg", percentage: 100 },
  { name: "JavaScript", logo: "./assets/img/svg/js.svg", percentage: 95 },
  { name: "React", logo: "./assets/img/svg/react.svg", percentage: 85 },
  { name: "Next.js", logo: "./assets/img/svg/next.svg", percentage: 85 },
  { name: "Node.js", logo: "./assets/img/svg/node.svg", percentage: 85 },
  { name: "TypeScript", logo: "./assets/img/svg/type.svg", percentage: 90 },
  { name: "Tailwind", logo: "./assets/img/svg/tailwind.svg", percentage: 80 },
  { name: "Wordpress", logo: "./assets/img/svg/wordpress.svg", percentage: 95 },
  { name: "Git", logo: "./assets/img/svg/git.svg", percentage: 90 },
  { name: "Photoshop", logo: "./assets/img/svg/ps.svg", percentage: 90 },
  { name: "Illustrator", logo: "./assets/img/svg/ai.svg", percentage: 90 },
] as const;
