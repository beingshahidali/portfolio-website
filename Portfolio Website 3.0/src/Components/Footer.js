import React, { useState } from "react";

function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <footer
      className={` bottom-0 left-0 right-0 bg-${isDarkMode ? 'dark' : 'gray-200'} ${isDarkMode ? 'dark:text-black' : 'text-black'
        }`}
    >
      <div className="container mx-auto py-1 text-center">
        <p className={`text-xs ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
          Designed and Coded by{" "}
          <a
            className="font-medium text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/g3vind/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <em>Govind Kumar</em>
          </a>{" "}
          with 🖤
        </p>
      </div>
    </footer>
  );
}

export default Footer;
