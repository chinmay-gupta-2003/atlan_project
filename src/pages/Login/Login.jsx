import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "pages/Login/Form";

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      if (!userData.email || !userData.password)
        throw new Error("Email and password are required");

      localStorage.setItem("token", true);
      toast.success("Logged in successfully");

      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/home");
  }, []);

  return <Form {...{ userData, setUserData, login }} />;
}

export default Login;
