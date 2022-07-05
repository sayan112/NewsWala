import React from 'react'
import img from "./img/navimg2.jpg";
import  "./navbarcss.css";
import Drawer from "./Drawer.js";

const navbarnews = ({ setCategory }) => {
  console.log(img);
  return (
    <div className="nav">
      <div className="icon">
        <Drawer setCategory={setCategory} />
      </div>
      <img className='imgnav' src={img} style={{ cursor: "pointer" }} height="100%" alt='logo' />
      <h1 className='sixth'> Newswala.com</h1>
    </div>
  );
};

export default navbarnews
