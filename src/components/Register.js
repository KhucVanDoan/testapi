import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../apis";
import { useNavigate } from "react-router";
export default function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    const reponse = await register(
      value.name,
      value.email,
      value.password,
      value.age
    );
    if (reponse.status === 201) {
      navigate("/login");
    } else {
      alert("thất bạn");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Đăng ký</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input type="text" name="name" onChange={(e) => handleChange(e)} />
        <br />
        <label>email</label>
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <br />
        <label>password</label>
        <input type="text" name="password" onChange={(e) => handleChange(e)} />
        <br />
        <label>age</label>
        <input type="text" name="age" onChange={(e) => handleChange(e)} />
        <br />
        <button onClick={handleClick}>Đăng ký</button>
        <Link to="/login">
          <p>đã có tài khoản</p>
        </Link>
      </form>
    </div>
  );
}
