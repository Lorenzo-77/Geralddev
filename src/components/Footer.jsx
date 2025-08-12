// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p className="copy">© {year} Gerald.Dev — All rights reserved.</p>
      </div>
    </footer>
  );
}
