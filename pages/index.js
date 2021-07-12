import Head from "next/head";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Home | University of Malawi Programs and Courses Guide</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="og:title"
          content="University of Malawi Programs and Courses Guide"
        />
        <meta
          name="og:description"
          content="Here to guide you in choosing the right courses and route map"
        />
      </Head>
      <HeroSection />
    </main>
  );
};

export default Home;
