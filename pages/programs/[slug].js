import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
  const res = await fetch(
    "https://programs-courses-db.herokuapp.com/programs?_sort=name:ASC"
  );

  const programs = await res.json();

  const paths = programs.map((program) => ({
    params: { slug: program.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://programs-courses-db.herokuapp.com/programs?slug=${slug}`
  );
  const data = await res.json();
  const program = data[0];

  return {
    props: {
      program,
    },
    revalidate: 1,
  };
}

const Program = ({ program }) => {
  return (
    <>
      <Head>
        <title>
          {program.name} | 🎓 University of Malawi Programs and Courses Guide
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="og:title"
          content={`${program.name} | University of Malawi Programs and Courses Guide`}
        />
        <meta
          name="og:description"
          content="Here to guide you in choosing the right courses and route map"
        />
      </Head>
      <section className="flex flex-row justify-center items-center pt-40 sm:pt-28 text-white h-screen bg-gradient-to-bl from-yellow-400 via-blue-500 to-blue-500">
        <div className="container mx-auto w-full p-4">
          <Link href={`/faculties/${program.faculty.slug}`}>
            <a
              className="flex flex-row justify-left items-center text-xl md:text-2xl font-bold border-b-2 w-full md:w-1/2 py-6 from-white to-transparent hover:opacity-90"
              title={`Back to ${program.faculty.name} programs`}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="h-6 w-6 mr-2 mt-1"
              />
              {program.name}
            </a>
          </Link>
          <div className="program-details mt-4">
            <div>
              <p className="text-xl font-semibold">
                Duration: {program.duration} years
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
