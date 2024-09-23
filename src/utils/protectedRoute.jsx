import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  //   const user = null;
  const [protectedData, setProtectedData] = useState(false);

  const apiCall = async () => {
    try {
      const res = await axios.post("http://localhost:3000/user/verifyuser", {
        withCredentials: true,
      });
      console.log(res, "Hello");

      if (res.data.success) {
        setProtectedData(true);
      } else {
        setProtectedData(false);
      }
    } catch (err) {
      //Handle the failure scenario
      setProtectedData(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return protectedData ? <Outlet /> : <Navigate to={"/user/login"} />;
};

export default ProtectedRoute;
