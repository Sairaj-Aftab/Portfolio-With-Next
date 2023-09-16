"use client";
// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  BiMenu,
  BiX,
  BiHomeHeart,
  BiBookAlt,
  BiEnvelope,
  BiUser,
  BiHighlight,
} from "react-icons/bi";

const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <BiHomeHeart fontSize={30} />,
  },
  {
    id: 2,
    name: "About",
    path: "#",
    icon: <BiUser fontSize={30} />,
  },
  {
    id: 3,
    name: "Projects",
    path: "#",
    icon: <BiBookAlt fontSize={30} />,
  },
  {
    id: 4,
    name: "Testimonial",
    path: "#",
    icon: <BiBookAlt fontSize={30} />,
  },
  {
    id: 5,
    name: "Blogs",
    path: "/blogs",
    icon: <BiHighlight fontSize={30} />,
  },
  {
    id: 6,
    name: "Contact",
    path: "#",
    icon: <BiEnvelope fontSize={30} />,
  },
];

function Header() {
  const [mMenu, setMenu] = useState<boolean>(false);

  return (
    <div className="fixed top-5 left-0 w-full z-50 flex justify-center">
      <div className="hidden md:block">
        {mMenu && (
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="bg_card rounded-xl py-1 px-6 flex gap-10 text-lg font-[500]"
          >
            {menu.map((menu) => (
              <Link
                activeClass="active"
                to={menu.name}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                key={menu.id}
                className="menu_item px-2 rounded-md hover:bg-black"
              >
                <span>{menu.name}</span>
              </Link>
            ))}
          </div>
        )}
        <div className="absolute right-12 lg:right-20 xl:right-32 top-1">
          {!mMenu && (
            <BiMenu
              onClick={() => setMenu(!mMenu)}
              fontSize={30}
              className="cursor-pointer"
            />
          )}
          {mMenu && (
            <BiX
              onClick={() => setMenu(!mMenu)}
              fontSize={30}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="bg_card md:hidden w-[93%] rounded-xl py-1 flex justify-evenly items-center">
        {menu.map((menu) => (
          <Link
            activeClass="active"
            to={menu.name}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            key={menu.id}
            // href={menu.path}
            className="menu_item rounded-md hover:bg-black"
          >
            <div>{menu.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
