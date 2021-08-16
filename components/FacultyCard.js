import React from "react";
import Link from "next/link";

const FacultyCard = ({ faculty }) => {
  const { name, slug } = faculty;
  return (
    <Link href={`/faculties/${slug}`}>
      <a className="flex justify-center items-center faculty text-sm sm:text-xl border-2 border-white hover:border-yellow-200 hover:bg-yellow-200 hover:text-blue-500 font-semibold bg-white text-blue-500 rounded px-4 py-4 md:p-4 lg:p-4 hover:shadow-2xl transition ease-in-out delay-150 transform hover:scale-105">
        {name}
      </a>
    </Link>
  );
};

export default FacultyCard;
