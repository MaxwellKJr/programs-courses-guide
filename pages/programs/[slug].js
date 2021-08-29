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
      <section className="flex flex-row justify-center items-center pt-40 sm:pt-28 text-white">
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

            {/* Navigation */}
            <nav className="my-4 md:w-1/2">
              <ul className="flex justify-between flex-wrap">
                <li className="p-2 w-24 cursor-pointer font-bold hover:bg-blue-300">
                  1st Year
                </li>
                <li className="p-2 w-24 cursor-pointer font-bold hover:bg-blue-300">
                  2nd Year
                </li>
                <li className="p-2 w-24 cursor-pointer font-bold hover:bg-blue-300">
                  3rd Year
                </li>
                <li className="p-2 w-24 cursor-pointer font-bold hover:bg-blue-300">
                  4th Year
                </li>
              </ul>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul>
                <h1 className="font-black text-2xl">1st Semester</h1>
                {program.courses.map((course) => {
                  if (course.semester === 1 && course.year == 1) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-xl list-disc md:ml-6 capitalize py-4 border-b-0 border-blue-100 w-full"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <li className="font-normal text-lg list-none">
                          Credit Hours: {course.creditHours}
                        </li>
                        <li className="list-none font-normal">
                          {course.description}
                        </li>
                      </li>
                    );
                  }
                })}
              </ul>
              <ul className="bg-blue-600 p-2 rounded bg-opacity-60">
                <h2 className="font-black text-2xl">2nd Semester</h2>
                {program.courses.map((course) => {
                  if (course.semester === 2 && course.year == 1) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-xl list-disc md:ml-6 capitalize py-4 border-b-0 border-blue-100 w-full"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <li className="font-normal text-lg list-none">
                          Credit Hours: {course.creditHours}
                        </li>
                        <li className="list-none font-normal">
                          {course.description}
                        </li>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
