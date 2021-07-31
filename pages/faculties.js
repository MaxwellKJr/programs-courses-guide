import React from "react";
import Head from "next/head";
import FacultyCard from "../components/FacultyCard";

export async function getStaticProps() {
  //get faculties from the API in this case, from strapi facultiesbase

  const res = await fetch(
    "https://programs-courses-db.herokuapp.com/faculties?_sort=name:ASC"
  );

  const data = await res.json();

  return {
    props: {
      faculties: data,
    },
    revalidate: 1,
  };
}

const Faculties = ({ faculties }) => {
  return (
    <main>
      <Head>
        <title>
          Faculties | 🎓 University of Malawi Programs and Courses Guide
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen pt-20 lg:pt-0">
        <div className="container mx-auto flex flex-col justify-center items-center h-full px-4">
          <h1 className=" text-2xl md:text-4xl text-white font-bold uppercase mb-10">
            Choose a faculty
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-center w-full">
            {faculties &&
              faculties.map((faculty) => {
                return <FacultyCard key={faculty.id} faculty={faculty} />;
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faculties;
