import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <>
        <div className="flex flex-col gap-8 items-center justify-center h-auto w-auto p-20 bg-white rounded-2xl shadow-black shadow-md">
          <p className="text-center text-3xl">Account Signup</p>
          <input
            type="text"
            placeholder="Enter your Name "
            className="text-sm w-80 h-10 rounded-md p-2 border"
          />
          <input
            type="email"
            placeholder="Enter your Email ID"
            className="text-sm w-80 h-10 rounded-md p-2 border"
          />
          <input
            type="password"
            placeholder="Create a Password"
            className="text-sm w-80 h-10 rounded-md p-2 border"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text-sm w-80 h-10 rounded-md p-2 border"
          />
          <div>
            <select
              className="p-1 border rounded text-sm w-80 h-10"
              defaultValue="user"
            >
              <option value="user">Consumer</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <button className="w-40 bg-green-300 rounded-2xl text-xl p-2">
            SignUp
          </button>
          <p className="text-sm ">
            Already have an account ?&nbsp;
            <Link to="/">
              <button className="text-blue-400">&nbsp;Login </button>
            </Link>
          </p>
        </div>
      </>
    </>
  );
};

export default Signup;
