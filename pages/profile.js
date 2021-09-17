import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";

const Profile = (props) => {
  const router = useRouter();
  const {
    user: { email, username },
  } = props;

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>
          Login or Signup | 🎓 University of Malawi Programs and Courses Guide
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen pt-20 lg:pt-0 text-white">
        <div className="container mx-auto flex flex-col justify-center items-center h-full px-4">
          <div className="flex flex-col text-center">
            <div className="font-bold">Logged in as: {username}</div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(
        "https://programs-courses-db.herokuapp.com/users/me",
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

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default Profile;
