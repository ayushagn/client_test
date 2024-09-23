import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const HomePage = () => {
  const isloggedin = window.localStorage.getItem("isLoggedin") === "true";
  console.log(isloggedin);
  console.log(typeof isloggedin);

  const handleLogout = () => {
    window.localStorage.setItem("isLoggedin", false);
    toast.success("You have been logged out!");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  // const getProtectedData = async () => {
  //   try {
  //     const response = axios.get("http://localhost:3000/user/verifyuser", {
  //       withCredentials: true, // Ensure cookies (JWT) are sent with the request
  //     });
  //     console.log(response);
  //     setProtectedData(response.data.message);
  //   } catch (error) {
  //     setProtectedData("Access denied. You need to log in.");
  //   }
  // };

  return (
    <div>
      <header>
        <nav>
          <div className="">
            <div className="flex justify-between h-16 px-10 shadow items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
                  Full Stack Web
                </h1>
              </div>

              {!isloggedin && (
                <div className="flex space-x-4 items-center">
                  <a href="user/login" className="text-gray-800 text-sm">
                    LOGIN
                  </a>
                  <a
                    href="#"
                    className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                  >
                    SIGNUP
                  </a>
                </div>
              )}
              {isloggedin && (
                <div className="flex space-x-4 items-center">
                  <a href="user/verifyuser" className="text-gray-800 text-sm">
                    PROFILE
                  </a>
                  {/* {protectedData && <p>{protectedData}</p>} */}
                  <a
                    onClick={handleLogout}
                    className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                  >
                    LOGOUT
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div className="bg-sky-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          {isloggedin && (
            <h1 className="bungee-tint-regular">Welcome User!!!</h1>
          )}
          {!isloggedin && <h1>This is HomePage!!!</h1>}

          <img
            src="https://img.freepik.com/free-vector/hand-drawn-picasso-style-illustration_23-2149602592.jpg?t=st=1726690525~exp=1726694125~hmac=9bb81cb16cc5d053c9327db667425589f27df5e48a6ccf7c16f5c72d504a5fbf&w=826"
            alt="Placeholder Image"
            className="object-cover w- h-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
