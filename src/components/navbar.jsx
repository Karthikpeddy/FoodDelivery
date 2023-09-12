import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/fdlogo.png";
import { motion } from "framer-motion";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
import Profile from "../assets/profile.png";

import Cart from "../assets/3dshoppingcart.png";

const Navbar = () => {
  return (
    <div className=" fixed flex pt-5 w-full justify-between">
      <div className="top-0 left-0 ml-10 pb-10 ">
        <Link to="home" className="cursor-pointer">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.6 }}
            src={Logo}
            alt="cupcake icon"
            className="w-14 h-14 object-cover text-orange-600"
          />
        </Link>
      </div>
      <motion.div
        className="flex  mr-100 rounded-full bg-blue shadow-lg  h-10 p-4   items-center gap-20 backdrop-blur-[0.5rem] bg-opacity-80 border-opacity-40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="list-none flex flex-row space-x-4 top-0 right-0  ">
          <motion.li whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.6 }}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.6 }}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.6 }}>
            <Link
              to="restaurants"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              Restaurants
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.6 }}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-orange-600 font-bold cursor-pointer"
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.div>
      <div className="flex flex-row">
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.6 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-33 h-29"
        >
          {/* <FaShoppingCart
            size={32}
            color="#ea580c"
            className="mr-10 cursor-pointer"
          /> */}
          <img
            src={Cart}
            alt=""
            className="w-14 h-14 object-cover text-orange-600"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.6 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-33 h-29 flex flex-row"
        >
          <img src={Profile} alt="" className="w-11 h-11  text-orange-600" />
          {/* <FaUser size={30} color="#ea580c" className="mr-10 cursor-pointer" /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
