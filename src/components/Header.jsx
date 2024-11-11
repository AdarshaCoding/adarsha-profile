import React from "react";

const Title = () => {
  return (
    <>
      <h1 className="mx-10 font-bold text-2xl cursor-pointer font-serif hover:text-yellow-500">
        Adarsha
      </h1>
    </>
  );
};
const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 shadow-2xl bg-neutral">
      <Title />
      <nav className="mx-10">
        <ul className="flex items-center">
          <li className="ml-10 text-md cursor-pointer font-serif font-bold hover:text-yellow-500">
            About
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold  hover:text-yellow-500">
            Experience
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold  hover:text-yellow-500">
            Work
          </li>
          <li className="ml-10 text-md cursor-pointer font-serif font-bold  hover:text-yellow-500">
            Contact
          </li>
          <button className="ml-10 text-md border p-2 font-serif font-bold rounded-lg  hover:text-yellow-500">
            Resume
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
