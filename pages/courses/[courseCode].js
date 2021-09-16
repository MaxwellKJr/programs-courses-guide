// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import Link from "next/link";
// import Head from "next/head";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// export async function getStaticPaths() {
//   const res = await fetch(
//     "https://programs-courses-db.herokuapp.com/courses?_sort=name:ASC"
//   );

//   const courses = await res.json();

//   const paths = courses.map((course) => ({
//     params: { courseCode: course.courseCode },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { courseCode } = params;

//   // Courses data
//   const resCourses = await fetch(
//     `https://programs-courses-db.herokuapp.com/courses?_sort=name:ASC&courseCode=${courseCode}`
//   );
//   const coursesData = await resCourses.json();

//   // // Program data
//   // const res = await fetch(
//   //   `https://programs-courses-db.herokuapp.com/programs?_sort=name:ASC`
//   // );
//   // const data = await res.json();

//   // // Departments data
//   // const resDepartments = await fetch(
//   //   "https://programs-courses-db.herokuapp.com/departments?_sort=name:ASC"
//   // );
//   // const departmentsData = await resDepartments.json();

//   // // Corequisites data
//   // const resCorequisites = await fetch(
//   //   "https://programs-courses-db.herokuapp.com/corequisites?_sort=name:ASC"
//   // );
//   // const corequisitesData = await resCorequisites.json();

//   // // Prerequisites data
//   // const resPrerequisites = await fetch(
//   //   "https://programs-courses-db.herokuapp.com/prerequisites?_sort=name:ASC"
//   // );
//   // const prerequisitesData = await resPrerequisites.json();

//   // const program = data[0];

//   return {
//     props: {
//       course: coursesData[0],
//       // departments: departmentsData,
//       // corequisites: corequisitesData,
//       // prerequisites: prerequisitesData,
//     },
//     revalidate: 1,
//   };
// }

// const Course = ({ course }) => {
//   return (
//     <>
//       <Head>
//         <title>
//           {course.name} | 🎓 University of Malawi Programs and Courses Guide
//         </title>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="og:title"
//           content={`${course.name} | University of Malawi Programs and Courses Guide`}
//         />
//         <meta
//           name="og:description"
//           content="Here to guide you in choosing the right courses and route map"
//         />
//       </Head>
//       <section className="flex flex-row justify-center items-center pt-40 sm:pt-28 pb-20 text-white">
//         <div className="container mx-auto w-full p-4">
//           <div>
//             {course.name}
//             <ul className="mt-2 sm:mt-2">
//               <li className="font-normal text-lg list-none">
//                 <span className="font-bold">Credit Hours :</span>{" "}
//                 {course.creditHours}
//               </li>
//               <li className="text-lg font-normal list-none normal-case">
//                 {course.description}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Course;
