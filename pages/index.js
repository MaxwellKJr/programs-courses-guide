import Head from "next/head";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Home | 🎓 University of Malawi Programs and Courses Guide</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="og:title"
          content="University of Malawi Programs and Courses Guide"
        />
        <meta
          name="og:description"
          content="Here to guide you in choosing the right courses and route map"
        />
      </Head>
      <div
        role="note"
        className="bg-yellow-200 px-4 py-3 text-center text-sm font-semibold text-blue-900"
      >
        Disclaimer: This website was developed about five years ago as a
        school mini project. Most of the programme and course information may
        be outdated. Please confirm current details with the University of
        Malawi before relying on them.
      </div>
      <HeroSection />
    </main>
  );
};

export default Home;
