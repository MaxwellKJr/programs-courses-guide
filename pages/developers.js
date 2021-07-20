import React from "react";

const Developers = () => {
  const developers = [
    {
      id: 1,
      fullName: "Yamikani Kalima",
    },
    {
      id: 2,
      fullName: "Elizabeth Kapusa",
    },
    {
      id: 3,
      fullName: "George Kamkamba",
    },
    {
      id: 4,
      fullName: "Maxwell Kapezi Jr.",
    },
  ];
  return (
    <section className="h-screen pt-20 lg:pt-0">
      <div className="container mx-auto flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-white text-4xl font-bold">Developers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-10 w-full md:w-auto">
          {developers &&
            developers.map((developer) => {
              return (
                <div
                  key={developer.id}
                  className="flex bg-gray-100 p-4 m-2 justify-center items-center"
                >
                  <h2 className="text-xl font-semibold">
                    {developer.fullName}
                  </h2>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Developers;
