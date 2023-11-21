import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky z-[99] bg-brand w-full py-1 px-4 md:px-0 text-white">
      <div className="container flex  text-2xl flex-wrap gap-6 items-center justify-between">
        <div className="">
          <Link className="font-logo" to="/">
            <Logo className="w-28 hover:text-hover" />
          </Link>
        </div>
        <div
          className="md:hidden child:cursor-pointer"
          onClick={() => setMenu(true)}
        >
          {!menu && <CiMenuBurger />}
        </div>
        <div
          className={`flex md:relative md:h-fit md:w-fit md:z-0 md:opacity-100 flex-col md:flex-row justify-center md:justify-start ${
            menu
              ? "absolute top-0 left-0 right-0 bottom-0 bg-brand h-screen w-screen z-50"
              : "absolute top-0 left-0 right-0 z-[-50] h-96 opacity-0 pointer-events-none"
          }  gap-10 text-xl duration-1000 transition-expand font-light items-center`}
        >
          {menu && (
            <AiOutlineClose
              className="absolute top-8 right-8 text-3xl"
              onClick={() => setMenu(false)}
            />
          )}
          <Link
            className="hover:text-hover"
            to="/"
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-hover"
            to="/about"
            onClick={() => setMenu(false)}
          >
            About
          </Link>
          <Link
            className="hover:text-hover"
            to="/contact"
            onClick={() => setMenu(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
