"use client";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const menu = [
  {
    id: 1,
    name: "Home",
    path: "#",
  },
  {
    id: 2,
    name: "About",
    path: "#",
  },
  {
    id: 3,
    name: "Projects",
    path: "#",
  },
  {
    id: 4,
    name: "Blogs",
    path: "#",
  },
  {
    id: 5,
    name: "Contact",
    path: "#",
  },
];

function Header() {
  const [mMenu, setMenu] = useState(false);

  return (
    <div className="fixed top-5 left-0 w-full z-50 flex justify-center">
      <div className="bg_card rounded-xl py-1 px-5 flex gap-10 text-lg font-[500]">
        {menu.map((menu) => (
          <a
            key={menu.id}
            href={menu.path}
            className="bg-black px-2 rounded-md hover:bg-black"
          >
            <span>{menu.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
