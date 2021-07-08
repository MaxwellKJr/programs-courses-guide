import React from "react";
import Head from "next/head";
import Link from "next/link";

const Faculties = () => {
  const state = [
    {
      pID: 1,
      name: "School of Education",
      link: "school-of-education",
    },
    {
      pID: 2,
      name: "Faculty of Science",
      link: "faculty-of-science",
    },
    {
      pID: 3,
      name: "Faculty of Social Science",
      link: "faculty-of-social-science",
    },
    {
      pID: 4,
      name: "Faculty of Humanities",
      link: "faculty-of-humanities",
    },
    {
      pID: 5,
      name: "Faculty of Law",
      link: "faculty-of-law",
    },
  ];

  return (
    <main>
      <Head>
        <title>Faculties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500 h-screen pt-28">
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl text-white font-bold uppercase mb-4">
            Choose a faculty
          </h1>
          <div className="faculties grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-center">
            {state.map((faculty) => {
              return (
                <Link href={`/${faculty.link}`} key={faculty.pID}>
                  <a className="flex flex-col justify-center items-center faculty text-xl bg-blue-500 font-semibold text-white hover:bg-white hover:text-blue-500 rounded m-4 p-4 hover:shadow-xl transition ease-in-out delay-150">
                    {faculty.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faculties;
