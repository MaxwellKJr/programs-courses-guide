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
      <section className="flex flex-row justify-center items-center pt-40 sm:pt-28 pb-20 text-white">
        <div className="container mx-auto w-full p-4">
          <Link href={`/faculties/${program.faculty.slug}`}>
            <a
              className="flex flex-row justify-left items-center text-xl md:text-2xl font-bold border-b-2 w-full md:w-2/3 py-6 from-white to-transparent hover:opacity-90"
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

            {/* QUERY AND ORDER COURSES BASED ON YEAR AND SEMESTER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="bg-blue-300 bg-opacity-40 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  First Year - 1st Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in first year AND ALSO first semester
                  if (course.semester === 1 && course.year === 1) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-500 bg-opacity-50 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h2 className="uppercase font-black text-2xl">
                  First Year - 2nd Semester
                </h2>
                {program.courses.map((course) => {
                  //Condition to display all courses in first year AND ALSO second semester semester
                  if (course.semester === 2 && course.year === 1) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc md:ml-6 capitalize py-4 md:pr-4 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-500 bg-opacity-50 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  Second Year - 1st Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in second year AND ALSO first semester
                  if (course.semester === 1 && course.year === 2) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-300 bg-opacity-40 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  Second Year - 2ND Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in second year AND ALSO second semester
                  if (course.semester === 2 && course.year === 2) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-300 bg-opacity-40 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  Third Year - 1st Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in third year AND ALSO first semester
                  if (course.semester === 1 && course.year === 3) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-500 bg-opacity-50 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  Third Year - 2ND Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in third year AND ALSO second semester
                  if (course.semester === 2 && course.year === 3) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-500 bg-opacity-50 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  Fourth Year - 1st Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in fourth year AND ALSO first semester
                  if (course.semester === 1 && course.year === 4) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="bg-blue-300 bg-opacity-40 py-4 px-2 md:p-4 rounded shadow-lg transform transition-all ease-in-out hover:scale-100">
                <h1 className="uppercase font-black text-2xl">
                  Fourth Year - 2ND Semester
                </h1>
                {program.courses.map((course) => {
                  //Condition to display all courses in forth year AND ALSO second semester
                  if (course.semester === 2 && course.year === 4) {
                    return (
                      <li
                        key={course.courseCode}
                        className="font-bold text-lg sm:text-xl md:list-disc ml-0 px-0 md:ml-6 capitalize md:pr-4 py-4 border-b-0 border-blue-100 w-full my-2"
                      >
                        {`${course.courseCode} - ${course.name}`} <br />
                        <hr className="my-2 w-1/4" />
                        <ul className="mt-2 sm:mt-2">
                          <li className="font-normal text-lg list-none">
                            <span className="font-bold">Credit Hours :</span>{" "}
                            {course.creditHours}
                          </li>
                          <li className="text-lg font-normal list-none normal-case">
                            {course.description}
                          </li>
                        </ul>
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
