import React from "react";
import { Link } from "react-scroll";
import Logo from "../assests/cupcakee.png";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
