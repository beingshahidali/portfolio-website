import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode">
      <div className="container mx-auto py-1 text-center">
        <p className="text-xs text-dark-content dark:text-light-content">
          Designed and Coded by{" "}
          <a
            className="font-medium text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/g3vind/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <em>Govind Kumar</em>
          </a>{" "}
          with ❤
        </p>
      </div>
    </footer>
  );
}

export default Footer;
