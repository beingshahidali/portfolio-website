import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          <em>Govind Kumar</em>
        </a>{" "}
        with ❤

      </p>
    </footer>
  );
}
export default Footer;
