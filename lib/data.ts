import React from "react";
import { FaBroadcastTower, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { RiAdminLine, RiReactjsLine } from "react-icons/ri";
import { StaticImageData } from "next/image";
import trazi from "@/public/assets/img/png/trazi.png";
import trazi0 from "@/public/assets/img/png/trazi0.png";
import trazi1 from "@/public/assets/img/png/trazi1.png";
import trazi2 from "@/public/assets/img/png/trazi2.png";
import trazi3 from "@/public/assets/img/png/trazi3.png";
import goja from "@/public/assets/img/png/goja.png";
import goja1 from "@/public/assets/img/png/goja1.png";
import goja2 from "@/public/assets/img/png/goja2.png";
import goja3 from "@/public/assets/img/png/goja3.png";
import goja4 from "@/public/assets/img/png/goja4.png";
import isi from "@/public/assets/img/png/isi.png";
import koreni from "@/public/assets/img/png/koreni.png";
import koreni1 from "@/public/assets/img/png/koreni1.png";
import koreni2 from "@/public/assets/img/png/koreni2.png";
import koreni3 from "@/public/assets/img/png/koreni3.png";
import koreni4 from "@/public/assets/img/png/koreni4.png";
import isi1 from "@/public/assets/img/png/isi1.png";
import isi2 from "@/public/assets/img/png/isi2.png";
import isi3 from "@/public/assets/img/png/isi3.png";
import isi4 from "@/public/assets/img/png/isi4.png";
import tech from "@/public/assets/img/png/tech.png";
import tech1 from "@/public/assets/img/png/tech1.png";
import tech2 from "@/public/assets/img/png/tech2.png";
import tech3 from "@/public/assets/img/png/tech3.png";
import tech4 from "@/public/assets/img/png/tech4.png";
import salon from "@/public/assets/img/png/salon.png";
import salon1 from "@/public/assets/img/png/salon1.png";
import salon2 from "@/public/assets/img/png/salon2.png";
import salon3 from "@/public/assets/img/png/salon3.png";
import salon4 from "@/public/assets/img/png/salon4.png";
import mega from "@/public/assets/img/png/mega.png";
import mega1 from "@/public/assets/img/png/mega1.png";
import mega2 from "@/public/assets/img/png/mega2.png";
import mega3 from "@/public/assets/img/png/mega3.png";
import mega4 from "@/public/assets/img/png/mega4.png";
import rtrs from "@/public/assets/img/png/rtrs.png";
import rtrs1 from "@/public/assets/img/png/rtrs1.png";
import rtrs2 from "@/public/assets/img/png/rtrs2.png";
import rtrs3 from "@/public/assets/img/png/rtrs3.png";
import rtrs4 from "@/public/assets/img/png/rtrs4.png";
import damona from "@/public/assets/img/png/damona.png";
import damona1 from "@/public/assets/img/png/damona1.png";
import damona2 from "@/public/assets/img/png/damona2.png";
import damona3 from "@/public/assets/img/png/damona3.png";
import damona4 from "@/public/assets/img/png/damona4.png";
import rolnica from "@/public/assets/img/png/rolnica.png";
import rolnica1 from "@/public/assets/img/png/rolnica1.png";
import rolnica2 from "@/public/assets/img/png/rolnica2.png";
import rolnica3 from "@/public/assets/img/png/rolnica3.png";
import rolnica4 from "@/public/assets/img/png/rolnica4.png";
import west from "@/public/assets/img/png/west.png";
import west1 from "@/public/assets/img/png/west1.png";
import west4 from "@/public/assets/img/png/west4.png";
import west2 from "@/public/assets/img/png/west2.png";
import west3 from "@/public/assets/img/png/west3.png";
import dunje from "@/public/assets/img/png/dunje.png";
import dunje1 from "@/public/assets/img/png/dunje1.png";
import dunje2 from "@/public/assets/img/png/dunje2.png";
import dunje3 from "@/public/assets/img/png/dunje3.png";
import dunje4 from "@/public/assets/img/png/dunje4.png";
import nbv from "@/public/assets/img/png/nbv.png";
import nbv1 from "@/public/assets/img/png/nbv1.png";
import nbv2 from "@/public/assets/img/png/nbv2.png";
import nbv3 from "@/public/assets/img/png/nbv3.png";
import nbv4 from "@/public/assets/img/png/nbv4.png";
import tele from "@/public/assets/img/png/tele.png";
import tele1 from "@/public/assets/img/png/tele1.png";
import tele2 from "@/public/assets/img/png/tele2.png";
import tele3 from "@/public/assets/img/png/tele3.png";
import tele4 from "@/public/assets/img/png/tele4.png";
import gt from "@/public/assets/img/png/gt.png";
import gt1 from "@/public/assets/img/png/gt1.png";
import gt2 from "@/public/assets/img/png/gt2.png";
import gt3 from "@/public/assets/img/png/gt3.png";
import gt4 from "@/public/assets/img/png/gt4.png";
import nasi from "@/public/assets/img/png/nasi.png";
import nasi1 from "@/public/assets/img/png/nasi1.png";
import nasi2 from "@/public/assets/img/png/nasi2.png";
import nasi3 from "@/public/assets/img/png/nasi3.png";
import nasi4 from "@/public/assets/img/png/nasi4.png";
import srt from "@/public/assets/img/png/srt.png";
import srt1 from "@/public/assets/img/png/srt1.png";
import srt2 from "@/public/assets/img/png/srt2.png";
import srt3 from "@/public/assets/img/png/srt3.png";
import srt4 from "@/public/assets/img/png/srt4.png";
import fest from "@/public/assets/img/png/fest.png";
import fest1 from "@/public/assets/img/png/fest1.png";
import fest2 from "@/public/assets/img/png/fest2.png";
import fest3 from "@/public/assets/img/png/fest3.png";
import fest4 from "@/public/assets/img/png/fest4.png";
import tepic from "@/public/assets/img/png/tepic.png";
import tepic1 from "@/public/assets/img/png/tepic1.png";
import tepic2 from "@/public/assets/img/png/tepic2.png";
import tepic3 from "@/public/assets/img/png/tepic3.png";
import tepic4 from "@/public/assets/img/png/tepic4.png";
import plan from "@/public/assets/img/png/plan.png";
import plan1 from "@/public/assets/img/png/plan1.png";
import plan2 from "@/public/assets/img/png/plan2.png";
import plan3 from "@/public/assets/img/png/plan3.png";
import plan4 from "@/public/assets/img/png/plan4.png";
import tanja from "@/public/assets/img/png/tanja.png";
import tanja1 from "@/public/assets/img/png/tanja1.png";
import tanja2 from "@/public/assets/img/png/tanja2.png";
import tanja3 from "@/public/assets/img/png/tanja3.png";
import tanja4 from "@/public/assets/img/png/tanja4.png";
import funda from "@/public/assets/img/png/funda.png";
import funda1 from "@/public/assets/img/png/funda1.png";
import funda2 from "@/public/assets/img/png/funda2.png";
import funda3 from "@/public/assets/img/png/funda3.png";
import funda4 from "@/public/assets/img/png/funda4.png";
import gastro from"@/public/assets/img/png/gastro.png";
import gastro1 from"@/public/assets/img/png/gastro1.png";
import gastro2 from"@/public/assets/img/png/gastro2.png";
import gastro3 from"@/public/assets/img/png/gastro3.png";
import gastro4 from"@/public/assets/img/png/gastro4.png";
import milu from"@/public/assets/img/png/milu.png";
import milu1 from"@/public/assets/img/png/milu1.png";
import milu2 from"@/public/assets/img/png/milu2.png";
import milu3 from"@/public/assets/img/png/milu3.png";
import milu4 from"@/public/assets/img/png/milu4.png";
import bio from"@/public/assets/img/png/bio.png";
import bio1 from"@/public/assets/img/png/bio1.png";
import bio2 from"@/public/assets/img/png/bio2.png";
import bio3 from"@/public/assets/img/png/bio3.png";
import bio4 from"@/public/assets/img/png/bio4.png";
import bl from"@/public/assets/img/png/bl.png";
import bl1 from"@/public/assets/img/png/bl1.png";
import bl2 from"@/public/assets/img/png/bl2.png";
import bl3 from"@/public/assets/img/png/bl3.png";
import bl4 from"@/public/assets/img/png/bl4.png";

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
      "Working as developer proficient in React.js, Next.js, TypeScript, CSS, Tailwind, JavaScript,  WordPress, Adobe Suite. Committed to creative, functional websites and apps.",
    icon: React.createElement(RiReactjsLine),
    date: "Apr 2015 - Present",
  },
  {
    title: "Broadcast System Engineer",
    company: "RTRS",
    location: "Banja Luka, B&H",
    description:
      "Managed broadcast equipment, oversaw transmission systems, resolved different technical faults, operated DSNG vehicles, and ensured all requirements for live broadcasts.",
    icon: React.createElement(FaBroadcastTower),
    date: "Jul 2015 - Jun 2025",
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
  category: "Websites" | "Design";
  description: string;
  details: string;
  details2: string;
  imageUrl: StaticImageData;
  topimg: StaticImageData;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  projectUrl: string;
  technologies: string[];
};

