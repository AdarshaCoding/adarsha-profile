import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/app_logo_2.png";

const Title = () => {
  return (
    <>
      <div className="w-12 rounded-lg hover:shadow-custom-orange">
        <Link to={"/"}>
          <img src={appLogo} className=" cursor-pointer" />
        </Link>
      </div>
    </>
  );
};
const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-2xl bg-neutral p-1 px-4 sm:px-6 md:px-8 lg:px-10">
      <Title />
      <nav className="mx-10">
        <ul className="flex items-center">
          <li className="ml-10 text-md cursor-pointer font-serif font-bold hover:text-yellow-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold hover:text-yellow-500">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold  hover:text-yellow-500">
            <Link to={"/experience"}>Experience</Link>
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold  hover:text-yellow-500">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold  hover:text-yellow-500">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <button className="ml-10 text-md border p-1 font-serif font-bold rounded-lg  hover:shadow-custom-orange">
            Resume
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
