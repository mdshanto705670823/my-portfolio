import React from "react";
import { Link } from "react-router";
import logo from "../assets/dots.png";
import { FaAlignJustify } from "react-icons/fa";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="bg-transparent shadow-xl z-50 sticky top-0 backdrop-blur-xs w-full">
        <div className="navbar container mx-auto text-white ">
          <div className="navbar-start">
            <Link
              className=" text-2xl font-bold text-orange-400 italic 
               "
              to="/"
            >
              Hasibul
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <FaAlignJustify className="w-6 h-7" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-transparent rounded-box z-1 mt-3 w-[24rem] p-2"
              >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skill">Skills</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
              </ul>
            </div>
          </div>

          <div className="lg:navbar-end md:navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 md:gap-4 lg:gap-12 text-xl">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skill">Skills</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
