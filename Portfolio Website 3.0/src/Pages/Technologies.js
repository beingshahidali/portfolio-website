import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    java,
    sql,
    express,
    node,
    mongodb,
    firebase,
  } = techStackDetails;

  // Define a CSS class to set image sizes to 80%
  const largerSizeImage = "w-4/5"; // Use Tailwind CSS utility class for 80% width

  // Define CSS classes for smaller text sizes and gap
  const smallerText = "text-sm md:text-base lg:text-lg";
  const sectionGap = "pb-8"; // Add bottom padding for gap

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className={`flex ${sectionGap}`}>
        <div className="tech-stack flex-1">
          <h1 className={`text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold ${smallerText}`}>
            Tech Stack
          </h1>
          {/* <p className={`text-content py-2 lg:max-w-3xl ${smallerText}`}>
            Technologies I've been working with recently
          </p> */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 pt-6">
            <img src={java} title="Java" alt="Java" className={largerSizeImage} />
            <img src={html} title="HTML" alt="HTML" className={largerSizeImage} />
            <img src={css} title="CSS" alt="CSS" className={largerSizeImage} />
            <img src={js} title="JavaScript" alt="JavaScript" className={largerSizeImage} />
            <img src={react} title="React" alt="React" className={largerSizeImage} />
            <img src={redux} title="Redux" alt="Redux" className={largerSizeImage} />
            <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className={largerSizeImage} />
            <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className={largerSizeImage} />
            <img src={express} title="Express" alt="Express" className={largerSizeImage} />
            <img src={node} title="Node.js" alt="Node.js" className={largerSizeImage} />
            <img src={mongodb} title="MongoDB" alt="MongoDB" className={largerSizeImage} />
            <img src={sql} title="SQL" alt="SQL" className={largerSizeImage} />
          </div>
        </div>
        {/* Add a vertical line */}
        <div className="bg-gray-300 w-px h-full mx-6"></div>
        <div className="tools flex-1">
          <h1 className={`text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold ${smallerText}`}>
            Tools
          </h1>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 pt-6">
            <img
              src={vscode}
              title="Visual Studio Code"
              alt="Visual Studio Code"
              className={largerSizeImage}
            />
            <img src={git} title="Git" alt="Git" className={largerSizeImage} />
            <img src={github} title="GitHub" alt="GitHub" className={largerSizeImage} />
            <img src={figma} title="Figma" alt="Figma" className={largerSizeImage} />
            <img src={npm} title="NPM" alt="NPM" className={largerSizeImage} />
            <img src={postman} title="Postman" alt="Postman" className={largerSizeImage} />
            <img src={firebase} title="Firebase" alt="Firebase" className={largerSizeImage} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Technologies;
