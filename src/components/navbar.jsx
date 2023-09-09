import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/cupcakee.png";

const Navbar = () => {
  return (
    <div className=" fixed flex justify-between pt-5 w-full">
      <div className="top-0 left-0 ml-10 pb-20 ">
        <img
          src={Logo}
          alt="cupcake icon"
          className="w-14 h-14 object-cover text-orange-600"
        />
      </div>
      <div className="flex justify-evenly mr-20">
        <ul className="list-none flex flex-row space-x-4 top-0 right-0 pb-20">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="restaurants"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              Restaurants
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
