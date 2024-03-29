import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-transparent absolute bottom-0 left-0 w-full text-white mt-10 py-6">
      <div className="container mx-auto flex flex-row lg:flex-col justify-center items-left px-4">
        <p className="text-sm">
          {"<"}Developed by{" "}
          <Link href="/developers">
            <a className="text-yellow-200 hover:text-yellow-400 ease-in-out transition">
              Group 7 Members
            </a>
          </Link>
          {" | "}
          <span className="inline-block">
            {new Date().getFullYear().toString()} &copy; University of Malawi
          </span>
          {" />"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
