import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/cupcakee.png";

const Navbar = () => {
  return (
    <div className=" fixed flex justify-between pb-10 pt-5 ">
      <div className="top-0 left-0">
        <img src={Logo} alt="cupcake icon" className="w-14 h-14 object-cover" />
      </div>
      <div>
        <ul className="list-none flex flex-row space-x-4 top-0 right-0">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="restaurants" smooth={true} duration={500}>
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
