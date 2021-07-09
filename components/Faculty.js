import React from "react";
import Link from "next/link";

const FacultyCard = ({ faculty }) => {
  const { name, slug } = faculty;
  return (
    <Link href={`/faculties/${slug}`}>
      <a className="flex flex-col justify-center items-center faculty text-sm sm:text-xl bg-blue-500 font-semibold text-white hover:bg-white hover:text-blue-500 rounded p-2 md:p-4 lg:p-4 hover:shadow-2xl transition ease-in-out delay-150">
        {name}
      </a>
    </Link>
  );
};

export default FacultyCard;
