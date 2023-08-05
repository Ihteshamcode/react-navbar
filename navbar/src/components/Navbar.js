import  React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {TbMenu} from "react-icons/tb";
import {RxCross2} from "react-icons/rx";

import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=>setClick(!click)
  return (
    <div className="header">
      <Link to="/"><h1>Galaxy</h1></Link>
      <ul className={click ? "menu active": "menu"}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/pricing">Pricing</Link>
        </li>
        <li>
        <Link to="/traning">Traning</Link>
       </li>  
       <li>
       <Link to="/contact">Contact</Link>
        
        </li>     
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ?    <RxCross2 size={34} style={{color:"#fff"}} /> : <TbMenu size={34} style={{color:"#fff"}} />}
     
      </div>
    </div>
  );
};

export default Navbar;
