import React, { useState, useContext, useEffect, useRef } from "react";
import LoginContext from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setLogin, setLoginDetails, name, setName } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const hasShownAlert = useRef(false);

  const handleSubmit = () => {
    if (!(email && password)) {
      toast.error("Please enter both email and password");
      return;
    }
    if (login) {
      toast.error("Already logged in");
      return;
    }

    setName();
    setLogin(true);
    if (!hasShownAlert.current) {
      toast.success("Logged in");
      hasShownAlert.current = true;
    }

    setLoginDetails({ userName: email, password: password });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  useEffect(() => {
    if (!login) {
      setName(firstName);
    }
  }, [login]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="flex flex-col p-8 rounded-md shadow-md bg-white w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign up
        </h2>
        <input
          type="text"
          placeholder="Enter a valid firstName"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-semibold py-2 rounded-md mt-6 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          Submit
        </button>
        {login && (
          <p className="mt-4 text-sm text-gray-600 text-center">
            Logged in as <span className="font-semibold">{name}</span>
          </p>
        )}
        {login && (
          <button
            onClick={() => {
              setLogin(false);
              toast.success("Successfully logged out");
              setEmail("");
              setPassword("");
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Signup;
