import React from "react";
import Head from "next/head";
import RegisterUser from "../../components/RegisterUser";

const Register = () => {
  return (
    <main>
      <Head>
        <title>
          Admin | 🎓 University of Malawi Programs and Courses Guide
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen pt-20 lg:pt-0">
        <div className="container mx-auto flex flex-row justify-center items-center h-full px-4">
          <RegisterUser />
        </div>
      </section>
    </main>
  );
};

export default Register;
