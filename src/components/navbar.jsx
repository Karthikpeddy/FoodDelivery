import React from "react";
import { Link } from "react-scroll";
import Logo from "../assests/cupcakee.png";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <img src={Logo} alt="" className="w-15 h-15 object-cover" />
      </div>
      <div>
        <ul className="list-none">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="home" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
