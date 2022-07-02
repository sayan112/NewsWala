import React from 'react'
import img from "./img/navimg2.jpg";
import  "./navbarcss.css";
import Drawer from "./Drawer.js";

const navbarnewsFy = ({ setCategory }) => {
  console.log(img);
  return (
    <div className="nav">
      <div className="icon">
        <Drawer setCategory={setCategory} />
      </div>
      <img src={img} style={{ cursor: "pointer" }} height="100%" alt='logo' />
    </div>
  );
};

export default navbarnewsFy
