import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "ayush@gmail.com",
    password: "hello",
  });
  // const [isLoggedin, setIsloggedin] = useState(false);
  // const isLoggedin = window.localStorage.setItem("isLoggedin", false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const { email, password } = user;

  const notify = () => toast("This is a toast notification !");

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      console.log(res.data.error);
      if (res.data.success) {
        localStorage.setItem("isLoggedin", true);
        toast.success("Successfull Login!");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        toast.error("Login Failed!");
      }
    } catch (error) {
      console.log(error.res.data);
    }
  };
  return (
    <>
      <header>
        <nav>
          <div className="">
            <div className="flex justify-between h-16 px-10 shadow items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
                  Full Stack Web
                </h1>
              </div>
              <div className="flex space-x-4 items-center">
                <a href="/user/login" className="text-gray-800 text-sm">
                  LOGIN
                </a>
                <a
                  href="#"
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  SIGNUP
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="bg-sky-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-4 bg-sky-100">
                <label htmlFor="username" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-red-500"
                />
                <label htmlFor="remember" className="text-green-900 ml-2">
                  Remember Me
                </label>
              </div>

              <div className="mb-6 text-blue-500">
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-green-500 text-center">
              <a href="#" className="hover:underline">
                Sign up Here/
              </a>
              <a href="/">Home</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
