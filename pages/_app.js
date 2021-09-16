import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-bl from-blue-300 via-blue-500 to-blue-400 min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-tl from-blue-300 via-blue-500 to-blue-400 h-full">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default MyApp;
