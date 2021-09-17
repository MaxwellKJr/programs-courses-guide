import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import programs from "../public/programsData.json";
import courses from "../public/coursesData.json";
import faculties from "../public/facultiesData.json";
import departments from "../public/departmentsData.json";

// export async function getStaticProps() {
//   // Program data
//   const res = await fetch(`https://programs-courses-db.herokuapp.com/programs`);
//   const data = await res.json();

//   // const program = data[0];

//   return {
//     props: {
//       programs: data,
//     },
//     revalidate: 1,
//   };
// }

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  let [searchBarStatus, setSearchBarStatus] = useState(false);

  //Searchbar State
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav
      className={
        navbar
          ? "bg-red-500 py-4 absolute w-full z-50"
          : "bg-red absolute py-4 w-full z-50"
      }
    >
      <div className="container mx-auto px-2 pb-4 sm:px-4 flex sm:flex-row flex-col justify-center sm:justify-between md:justify-start items-center text-white">
        <Link href="/">
          <a
            className="text-sm md:text-lg font-mono mr-2 font-extrabold uppercase tracking-wide md:tracking-wider flex flex-row text-center items-center"
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
        {" | "}
        <Link href="/">
          <a
            className="text-sm md:text-lg font-mono ml-2 font-bold uppercase tracking-wide md:tracking-wider flex flex-row text-center items-center"
            title="Here to guide you in the right direction"
          >
            Home
          </a>
        </Link>
        <form className="flex-1 lg:flex-none search-form mt-2 md:mt-0 focus:bg-black focus:bg-opacity-90 transition bg-gray-100 p-2 sm:ml-10 bg-opacity-50 rounded flex flex-row justify-between items-center w-full sm:w-5/12">
          <input
            type="text"
            placeholder="Search programs, courses, etc..."
            required
            onClick={() => setSearchBarStatus(true)}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
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
      <Modal
        isOpen={searchBarStatus}
        onRequestClose={() => setSearchBarStatus(false)}
        // className="mt-22 absolute top-24 left-0 right-0 w-9/12 mx-auto overflow-scroll"
      >
        <div className="bg-white text-blue-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-24">
          {programs
            .filter((val) => {
              if (searchTerm == "") {
                return "";
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div
                  className=""
                  key={key}
                  onClick={() => setSearchBarStatus(false)}
                >
                  <Link href={`/programs/${val.slug}`}>
                    <a className="font-semibold">{val.name}</a>
                  </Link>
                </div>
              );
            })}

          {courses
            .filter((val) => {
              if (searchTerm == "") {
                return "";
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div
                  className=""
                  key={key}
                  onClick={() => setSearchBarStatus(false)}
                >
                  <Link href={`/courses/${val.courseCode}`}>
                    <a className="font-semibold">
                      {val.courseCode} - {val.name}
                    </a>
                  </Link>
                </div>
              );
            })}

          {departments
            .filter((val) => {
              if (searchTerm == "") {
                return "";
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div
                  className=""
                  key={key}
                  onClick={() => setSearchBarStatus(false)}
                >
                  <Link href={`/departments/${val.slug}`}>
                    <a className="font-semibold">{val.name}</a>
                  </Link>
                </div>
              );
            })}

          {faculties
            .filter((val) => {
              if (searchTerm == "") {
                return "";
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div
                  className=""
                  key={key}
                  onClick={() => setSearchBarStatus(false)}
                >
                  <Link href={`/faculties/${val.slug}`}>
                    <a className="font-semibold">{val.name}</a>
                  </Link>
                </div>
              );
            })}
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
