// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
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
// Porject Images
import projectImage1 from "./assets/projects/Project1.png";
import projectImage2 from "./assets/projects/Project2.png";
import projectImage3 from "./assets/projects/Project3.png";
import projectImage4 from "./assets/projects/Project4.png";
import projectImage5 from "./assets/projects/Project5.png";
import projectImage6 from "./assets/projects/Project 6.png";

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
  linkdein: "https://www.linkedin.com/g3vind",
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
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Namaste Food",
    image: projectImage1,
    description: `Online Food Ordering Website Features : Shimmer UI,
Used Swiggy's Live API data,
React Router DOM for routing & navigation,
Search Based Restaurants Filter.`,
    techstack: "ReactJs, Tailwind CSS, React Router DOM",
    previewLink: "https://namaste-food-app.netlify.app/",
    githubLink: "https://github.com/g3vind/namaste-food",
  },

  {
    title: "Netflix Clone",
    image: projectImage3,
    description: `NETFLIX CLONE WEBSITE USING HTML, CSS & JAVASCRIPT`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://clone-using-html-css-js.netlify.app/",
    githubLink: "https://github.com/g3vind/netflix-clone",
  },
  {
    title: "Blogging Heaven",
    image: projectImage4,
    description: `Blogging Heaven is a website which lets you submit an article which upon approval will be up on our website and you can get a good amount of reach from here!`,
    techstack: "HTML5, CSS3 , JavaScript",
    previewLink: "https://bloggingheaven.netlify.app/",
    githubLink: "https://github.com/g3vind/Blogging-Heaven",
  },
  {
    title: "Memory Based Game",
    image: projectImage2,
    description: `https://github.com/g3vind/Memory-Based-Game`,
    techstack: "HTML5, CSS3, JavaScript, DOM Manipulation",
    previewLink: "https://memory-based-game-using-js.netlify.app/",
    githubLink: "https://github.com/g3vind/Memory-Based-Game",
  },
  {
    title: "To Do List",
    image: projectImage5,
    description: `add tasks, edit tasks, remove tasks, local storage.`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://what-to-do-list1.netlify.app/",
    githubLink: "https://github.com/g3vind/To-Do-List",
  },
  {
    title: "Calculator",
    image: projectImage6,
    description: `A Simple calculator performs all operations of a basic calculator`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://calculator-using-js11.netlify.app/",
    githubLink: "https://github.com/g3vind/calculator_using_js",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "g3vind@gmail.com",
  phone: "+91 6206359037",
};
