import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });
  let toTaskPage = () => {
    navigate("/task");
  };
  const login = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/login`,
        logUser
      );
      console.log(result.data);
      setToken(result.data.token);
      setId(result.data.result._id);
      localStorage.setItem("token", result.data.token)
      localStorage.setItem("id", result.data.result._id)
    } catch (error) {
      console.log(error);
    }
  };
  let log = (ev) => {
    ev.preventDefault();

    login();
    toTaskPage()
    // console.log(getUser);
  };
  return (
    <div>
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        onChange={(ev) => setLogUser({ ...logUser, email: ev.target.value })}
      />
      <input
        type="password"
        name="pass"
        id=""
        placeholder="password"
        onChange={(ev) => setLogUser({ ...logUser, password: ev.target.value })}
      />
      <button onClick={log} token={token}>LogIn</button>
    </div>
  );
};

export default Login;
