import React, { useState } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  if (isDarkMode) {
    document.style.color = 'black';
  }

  return (
    <main className={`container mx-auto max-w-6xl pt-10 mb-20 ${isDarkMode ? 'dark' : ''}`}>
      <section>
        <h1 className={`text-2xl ${isDarkMode ? 'dark:text-light-heading' : 'text-dark-heading'} md:text-4xl xl:text-5xl xl:leading-tight font-bold`}>
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {projectDetails.map(
            ({ title, image, description, techstack, previewLink, githubLink }, index) => (
              <Project
                key={index}
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
                isDarkMode={isDarkMode}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
