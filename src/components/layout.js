import React from "react";
import Navbar from "../components/NavBar";
import { rhythm, scale } from "../utils/typography";

const Layout = props => {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
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

export default Layout;
