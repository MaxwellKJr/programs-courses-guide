import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-bl from-yellow-400 via-blue-500 to-blue-500 min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-tl from-blue-300 via-blue-500 to-blue-400 h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
