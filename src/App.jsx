import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import axios from "axios";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./utils/protectedRoute";

function App() {
  const [protectedData, setProtectedData] = useState("");

  // const getProtectedData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:3000/user/verifyuser",
  //       {
  //         withCredentials: true, // Ensure cookies (JWT) are sent with the request
  //       }
  //     );
  //     setProtectedData(response.data.message);
  //   } catch (error) {
  //     setProtectedData("Access denied. You need to log in.");
  //   }
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="user/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="user/verifyuser" element={<UserProfile />} />
        </Route>

        {/* <button onClick={getProtectedData}>Access Protected Data</button>
        {protectedData && <p>{protectedData}</p>} */}
        {/* <UserProfile /> */}
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
