import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const RegisterUser = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", userData);
      router.replace("/profile");
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
      <h3 className="font-bold text-xl pb-8 text-center uppercase">Register</h3>
      <label className="align-left font-semibold">
        Username:
        <input
          required
          className="bg-gray-100 text-blue-700 outline-blue-500 ml-2 p-2"
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <br />
      <label className="align-left font-semibold">
        Email:
        <input
          required
          className="bg-gray-100 text-blue-700 outline-blue-500 ml-2 p-2"
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <br />
      <label className="align-left font-semibold">
        Password:
        <input
          required
          className="bg-gray-100 text-blue-700 outline-blue-500 ml-2 p-2"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <br />
      <button className="bg-blue-700 text-white py-2 px-4 font-semibold rounded-md uppercase">
        Register
      </button>
    </form>
  );
};

export default RegisterUser;
