import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
     NewsiFy made by -{" "}
        <a href="https://www.linkedin.com/in/maitra-sayan/" target={""}>
          Sayan Maitra{" "}
        </a>
      </span>

      <hr style={{ width: "90%" , color:"whitesmoke" }} />

      <div className="iconContainer">
        <a href="https://twitter.com/SayanMaitra12" target={""}>
          <i class="fa-brands fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/sayan_11_maitra/" target={""}>
          <i class="fa-brands fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/sayan.maitra.5437/" target={""}>
          <i class="fa-solid fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};
