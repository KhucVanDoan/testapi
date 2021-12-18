import React, { useState } from "react";
import { useNavigate } from "react-router";

import { login } from "../apis";

export default function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    const response = await login(value.email, value.password);
    console.log(response.data.token);
    localStorage.setItem("token", response.data.token);
    if (response.status === 200) {
      navigate("/home");
    } else {
      setValue("");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Đăng Nhập</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>email</label>
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <br />
        <label>password</label>
        <input type="text" name="password" onChange={(e) => handleChange(e)} />
        <br />

        <button onClick={handleClick}>Đăng Nhập</button>
      </form>
    </div>
  );
}
