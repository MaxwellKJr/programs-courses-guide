import React from "react";
import Link from "next/link";
import { useState } from "react";
import window from "global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.screenY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // window.addEventListener("scroll", changeBackground, true);

  return (
    <nav
      className={
        navbar
          ? "bg-red-500 py-4 absolute w-full z-50"
          : "bg-transparent absolute py-4 w-full z-50"
      }
    >
      <div className="container mx-auto px-2 pb-4 sm:px-4 flex sm:flex-row flex-col justify-center sm:justify-between md:justify-start items-center text-white">
        <Link href="/">
          <a
            className="text-sm md:text-lg font-mono font-extrabold uppercase tracking-wide md:tracking-wider flex flex-row text-center items-center"
            title="Here to guide you in the right direction"
          >
            <img
              src="/UnimaLogo.png"
              alt="University of Malawi Logo"
              className="h-12 mr-2 md:w-auto md:h-full"
            />
            Unima Programs & Courses
          </a>
        </Link>
        <form className="flex-1 lg:flex-none search-form mt-2 md:mt-0 focus:bg-black focus:bg-opacity-90 transition bg-gray-100 p-2 sm:ml-10 bg-opacity-50 rounded flex flex-row justify-between items-center w-full sm:w-5/12">
          <input
            type="text"
            placeholder="Search programs, courses, etc..."
            required
            className="delay-75 ease-in-out search w-full px-2 py-1 mx-2 bg-transparent focus:bg-opacity-100 text-black placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-rounded focus:border-transparent"
          />
          <button>
            <i>
              <FontAwesomeIcon
                icon={faSearch}
                className="h-6 w-6 pr-1 text-black"
              />
            </i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
