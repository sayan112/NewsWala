import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Newswala made by -{" "}
        <a
          href="https://www.linkedin.com/in/maitra-sayan/"
          target={"weknweef "}
          className="hoverme"
        >
          Sayan Maitra{" "}
        </a>
      </span>

      <hr style={{ width: "90%", color: "whitesmoke" }} />

      <div className="iconContainer">
        <a
          href="https://twitter.com/SayanMaitra12"
          target={"ms vlnw v"}
          className="hoverme"
        >
          <i class="fa-brands fa-twitter-square fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/sayan_11_maitra/"
          target={"welc clwee "}
          className="hoverme"
        >
          <i class="fa-brands fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.facebook.com/sayan.maitra.5437/"
          target={"wleknweljf"}
          className="hoverme"
        >
          <i class="fa-solid fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};
