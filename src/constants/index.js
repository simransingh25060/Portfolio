import {
  placeholder,
  bdcoe
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiDotnet,
  SiTypescript,
  SiOracle,
} from "react-icons/si";


import { DiCss3, DiHtml5 } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaUniversity, FaSchool } from "react-icons/fa";

export const resumeLink =
  "";
export const repoLink = "https://github.com/simransingh25060";

export const callToAction = "https://www.linkedin.com/in/simran-singh-50165b31a";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: FaUniversity,
    title: "AJAY KUMAR GARG ENGINEERING COLLEGE , GHAZIABAD",
    degree: "Bachelor of Technology",
    duration: "2023 - 2027",
    content1: "Major: Electrical and Electronics Engineering",
    content2: "",
  },
  {
    id: "education-2",
    icon: FaSchool,
    title: "SETH M.R. JAIPURIA SCHOOLS, VARANASI",
    degree: "Higher Secondary Education",
    duration: "2021 - 2023",
    content1:
    "Completion of Class 12th with specialization in Physics, Chemistry, and Mathematics under the CBSE Board."
},
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
     
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const projects = [
   {
    id: "project-1",
    title: "Minilink",
    github: "https://github.com/simransingh25060/Minilink",
    link: "https://minilink-frontend.vercel.app/",
    image: "https://ucarecdn.com/a03197aa-bf1e-4f90-94b5-5a523e95a864/-/preview/299x168/",
    content:
      "URL shortening application that converts long ,messy URLs into short ,clean links.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
   {
    id: "project-2",
    title: "Promptiqo",
    github: "https://github.com/simransingh25060/Promptiqo",
    link: "https://promptiqo-vjxp.vercel.app/",
    image: "https://promptiqo-vjxp.vercel.app/bot.png",
    content:
      "An AI-powered chat app for interacting with a conversational assistant to ask questions and generate responses.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
   {
    id: "project-3",
    title: "SpiceHop",
    github: "https://github.com/simransingh25060/SpiceHop",
    link: "https://spice-hop-frontend.vercel.app/",
    image: "https://ucarecdn.com/8d198456-7f22-4496-bb26-a0cb09f5cec0/-/preview/540x360/",
    content:
      "A modern food discovery platform, it features secure authentication and real-time order management.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-4",
    title: "TripTrack",
    github: "https://github.com/simransingh25060/TripTrack",
    link: "https://triptrack.tech/",
    image: "https://ucarecdn.com/ba44ed11-fbf8-46ab-bea6-d9766992fc37/-/preview/971x593/",
    content:
      "A Travel Agency Dashboard where users can create and manage custom trips, book accommodations and activities.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-5",
    title: "Scanalyze",
    github: "https://github.com/simransingh25060/Scanalyze",
    link: "https://scanalyze-kappa.vercel.app/",
    image: "https://ucarecdn.com/ef2f4834-25c4-41d7-be80-4cf7397408df/-/preview/1000x563/", 
    content:
      "A web application built with JavaScript and TypeScript that scans and evaluates resumes to extract key information, highlight skills, and provide insights for improving job readiness.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
  },
  {
    id: "project-6",
    title: "Blognest",
    github: "https://github.com/simransingh25060/BlogNest",
    link: "https://appwrite-beige.vercel.app/",
    image: "https://ucarecdn.com/3e091f44-2ab4-417c-91df-592cce83e239/-/preview/612x344/",
    content:
      "A blog application built with React and Appwrite. Users can sign up, log in, create, edit, and delete posts with image uploads.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
  },
  {
    id: "project-7",
    title: "Brain Blitz",
    github: "https://github.com/simransingh25060/BrainBlIitz",
    link: "https://brain-bl-iitz.vercel.app/",
    image: "https://ucarecdn.com/3a949bbc-8bae-45dd-bc81-094e30c1cdb9/-/preview/1000x571/",
    content:
      "Brain Blitz is an all-in-one brain-training game featuring quizzes, word-guess challenges, and engaging puzzles. Includes multiple categories, difficulty levels, and score tracking for interactive gameplay.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: DiHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  // {
  //   id: "project-7",
  //   title: "Currency Converter",
  //   github: "https://github.com/simransingh25060/Currency-Converter",
  //   link: "https://currency-converter-blush-two.vercel.app/",
  //   image: "https://ucarecdn.com/a47e8886-571a-4a66-be3b-c575f05fb1d8/-/preview/1000x560/",
  //   content:
  //     "A simple yet effective currency converter that allows users to convert between different currencies in real-time. Built with React and API integration for accurate exchange rates.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiJavascript,
  //       name: "JavaScript",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiTailwindcss,
  //       name: "TailwindCSS",
  //     },
  //   ],
  // },
  {
    id: "project-8",
    title: "Fruit Cutting Game",
    github: "https://github.com/simransingh25060/Fruit-Cutting-Game0",
    link: "https://fruit-cutting-game0.vercel.app/",
    image: "https://ucarecdn.com/bcd8ccbf-9744-4387-8db5-bf7008cd581d/-/preview/813x655/",
    content:
      "An interactive fruit-cutting game where players slice fruits while avoiding bombs, inspired by Fruit Ninja. Features smooth animations, sound effects, and increasing difficulty levels.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: DiHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
];

export const extraCurricular = [
  {
    id: 1,
    organisation: "Big Data Center Of Excellence, AKGEC",
    title: "Member",
    duration: "November 2024 - Present",
    content: [
       
    ],
    logo: bdcoe,
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/simran-singh-50165b31a",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/simransingh250",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:simransingh@gmail.com",
  },
];

export const aboutMe = {
  name: "Simran Singh",
  githubUsername: "simransingh250",
  tagLine:
    "Member of Big Data Center OF Excellence",
  intro:
    " Blending design and technology as a Frontend Developer to deliver responsive, intuitive, and high-performance web experiences.",
};

export const experiences = [
  {
    organisation: "Big Data Center of Excellence",
    logo: bdcoe,
    link: "https://bdcoe.co.in",
    positions: [
      {
        title: "NGISE",
        duration: "January 2024 - May 2025",
        content: [
          {
            text: "Contributed to the development of the NGISE 2025 website in collaboration with the college, enhancing online engagement and accessibility.",
            link: "",
          },
        ],
      },
      {
        title: "Townhall Workshop",
        duration: "May 2025", 
        content: [
          {
            text: "Led an impactful Townhall workshop attended by 150+ students, facilitating knowledge sharing and fostering active participation.",
            link: "",
          },
        ],
      },
      {
        title: "Rush Hour",
        duration: "December 2024",
        content: [
          {
            text: "Collaborated to the 'Rush Hour' competition with BDCOE members, attracting over 150+ students and promoting healthy competition and teamwork.",
            link: "",
          },
        ],
      },
    ],
  },
];
