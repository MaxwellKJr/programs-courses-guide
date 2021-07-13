import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
  const res = await fetch(
    "https://programs-courses-db.herokuapp.com/faculties?_sort=name:ASC"
  );

  const faculties = await res.json();

  const paths = faculties.map((faculty) => ({
    params: { slug: faculty.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://programs-courses-db.herokuapp.com/faculties?slug=${slug}`
  );
  const data = await res.json();
  const faculty = data[0];

  return {
    props: {
      faculty,
    },
    revalidate: 1,
  };
}

const Faculty = ({ faculty }) => {
  return (
    <section className="flex flex-row justify-center items-center pt-40 pb-20 lg:pt-40 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500">
      <div className="container mx-auto px-4">
        <Link href="/faculties">
          <a
            className="flex flex-row justify-left items-center text-2xl md:text-4xl font-bold border-b-2 w-full md:w-1/2 pt-10 pb-4 hover:text-gray-100"
            title="Back to faculties"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 mr-2 mt-2" />
            {faculty.name}
          </a>
        </Link>
        {/* DEPARTMENTS IN THE FACULTY */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {faculty.programs.map((program) => (
            <Link key={program.id} href={`/programs/${program.slug}`}>
              <a className="flex flex-row justify-center items-center text-xl text-center font-semibold py-2 sm:px-2 sm:py-4 bg-gray-100 bg-opacity-30 rounded hover:shadow-xl">
                {program.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
