import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky z-[99] bg-brand w-full py-4 px-4 md:px-0 text-white">
      <div className="container flex  text-2xl flex-wrap gap-6 items-center justify-between">
        <div className="">
          <Link className="font-logo" to="/">
            <Logo className="w-32 hover:text-hover" />
          </Link>
        </div>
        <div
          className="md:hidden child:cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose /> : <CiMenuBurger />}
        </div>
        <div
          className={`md:flex ${
            menu ? "flex" : "hidden"
          }  gap-10 text-xl ease-in duration-500 font-light items-center `}
        >
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
