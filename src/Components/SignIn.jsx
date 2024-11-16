import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "./ui/Header";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

  
    const mockUser = {
      email: "prerak@gmail.com",
      password: "1234",
    };

    if (email === mockUser.email && password === mockUser.password) {

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/mainpage"); 
      }, 3000);
    } else {

      toast.error("Invalid email or password!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">

        <ToastContainer />


        <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8">
          
          <h2 className="text-3xl font-bold text-center text-white">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mt-2">
            Sign in to your account
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-500 bg-gray-800 border-gray-700 rounded focus:ring-green-400"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="text-sm text-green-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-md transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </form>


          <div className="mt-6 bg-gray-800 text-gray-400 text-sm p-4 rounded-md">
            <p>
              <strong>Mock Credentials:</strong>
            </p>
            <p>Email: <span className="text-green-400">prerak@gmail.com</span></p>
            <p>Password: <span className="text-green-400">1234</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
