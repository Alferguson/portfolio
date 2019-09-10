import React from "react";
import Navbar from "../NavBar";
import styles from "./PageTemplate.module.css";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const PageTemplate = props => {
  const { location, title, children } = props;
  console.log(props);
  return (
    <div className={styles.pageTemp}>
      <header>
        <h1>John Alexander Ferguson</h1>
      </header>
      <Navbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default PageTemplate;
