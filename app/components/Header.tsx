"use client";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

function Header() {
  const [mMenu, setMenu] = useState(false);

  return (
    <div className="lg:px-5 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-1 px-2 py-1 bg_card">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="lg:text-4xl sm:text-2xl text-xl font-semibold italic">
            Sairaj Aftab
          </h1>
        </div>
        {/* Laptop and desktop menu */}
        <div className="menu hidden sm:flex flex-row gap-10 lg:font-semibold sm:font-medium text-lg">
          <a href="#">
            <span>Home</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>Projects</span>
          </a>
          <a href="#">
            <span>Blogs</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
        {/* Mobile and Tab Menu */}
        <div className="sm:hidden">
          <div className="text-3xl" onClick={() => setMenu(!mMenu)}>
            <BiMenu />
          </div>
          {mMenu && (
            <div className="w-[200px] h-[250px] rounded-bl-full rounded-tl-full flex flex-col gap-1 justify-center items-center fixed top-0 right-0 z-50 bg-[var(--primary-color)] text-lg font-semibold">
              <div
                onClick={() => setMenu(!mMenu)}
                className="text-4xl absolute top-3 right-3 cursor-pointer w-8 h-8 bg-black flex items-center justify-center rounded-full"
              >
                <BiX />
              </div>
              <a href="#">
                <span className="">Home</span>
              </a>
              <a href="#">
                <span className="">About</span>
              </a>
              <a href="#">
                <span className="">Project</span>
              </a>
              <a href="#">
                <span className="">Contact</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
