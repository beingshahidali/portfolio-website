import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

import profile from "./assets/Profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import java from "./assets/techstack/java.png"
import express from "./assets/techstack/express.png"
import node from "./assets/techstack/node.png"
import mongodb from "./assets/techstack/mongodb.png"
import sql from "./assets/techstack/sql.png"
import firebase from "./assets/techstack/firebase.png"
import Typewriter from "typewriter-effect";

// Porject Images
import projectImage1 from "./assets/projects/Project1.png";
import projectImage2 from "./assets/projects/Project 2.png";
import projectImage3 from "./assets/projects/Project3.png";
import projectImage9 from "./assets/projects/Project2.png";
import projectImage4 from "./assets/projects/Project4.png";
import projectImage5 from "./assets/projects/Project5.png";
import projectImage6 from "./assets/projects/Project 6.png";
import projectImage8 from "./assets/projects/Project8.png"

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Govind Kumar",
  tagline: "I build things for web",
  img: profile,
  about: `Seeking an opportunity to work for an organization that will give me a platform to learn and explore new technologies while improving my skills.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/g3vind/",
  github: "https://www.github.com/g3vind",
  twitter: "https://twitter.com/g3vind",
  instagram: "https://www.instagram.com/govindxingh",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Development & Designing Intern",
    Company: `The Sparks Foundation`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Sep 2023 - Oct 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master of Computer Applications (MCA)",
    Company: "Vellore Institute of Technology",
    Location: "Vellore, Tamil Nadu, India",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  },
  {
    Position: "Bachelor of Computer Applications (BCA)",
    Company: `L.N. Mishra College of Business Management`,
    Location: "Muzaffarpur, Bihar, India",
    Type: "Full Time",
    Duration: "Aug 2019 - Aug 2022",
  },
  {
    Position: "10+2",
    Company: `Paramount Academy`,
    Location: "Muzaffarpur, Bihar, India",
    Type: "Full Time",
    Duration: "Aug 2017 - Aug 2019",
  },
  {
    Position: "10th",
    Company: `D.A.V. Public School`,
    Location: "Muzaffarpur, Bihar, India",
    Type: "Full Time",
    Duration: "Aug 2017",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  java: java,
  sql: sql,
  firebase: firebase,
  express: express,
  node: node,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Namaste Food",
    image: projectImage1,
    description: `Features : •  Shimmer UI for smooth user experience
• Used Swiggy's Live API data,
• React Router DOM for routing & navigation,
• Search Based Restaurants Filter.`,
    techstack: "ReactJs, Tailwind CSS, React Router DOM",
    previewLink: "https://namaste-food-app.netlify.app/",
    githubLink: "https://github.com/g3vind/namaste-food",
  },
  {
    title: "BCA Blogs",
    image: projectImage2,
    description: `Features : 
•  create/publish blogs, • read others content•  Shimmer UI •  handle unknown URLs with an error page • JSON Server backend.`,
    techstack: "ReactJs, Tailwind CSS, React Router DOM",
    previewLink: "https://bca-blogs.netlify.app/",
    githubLink: "https://github.com/g3vind/bca-blogs",
  },
  {
    title: "Image Search App",
    image: projectImage6,
    description: `
                Features: • Search for images using keywords.
• View image search results with descriptions.
• Load more images to see additional search results`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://search-image-for-you.netlify.app/",
    githubLink: "https://github.com/g3vind/image-search-app",
  },
  {
    title: "To Do List",
    image: projectImage5,
    description: `Features : • Adding tasks
• Editing tasks
• Removing tasks
• Local storage for data retention and convenience
• responsive for all viewport widths`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://what-to-do-list1.netlify.app/",
    githubLink: "https://github.com/g3vind/To-Do-List",
  },
  {
    title: "Memory Based Game",
    image: projectImage9,
    description: `A simple memory based game made using HTML, CSS & Vanilla JavaScript and DOM Manipulation`,
    techstack: "HTML5, CSS3, JavaScript, DOM Manipulation",
    previewLink: "https://memory-based-game-using-js.netlify.app/",
    githubLink: "https://github.com/g3vind/Memory-Based-Game",
  },
  {
    title: "Text Utility App",
    image: projectImage8,
    description: `Features : • Full Responsive for all viewports
• Light and Dark Mode Feature
• Converts text to upper and lower cases
• Text to speech feature`,
    techstack: "HTML5, CSS3, JavaScript, DOM Manipulation",
    previewLink: "https://64b236161f52c15666151da6--hilarious-chimera-7f48d0.netlify.app//",
    githubLink: "https://github.com/g3vind/",
  },


  {
    title: "Netflix Clone",
    image: projectImage3,
    description: `Exact clone of netflix india website`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://clone-using-html-css-js.netlify.app/",
    githubLink: "https://github.com/g3vind/netflix-clone",
  },
  {
    title: "Blogging Heaven",
    image: projectImage4,
    description: `Simple demonstration of a blogging webiste `,
    techstack: "HTML5, CSS3 , JavaScript",
    previewLink: "https://bloggingheaven.netlify.app/",
    githubLink: "https://github.com/g3vind/Blogging-Heaven",
  },


];

// Enter your Contact Details here
export const contactDetails = {
  email: "g3vind@gmail.com",
  phone: "+91 6206359037",
};
