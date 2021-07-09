import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500 h-screen">
      <Navbar />
      <div className="bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500 h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
