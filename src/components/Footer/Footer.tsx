import React from "react";
import style from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer} role="contentinfo">
      <p>&copy; 2026 sidekick</p>
    </footer>
  );
};

export default Footer;
