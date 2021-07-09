import Head from "next/head";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Home | Programs an Courses App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </main>
  );
};

export default Home;
