import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  starbucks,
  igirder,
  mad,
  shopify,
  bankApp,
  youtube,
  nftverse,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Webflow Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Design",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web design & development",
    company_name: "iGirder Infrastructure development Pvt. Ltd",
    icon: igirder,
    iconBg: "#383E56",
    date: "Feb 2021 - March 2021 ",
    points: [
      "Successfully designed and built the company website on WordPress, which resulted in a 150% increase in web traffic and the retention rate increased by upto 2 times.",
      "Conducted user research to understand customer needs and pain points and Developed a UX/UI strategy that was implemented across the website.",
      "Successfully completed website project on time and under budget by 20%.",
      "Maintained website with 98% uptime for 3 months",
    ],
  },
  {
    title: "Fundraising Volunteer",
    company_name: "Make a Difference",
    icon: mad,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Planned and executed various campaigns to raise awareness and funds for the organization's cause",
"Mobilized communities both within and outside the organization to meet its needs",
"Inspired volunteers in the city to participate in Community Fundraising",
"Attended weekly city Fundraising meetings to stay updated on progress and strategies",
"Participated in trainings to enhance skills and knowledge related to fundraising",
"Actively volunteered to teach and support other verticals with their roles.",
    ],
  },  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Modern Bank Application",
    description:
      "Modern Bank App is a responsive web application built with React and Tailwind. It has stunning hero section, high-quality images, reusable components and mobile responsive.",
    tags: [ 
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react components",
        color: "pink-text-gradient",
      },
    ],
    image: bankApp,
    source_code_link: "https://github.com/sharanvkt/modern-bank",
    project_live_link: "https://modern-bankapp.netlify.app/",
  },  
  {
    name: "Youtube Clone",
    description:
      "It is the youtube clone application built on Reactjs using the newest version of Material UI (MUI5). I built this app to learn advanced react concepts, Rapid API and React Router Properties",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI5",
        color: "green-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "pink-text-gradient",
      },
      {
        name: "reactRouter",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/sharanvkt/youtube-clone",
    project_live_link: "https://youtube-clone-sharan.vercel.app/"
  },
  {
    name: "NFTverse",
    description:
      "Web Application targeted for content creators to sell their upcoming video thumbnails as NFTs and whenever their followers buy these NFTs they earn special rewards",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ipfs",
        color: "green-text-gradient",
      },
    ],
    image: nftverse,
    source_code_link: "https://github.com/sharanvkt/nftverse",
    project_live_link: "https://github.com/sharanvkt/nftverse",
  },
];

export { services, technologies, experiences, testimonials, projects };
