import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="py-4 fixed w-full">
      <div className="container mx-auto px-2 pb-4 sm:px-4 flex sm:flex-row flex-col justify-left items-center text-white">
        <Link href="/">
          <a
            className="text-l font-semibold uppercase flex flex-row text-center items-center"
            title="Here to guide you in the right direction"
          >
            <img src="/UnimaLogo.png" alt="University of Malawi Logo" />
            Unima Programs & Courses
          </a>
        </Link>
        <form
          action=""
          className="search-form mt-2 focus:bg-black focus:bg-opacity-90 transition bg-gray-100 p-2 sm:ml-10 bg-opacity-50 rounded flex flex-row justify-between items-center w-full sm:w-5/12"
        >
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
