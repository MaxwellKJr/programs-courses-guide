import React from "react";
import Head from "next/head";
import Image from "next/image";

const Developers = () => {
  const developers = [
    {
      id: 1,
      fullName: "Yamikani Kalima",
      imageUrl: "/braziocropped.jpg",
    },
    {
      id: 2,
      fullName: "Elizabeth Kapusa",
      imageUrl: "/Eliza.jpeg",
    },
    {
      id: 3,
      fullName: "George Kamkamba",
      imageUrl: "/FatsaniCropped.jpeg",
    },
    {
      id: 4,
      fullName: "Maxwell Kapezi Jr.",
      imageUrl: "/mjk.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>
          Group 7 Members | 🎓 University of Malawi Programs and Courses Guide
        </title>
      </Head>
      <section className="h-auto lg:h-screen pt-40 pb-20 lg:pt-20 bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500">
        <div className="container mx-auto flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-white text-2xl font-bold">Group 7 Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-10 w-full md:w-auto">
            {developers &&
              developers.map((developer) => {
                return (
                  <div
                    key={developer.id}
                    className="flex flex-col bg-gray-100 bg-opacity-40 p-4 m-2 justify-center items-center h-60 rounded-xl"
                  >
                    <Image
                      src={developer.imageUrl}
                      placeholder="blur"
                      blurDataURL
                      width={112}
                      height={112}
                      className="w-28 h-28 rounded-full"
                    />
                    <h2 className="text-xl font-semibold pt-4">
                      {developer.fullName}
                    </h2>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Developers;
