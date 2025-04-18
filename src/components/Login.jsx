import React, { useContext, useState } from 'react';
import LoginContext from '../context/LoginContext';
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
const Login = () => {
  const{login, setLogin, hasShownAlert, loginDetails, setLoginDetails, name} = useContext(LoginContext);
  const [detail, setDetail] = useState({
    userName:"",
    password:""
  })
  const handleSubmit = () => {

    if(!(detail.userName && detail.password)){
      toast.error("Please enter both email and password");
      return;
    }
    if(!hasShownAlert.value){
      toast.success(" logged in ")
      hasShownAlert.value = true;
      setLogin(true)
    }
    setLoginDetails(detail);
    setLogin(true)
    useNavigate("/")
    
    
  };

  return (
    <div className='flex flex-col' >
      {
        login?<p className='text-center'>Already logged in as <b>{name}</b></p>:<p></p>
      }
    <form
      onSubmit={handleSubmit}
      className={`min-h-screen flex items-center justify-center bg-gray-100 px-4 ` }
      
      
    >
      
      <div className="flex flex-col gap-6 p-8 rounded-xl shadow-lg bg-white w-full max-w-sm items-center">
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>

        <input
          type="text"
          id="email"
          placeholder="Enter your name"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-yellow-500 placeholder-gray-400"
          autoComplete="username"
          value={detail.userName}
          onChange={(e)=> setDetail({...detail, userName: e.target.value})}
        />

        <input
          type="password"
          placeholder="Enter the password"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-yellow-500 placeholder-gray-400"
          autoComplete="current-password"
          onChange={(e)=> setDetail({...detail, password:e.target.value})}
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md w-full transition-colors duration-200"
          
        >
          Login
        </button>
      </div>
    </form>
    </div>
  );
};

export default Login;
