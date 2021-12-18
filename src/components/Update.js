import React, { useState } from "react";
import { updateUser } from "../apis";

const Update = ({ currentUser, setEditing }) => {
  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
    age: currentUser.age,
  });
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log("value", values);
  const handleClick = async () => {
    const response = await updateUser(values.name, values.email, values.age);
    console.log("user", response);

    setEditing(false);
  };
  return (
    <div>
      <form onClick={(e) => e.preventDefault()}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input name="email" value={values.email} onChange={handleInputChange} />
        <label>Age</label>
        <input name="age" value={values.age} onChange={handleInputChange} />
        <button onClick={handleClick}>Edit</button>
      </form>
    </div>
  );
};

export default Update;
