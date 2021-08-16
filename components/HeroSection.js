import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import graduate from "../public/graduate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex flex-row justify-center items-center text-white pt-16 pb-10 md:pb-4 sm:pt-10 h-screen bg-gradient-to-bl from-yellow-400 via-blue-500 to-blue-500">
      <div className="flex flex-col sm:flex-row container mx-auto px-4 sm:px-4 justify-start items-center">
        <div className="hero-content sm:w-full md:w-2/4">
          <h1 className="text-2xl md:text-4xl font-bold my-4">
            The University of Malawi Programs and Courses Guide
          </h1>
          <p className="text-md sm:text-xl text-white opacity-85 py-2 md:py-4">
            This is the official guide to help you choose the right courses and
            route map for your program of study.
          </p>
          <div className="ctas mt-8">
            <Link href="/faculties">
              <a className="bg-white text-blue-500 hover:text-white border-2 border-white transition delay-75 ease-in-out hover:bg-transparent hover:border-2 hover:border-rounded font-bold p-4 duration-300 rounded-full flex flex-row w-full xl:w-2/4 justify-center items-center">
                View Programs & Courses
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mt-0.5 h-5 w-6"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block pl-10 w-1/2 h-full">
          <Image
            src={graduate}
            className="w-full h-full hidden"
            placeholder="blur"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default HeroSection;