export const projectsData: ProjectType[] = [
  {
    title: "Traži.ba",
    client: "Traži.ba",
    category: "Websites",
    description:
      "A dynamic news portal delivering real-time updates, breaking news, and in-depth analysis on global events, politics, technology, and entertainment.",
    details:
      "My project is a dynamic and comprehensive news portal designed to deliver real-time updates, breaking news, and in-depth analysis on global events, politics, technology, and entertainment. It leverages a robust tech stack to ensure a seamless user experience and high performance.",
    details2:
      "The portal is crafted using JavaScript, HTML, and CSS to create a responsive and engaging front-end interface. It employs PHP and SQL to handle server-side logic and database interactions and CodeIgniter framework for enhancing development speed and maintainability.",
    imageUrl: trazi,
    topimg: trazi0,
    image1: trazi1,
    image2: trazi2,
    image3: trazi3,
    projectUrl: "https://trazi.ba/",
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
    imageUrl: goja,
    topimg: goja1,
    image1: goja3,
    image2: goja4,
    image3: goja2,
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
    imageUrl: isi,
    topimg: isi1,
    image1: isi3,
    image2: isi4,
    image3: isi2,
    projectUrl: "https://lssadora-website.vercel.app/",
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
    imageUrl: koreni,
    topimg: koreni4,
    image1: koreni1,
    image2: koreni2,
    image3: koreni3,
    projectUrl: "https://www.nasikorijeni.com/",
    technologies: ["React", "Next.js", "Bootstrap 5"],
  },
  {
    title: "ConselTech",
    client: "ConselTech",
    category: "Websites",
    description:
      "Portfolio highlighting electric service and elevator repair projects, showcasing quality installation, maintenance, and exceptional customer satisfaction.",
    details:
      "This electric service company portfolio project demonstrates expertise in installation, maintenance, and repair services for residential and commercial clients. It showcases a commitment to quality workmanship and customer satisfaction.",
    details2:
      "The portfolio provides a comprehensive overview of the company's capabilities, ensuring clarity and trust in their electrical solutions for diverse client needs.",
    imageUrl: tech,
    topimg: tech1,
    image1: tech3,
    image2: tech4,
    image3: tech2,
    projectUrl: "https://conseltech.se/",
    technologies: ["React", "Bootstrap 5", "Next"],
  },
  {
    title: "West Hair",
    client: "West Hair Salon",
    category: "Websites",
    description:
      "Portfolio highlighting beauty salon projects, showcasing exceptional hairstyling, skincare, and makeup services with a focus on client satisfaction.",
    details:
      "This beauty salon portfolio project highlights a variety of hair styling, skincare, and makeup services, emphasizing quality and client satisfaction. It showcases the salon's expertise in enhancing beauty and wellness through personalized treatments and professional techniques.",
    details2:
      "The portfolio ensures an engaging and informative experience, showcasing the salon's services, expertise, and dedication to enhancing clients' beauty and confidence.",
    imageUrl: salon,
    topimg: salon1,
    image1: salon3,
    image2: salon4,
    image3: salon2,
    projectUrl: "https://west-hair-salon-website.vercel.app/",
    technologies: ["HTML", "Bootstrap 5", "CSS"],
  },
  {
    title: "Megaplan Events",
    client: "Megaplan Events",
    category: "Websites",
    description:
      "Showcasing an event organizing company's portfolio, highlighting successful events, meticulous planning, creative designs, and exceptional client satisfaction.",
    details:
      "Event organizer portfolio project showcases a range of successfully managed events, highlighting meticulous planning, creative designs, and flawless execution. The portfolio features various types of events, from corporate gatherings to personal celebrations, demonstrating versatility and expertise.",
    details2:
      "The project ensures an engaging and seamless user experience, enhancing the presentation of event planning capabilities, improving client satisfaction, and showcasing the organizer's attention to detail and creativity.",
    imageUrl: mega,
    topimg: mega1,
    image1: mega3,
    image2: mega4,
    image3: mega2,
    projectUrl: "https://megaplan-events-website-coral.vercel.app/",
    technologies: ["React", "Bootstrap 5", "Next"],
  },
  {
    title: "Sindikat RTRS",
    client: "Sindikat RTRS",
    category: "Websites",
    description:
      "Portfolio showcasing TV station syndicate website projects, featuring dynamic content management, seamless broadcasting solutions, and enhanced viewer engagement.",
    details:
      "This TV station syndicate website project showcases a comprehensive and dynamic platform for managing and broadcasting content across multiple stations. The website offers robust content management features, seamless broadcasting capabilities, and an engaging user interface.",
    details2:
      "The platform ensures a seamless and engaging user experience, enhancing the management and presentation of syndicated TV content, improving viewer engagement, and accessibility.",
    imageUrl: rtrs,
    topimg: rtrs1,
    image1: rtrs3,
    image2: rtrs4,
    image3: rtrs2,
    projectUrl: "https://sindikat-rtrs-website.vercel.app/",
    technologies: ["HTML", "Bootstrap 5", "CSS"],
  },
  {
    title: "Apartman Tanja",
    client: "Apartman Tanja",
    category: "Websites",
    description:
      "The property rental website provides an all-encompassing solution for finding and managing rental properties with ease, ensuring a seamless experience for both property owners and tenants.",
    details:
      "This property rental portfolio project streamlines the entire rental process, from listing and searching properties to managing bookings and payments. Built with React for dynamic interactions, Bootstrap 5 for a modern and responsive layout, and Next.js for enhanced server-side rendering and SEO performance, this platform ensures a top-notch user experience.",
    details2:
      "This tech stack delivers a robust and intuitive property rental platform that facilitates smooth transactions and fosters positive tenant-landlord relationships through efficient, user-friendly features and reliable performance.",
    imageUrl: tanja,
    topimg: tanja4,
    image1: tanja1,
    image2: tanja2,
    image3: tanja3,
    projectUrl: "https://apartman-tanja-website.vercel.app/",
    technologies: ["React", "Next.js", "Bootstrap 5"],
  },
  {
    title: "Damona",
    client: "Damona Coffee Room",
    category: "Design",
    description:
      "Expertly designed and branded to create a cozy, inviting atmosphere that perfectly complements their delightful menu and ambiance.",
    details:
      "Focused on creating a cozy and inviting atmosphere, the design incorporated warm colors, comfortable seating, and rustic elements to evoke a sense of homeliness. The branding was developed to reflect the café's unique personality, including custom logos, signage, and menu designs that align with the overall aesthetic.",
    details2: "",
    imageUrl: damona,
    topimg: damona1,
    image1: damona3,
    image2: damona4,
    image3: damona2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Rolnica",
    client: "Rolnica",
    category: "Design",
    description:
      "Designed a vibrant and playful logo for an ice cream shop, capturing its fun, refreshing, and delightful essence with colorful elements and whimsical typography.",
    details:
      "The logo design aimed to capture the fun, refreshing, and delightful essence of the ice cream shop. Vibrant colors and whimsical typography were chosen to reflect the playful nature of the brand. The logo incorporated elements like ice cream cones, scoops, and sprinkles to make it instantly recognizable and appealing to all ages.",
    details2: "",
    imageUrl: rolnica,
    topimg: rolnica1,
    image1: rolnica3,
    image2: rolnica4,
    image3: rolnica2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Dunje i Kolači",
    client: "Dunje i Kolači",
    category: "Design",
    description:
      "Designed a captivating logo and cohesive branding for an event planning and catering company, highlighting elegance, creativity, and memorable experiences.",
    details:
      "For the event planning and catering company, the logo and branding were designed to encapsulate elegance, creativity, and memorable experiences. The logo features intricate designs and a sophisticated color palette, evoking a sense of luxury and celebration. Elements like elegant fonts, artistic flourishes, and subtle event-related icons were integrated to reflect the company's expertise in crafting unforgettable events.",
    details2: "",
    imageUrl: dunje,
    topimg: dunje1,
    image1: dunje3,
    image2: dunje4,
    image3: dunje2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "West Hair",
    client: "West Hair Salon",
    category: "Design",
    description:
      "Developed an elegant logo and cohesive branding for a beauty salon, emphasizing luxury, sophistication, and modern aesthetics with refined elements.",
    details:
      "The logo and branding for the beauty salon were designed to reflect luxury, sophistication, and modern aesthetics. An elegant color palette, refined typography, and stylish elements were chosen to create a sense of exclusivity and professionalism. The logo incorporated subtle beauty-related icons to make it instantly recognizable while maintaining a high-end appeal.",
    details2: "",
    imageUrl: west,
    topimg: west1,
    image1: west3,
    image2: west4,
    image3: west2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "NBV računovodstvo",
    client: "NBV računovodstvo",
    category: "Design",
    description:
      "Developed a dynamic logo and cohesive branding for an accounting firm, merging professionalism with innovation to inspire trust and growth.",
    details:
      "For the accounting firm, the logo and branding were designed to be both distinctive and innovative. The logo features an abstract, geometric design symbolizing growth and stability, paired with a modern, vibrant color palette to convey energy and forward-thinking. The typography is sleek and professional, ensuring a polished and contemporary look.",
    details2: "",
    imageUrl: nbv,
    topimg: nbv1,
    image1: nbv3,
    image2: nbv4,
    image3: nbv2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Telemark",
    client: "Telemark",
    category: "Design",
    description:
      "Designed an engaging logo and dynamic branding for a call center and marketing company, blending connectivity, innovation, and customer engagement.",
    details:
      "The logo and branding for the call center and marketing company were crafted to embody connectivity, innovation, and customer engagement. The logo features interconnected shapes and vibrant colors to symbolize communication and dynamic interaction. Modern typography was chosen to reflect the company's forward-thinking approach, while playful yet professional elements convey a sense of energy and enthusiasm.",
    details2: "",
    imageUrl: tele,
    topimg: tele1,
    image1: tele3,
    image2: tele4,
    image3: tele2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Grant Thornton",
    client: "Grant Thornton",
    category: "Design",
    description:
      "Engineered a robust corporate identity for an audit company, fusing integrity, precision, and innovation to elevate trust and operational excellence.",
    details:
      "The corporate branding for the audit company was meticulously crafted to embody integrity, precision, and innovation. The design concept focused on creating a visual identity that instills trust and communicates expertise in auditing services. Clean lines, a professional color palette, and sophisticated typography were chosen to convey professionalism and reliability.",
    details2: "",
    imageUrl: gt,
    topimg: gt1,
    image1: gt3,
    image2: gt4,
    image3: gt2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },

  {
    title: "Naši Korijeni",
    client: "Naši Korijeni",
    category: "Design",
    description:
      "Crafted vibrant corporate branding for an event organizing company, blending creativity, elegance, and seamless execution for unforgettable experiences.",
    details:
      "The corporate branding for the event organizing company was conceived to encapsulate creativity, elegance, and seamless execution. The design aimed to evoke excitement and anticipation, reflecting the company's ability to deliver unforgettable events. Vibrant colors, playful typography, and dynamic graphic elements were chosen to convey energy and innovation.",
    details2: "",
    imageUrl: nasi,
    topimg: nasi1,
    image1: nasi3,
    image2: nasi4,
    image3: nasi2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },

  {
    title: "RTRS",
    client: "Radio Televizija RS",
    category: "Design",
    description:
      "Crafted dynamic corporate branding for a TV station, merging innovation, storytelling, and visual impact to captivate audiences effectively.",
    details:
      "The corporate branding for the TV station was designed to merge innovation, storytelling, and visual impact. The concept aimed to captivate audiences and establish a strong visual identity in the competitive media landscape. Emphasis was placed on creating a dynamic and memorable brand presence that resonates with viewers.",
    details2: "",
    imageUrl: srt,
    topimg: srt1,
    image1: srt3,
    image2: srt4,
    image3: srt2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Zavičaj Festival",
    client: "Zavičaj Festival",
    category: "Design",
    description:
      "Crafted vibrant corporate and logo designs for an ethnic festival, capturing cultural essence and fostering community spirit with creativity.",
    details:
      "The corporate and logo design project for the ethnic festival focused on creating a vibrant and cohesive brand identity that captured the festival's cultural richness and diversity, involving extensive research on cultural backgrounds, developing versatile logo concepts, and designing promotional materials that reflect the festival's vibrant atmosphere, ultimately ensuring a dynamic and memorable visual presence that fosters a sense of community and celebrates diverse heritage.",
    details2: "",
    imageUrl: fest,
    topimg: fest1,
    image1: fest3,
    image2: fest4,
    image3: fest2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },

  {
    title: "Advokat Tepić",
    client: "Advokat Tepić",
    category: "Design",
    description:
      "Developed sophisticated corporate branding and logo design for a law firm, emphasizing professionalism, trust, and modern legal expertise.",
    details:
      "The corporate and logo design project for the law firm involved developing a sophisticated and cohesive brand identity that emphasized professionalism, trust, and modern legal expertise, incorporating thorough research into legal industry aesthetics, creating versatile logo concepts, and designing business stationery, marketing materials, and digital assets to ensure a consistent and authoritative visual presence across all platforms.",
    details2: "",
    imageUrl: tepic,
    topimg: tepic1,
    image1: tepic3,
    image2: tepic4,
    image3: tepic2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Megaplan Events",
    client: "Megaplan Events",
    category: "Design",
    description:
      "Created dynamic corporate branding and logo design for an event organizer firm, highlighting innovation, creativity, and seamless event execution.",
    details:
      "The corporate and logo design project for the event organizer firm focused on creating a dynamic and cohesive brand identity that highlights innovation, creativity, and seamless event execution, incorporating extensive market research, developing versatile logo concepts, and designing a full suite of business stationery, promotional materials, and digital assets to ensure a consistent and impactful visual presence across all platforms.",
    details2: "",
    imageUrl: plan,
    topimg: plan1,
    image1: plan3,
    image2: plan4,
    image3: plan2,
    projectUrl: "",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    title: "Gastro&Bar",
    client: "Traži.ba",
    category: "Websites",
    description:
      "Designed to highlight menus, events, and ambience, it seamlessly blends bold visual storytelling with essential business features like reservations, contact info, and location mapping.",
    details:
      "My project is a modern and visually engaging website tailored for the hospitality industry, specifically bars and restaurants. It offers a seamless way to present menus, promote events, and share key business information with customers. With an intuitive layout and responsive design, it ensures visitors enjoy a smooth browsing experience across all devices, making it easy to discover the atmosphere, offerings, and unique vibe of each venue.",
    details2:
      "The website is developed using a modern tech stack, featuring HTML, SCSS, and JavaScript on the front-end for a responsive and stylish user interface. On the back-end, it leverages the power of Laravel (PHP), providing a robust framework for handling server-side logic, routing, and secure data management. MySQL is used for efficient database operations, while Laravel’s modular structure ensures high maintainability, scalability, and the flexibility to easily integrate features like reservations, menus, or promotional content.",
    imageUrl: gastro,
    topimg: gastro1,
    image1: gastro3,
    image2: gastro4,
    image3: gastro2,
    projectUrl: "https://gastrobar.ba/",
    technologies: ["PHP", "SQL", "JS", "Laravel"],
  },
  {
    title: "Fundament",
    client: "UG Fundament",
    category: "Websites",
   description:
  "Created to represent the mission, activities, and values of the organization, this platform provides clear access to news, projects, and resources, all within a clean and accessible interface.",
details:
  "My project is a professional and accessible website built for a citizens' association, designed to showcase their initiatives, goals, and community involvement. It offers an intuitive way to explore current projects, stay updated with the latest news, and engage with the organization’s work. The layout emphasizes clarity and responsiveness, ensuring all users—regardless of device—can easily find relevant information and connect with the organization.",
details2:
  "The website is built using a modern front-end stack featuring React, Next.js, and Bootstrap 5. This combination allows for fast performance, modular development, and responsive design. The use of Next.js provides server-side rendering and SEO benefits, while Bootstrap 5 ensures a consistent and mobile-friendly UI. The architecture is designed for flexibility and maintainability, making it easy to expand with new sections such as blog posts, member directories, or event listings.",

    imageUrl: funda,
    topimg: funda1,
    image1: funda3,
    image2: funda4,
    image3: funda2,
    projectUrl: "https://fundament-website.vercel.app/",
    technologies: ["React", "Next.js", "Bootstrap 5"],
  },
   {
    title: "Gastro&atelje Milunka",
    client: "Milunka",
    category: "Websites",
  description:
  "Crafted to reflect the charm and tradition of the restaurant, this website highlights the menu, ambience, and culinary experience through an elegant and engaging design.",
details:
  "My project is a stylish and responsive website created for a traditional restaurant, designed to capture its unique atmosphere and showcase its rich culinary offerings. Visitors can explore the menu, view gallery highlights, and find key information like opening hours and location. The layout is optimized for clarity and mobile responsiveness, ensuring every guest enjoys a smooth and inviting browsing experience—whether booking a table or just browsing the specials.",
details2:
  "The website is developed using React, Bootstrap 5, and SASS, providing a clean and efficient front-end architecture. This tech stack allows for fast loading times, modular components, and easy styling customization. The responsive design ensures the site looks and works great on all devices, while the codebase remains maintainable and scalable for future additions like online reservations, multilingual support, or seasonal promotions.",

    imageUrl: milu,
    topimg: milu1,
    image1: milu3,
    image2: milu4,
    image3: milu2,
    projectUrl: "https://www.restoranmilunka.com/",
    technologies: ["React", "Next.js", "Bootstrap 5"],
  },
  {
    title: "Biotega",
    client: "Biotega",
    category: "Websites",
 description:
  "Designed to establish credibility and provide easy access to essential product and regulatory information, this website serves as a central hub for healthcare professionals and industry partners.",
details:
  "My project is a clean, professional, and informative website built for Biotega, a medical supplier and regulatory services provider. The platform presents the company’s core services, product range, and expertise in regulatory compliance in a structured and accessible way. Visitors can easily navigate through service categories, learn about regional partnerships, and get in touch through clearly defined contact channels. The layout is tailored for clarity, trust, and efficiency—ideal for the healthcare and pharmaceutical industries.",
details2:
  "The website is developed using React, Bootstrap 5, and SASS, ensuring a fast, responsive, and visually consistent experience across all devices. React enables modular component management for scalable development, while Bootstrap 5 offers a sleek, mobile-first grid system. SASS enhances styling efficiency, making it easy to maintain and expand the UI. The tech stack supports future integration with features such as multilingual content, product databases, document downloads, or partner portals.",

    imageUrl: bio,
    topimg: bio1,
    image1: bio3,
    image2: bio4,
    image3: bio2,
    projectUrl: "https://www.biotega.net/",
    technologies: ["React", "Next.js", "Bootstrap 5"],
  },
  {
    title: "Banjalučki Portal",
    client: "Banjalučki",
    category: "Websites",
 description:
  "Built to inform, engage, and connect the local community, this news portal delivers up-to-date coverage of events, stories, and topics that matter to the citizens of Banja Luka and the surrounding region.",
details:
  "My project is a dynamic and content-rich news website tailored for a Banja Luka–based media portal. The platform is designed to deliver timely news, feature articles, interviews, and multimedia content in a clear and reader-friendly format. Users can browse categories like politics, society, culture, and sports, with seamless navigation and fast loading. The portal also supports comment sections, social sharing, and potential ad placement—ensuring both community engagement and monetization opportunities.",
details2:
  "The website is developed using React, Bootstrap 5, and SASS, delivering a responsive and modular architecture optimized for performance and content-heavy layouts. React enables flexible rendering of articles and components, while Bootstrap ensures mobile-first responsiveness. SASS provides efficient styling control, especially for managing a broad range of visual elements like headlines, thumbnails, and category color codes. This stack allows easy scaling for future features such as newsletter integration, real-time updates, or author dashboards.",

    imageUrl: bl,
    topimg: bl1,
    image1: bl3,
    image2: bl4,
    image3: bl2,
    projectUrl: "https://www.banjaluckibl.com/",
    technologies: ["Wordpress", "JS", "HTML", "CSS"],
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
