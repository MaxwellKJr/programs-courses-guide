import React from "react";
import Link from "next/link";
import Image from "next/image";
import graduate from "../public/graduate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex flex-row justify-center items-center text-white pt-20 sm:pt-10 h-screen bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col sm:flex-row container mx-auto px-4 sm:px-4 justify-center items-center">
        <div className="hero-content sm:w-full md:w-2/4">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold my-4">
            The University of Malawi Programs and Courses Guide
          </h1>
          <p className="text-md sm:text-xl text-white opacity-85">
            This is the official guide to help you choose the
            right courses and route map for your program of study.
          </p>
          <div className="ctas mt-8">
            <Link href="/faculties">
              <a className="bg-white text-pink-600 hover:text-white border-2 border-white transition delay-75 ease-in-out hover:bg-transparent hover:border-2 hover:border-rounded font-bold p-4 duration-300 md:animate-bounce rounded-full flex flex-row w-full xl:w-2/4 justify-center items-center">
                View Programs & Courses
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mt-0.5 h-5 w-6"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden pl-10 md:block w-1/2 h-full">
          <Image src={graduate} className="w-full h-full" placeholder="blur" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
