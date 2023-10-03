import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink, darkMode }) {
  // Define a class name to conditionally apply to text elements
  const textClass = darkMode ? 'text-black' : '';

  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className={`dark:text-light-heading font-semibold text-lg pt-1 ${textClass}`}>{title}</h1>
        <p className={`text-content pt-4 font-light ${textClass}`}>{description}</p>
        <h3 className={`text-dark-heading dark:text-light-heading font-medium pt-4 ${textClass}`}>
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                transition: 'background-color 0.3s, color 0.3s',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              className={`underline pl-2 font-light dark:text-white ${textClass}`}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0056b3';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#007bff';
              }}
            >
              🔗 Live Preview
            </a>
          </div>
          <div className="flex items-center">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                padding: '8px 16px',
                backgroundColor: '#32CD32',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                transition: 'background-color 0.3s, color 0.3s',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              className={`underline pl-2 font-light dark:text-white ${textClass}`}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#4CBB17';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#32CD32';
              }}
            >
              💻 View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
