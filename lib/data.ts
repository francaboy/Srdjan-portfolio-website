import React from "react";
import { FaBroadcastTower, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { RiAdminLine, RiReactjsLine } from "react-icons/ri";
import rmtdevImg from "@/public/assets/img/png/rmtdev.png";
import { StaticImageData } from "next/image";
import trazi from "@/public/assets/img/png/trazi.png";
import trazi1 from "@/public/assets/img/png/trazi1.png";
import trazi2 from "@/public/assets/img/png/trazi2.png";
import trazi3 from "@/public/assets/img/png/trazi3.png";
import tepic from "@/public/assets/img/png/tepic.png";
import tepic1 from "@/public/assets/img/png/tepic1.png";
import tepic2 from "@/public/assets/img/png/tepic2.png";
import tepic3 from "@/public/assets/img/png/tepic3.png";

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
  image3: StaticImageData;
  projectUrl: string;
  technologies: string[];
};

export const projectsData: ProjectType[] = [
  {
    title: "Traži Online",
    client: "Traži.online",
    category: "Websites",
    description:
      "A dynamic news portal delivering real-time updates, breaking news, and in-depth analysis on global events, politics, technology, and entertainment.",
    details:
      "My project is a dynamic and comprehensive news portal designed to deliver real-time updates, breaking news, and in-depth analysis on global events, politics, technology, and entertainment. It leverages a robust tech stack to ensure a seamless user experience and high performance.",
    details2:
      "The portal is crafted using JavaScript, HTML, and CSS to create a responsive and engaging front-end interface. It employs PHP and SQL to handle server-side logic and database interactions and CodeIgniter framework for enhancing development speed and maintainability.",
    imageUrl: trazi,
    image1: trazi1,
    image2: trazi2,
    image3: trazi3,
    projectUrl: "https://trazi.online",
    technologies: ["PHP", "SQL", "JS", "CodeIgniter"],
  },
  {
    title: "Advokat Tepić",
    client: "Advokat Tepić",
    category: "Websites",
    description:
      "A professional law firm website offering comprehensive full legal services, client consultations, case management, and expert advice across various legal fields.",
    details:
      "My project is a professional law firm website designed to provide comprehensive legal services, client consultations, case management, and expert advice across various legal fields. The website is built using a combination of modern technologies to ensure a seamless user experience, security, and efficient content delivery.",
    details2:
      "The front-end of the website is developed using React, Bootstrap 5, and SASS, which together create a responsive and visually appealing interface.",
    imageUrl: tepic,
    image1: tepic1,
    image2: tepic2,
    image3: tepic3,
    projectUrl: "https://advokattepic.com",
    technologies: ["React", "Bootstrap 5", "SASS"],
  },
  {
    title: "Lssadora Photography",
    client: "Lssadora Photography",
    category: "Websites",
    description:
      "A stunning photography portfolio showcasing all of diverse works, featuring high-resolution images and a seamless, visually captivating user experience.",
    details:
      "This photography portfolio project showcases a diverse collection of high-resolution images, designed to offer a visually captivating experience. It is built using React for dynamic interactivity, Bootstrap 5 for responsive design, and SASS for efficient styling management.",
    details2:
      "This tech stack ensures a seamless and engaging presentation of my photography work, enhancing user experience and accessibility.",
    imageUrl: rmtdevImg,
    image1: rmtdevImg,
    image2: rmtdevImg,
    image3: rmtdevImg,
    projectUrl: "https://lssadora.com",
    technologies: ["React", "Bootstrap 5", "SASS"],
  },
  {
    title: "Naši Korijeni",
    client: "Naši Korijeni",
    category: "Websites",
    description:
      "The event organizer website offers robust event planning, streamlined ticketing, and full comprehensive management services, ensuring flawless event execution.",
    details:
      "This event organizer portfolio project facilitates seamless event planning, ticketing, and management services. It's developed using React for dynamic functionality, Bootstrap 5 for responsive design, and Next.js for server-side rendering and SEO optimization.",
    details2:
      "This tech stack ensures efficient event execution and attendee satisfaction through intuitive user interfaces and robust performance.",
    imageUrl: rmtdevImg,
    image1: rmtdevImg,
    image2: rmtdevImg,
    image3: trazi3,
    projectUrl: "https://www.nasikorijeni.com/",
    technologies: ["React", "Next.js", "Bootstrap 5"],
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
