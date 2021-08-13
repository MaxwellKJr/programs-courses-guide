import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
  //NextJS function to get data from the database
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

  const [facultiesRes, programsRes] = await Promise.all([
    fetch(`https://programs-courses-db.herokuapp.com/faculties?slug=${slug}`),
    fetch(
      `https://programs-courses-db.herokuapp.com/programs?_sort=name:asc&faculty.slug=${slug}`
    ),
  ]);

  const [faculties, programs] = await Promise.all([
    facultiesRes.json(),
    programsRes.json(),
  ]);
  return { props: { faculties, programs }, revalidate: 1 };
}

const Faculty = ({ faculties, programs }) => {
  return (
    <>
      <Head>
        <title>
          {faculties.name} | 🎓 University of Malawi Programs and Courses Guide
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="og:title"
          content={`${faculties.name} | University of Malawi Programs and Courses Guide`}
        />
        <meta
          name="og:description"
          content="Here to guide you in choosing the right courses and route map"
        />
      </Head>
      <section className="flex flex-row justify-center items-center pt-40 sm:pt-28 pb-20 lg:pt-40 text-white h-auto bg-gradient-to-bl from-yellow-400 via-blue-500 to-blue-500">
        <div className="container mx-auto px-4">
          {faculties.map((faculty) => (
            <Link href="/faculties">
              <a
                className="flex flex-row justify-left items-center text-2xl md:text-4xl font-bold border-b-2 w-full md:w-1/2 py-6 hover:text-gray-100"
                title="Back to faculties"
                key={faculty.id}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="h-6 w-6 mr-2 mt-2"
                />
                {faculty.name}
              </a>
            </Link>
          ))}
          {/* programs in the faculty */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {programs.map((program) => (
              <Link key={program.id} href={`/programs/${program.slug}`}>
                <a className="flex flex-row justify-center items-center text-xl text-center font-semibold py-2 sm:px-2 sm:py-4 bg-gray-100 bg-opacity-30 rounded hover:shadow-xl">
                  {program.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
