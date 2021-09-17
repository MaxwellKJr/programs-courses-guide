import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import nookies from "nookies";
import LoginForm from "../components/LoginForm";

const Admin = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/admin/register");
  };

  return (
    <main>
      <Head>
        <title>
          Login or Signup | 🎓 University of Malawi Programs and Courses Guide
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen pt-20 lg:pt-0">
        <div className="container mx-auto flex flex-col justify-center items-center h-full px-4">
          <div className="flex flex-col text-center">
            <LoginForm />
            <button
              onClick={goToRegister}
              className="bg-white text-blue-600 py-2 px-2 font-semibold mt-4 rounded-md uppercase"
            >
              Register
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(
        "https://program-courses-db.herokuapp.com/users/me",
        {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        }
      );
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile",
      },
    };
  }

  return {
    props: {},
  };
};

export default Admin;
