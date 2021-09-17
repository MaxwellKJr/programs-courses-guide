import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { ...userData });
      router.push("/profile");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 flex flex-col shadow-2xl"
    >
      <h3 className="font-semibold text-xl pb-8">Login or Register</h3>
      <label className="align-left font-semibold">
        Email:
        <input
          type="text"
          name="identifier"
          required
          placeholder="Enter email"
          className="bg-gray-100 text-blue-500 outline-blue-500 ml-2 p-2"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <br />
      <label className="align-left font-semibold">
        Password:
        <input
          type="password"
          name="password"
          required
          placeholder="Enter password"
          className="bg-gray-100 text-blue-500 outline-blue-500 ml-2 p-2"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <br />
      <button className="bg-blue-700 text-white py-2 px-4 font-semibold rounded-md uppercase">
        Login
      </button>
    </form>
  );
};

export default LoginComponent;
