import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { DeleUser, getUser, logout } from "../apis";
import Update from "./Update";

export default function Home() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fecthdata = async () => {
      const response = await getUser();
      setUsers(response.data);
    };
    fecthdata();
  }, [editing]);
  const handleClick = async () => {
    const respon = await DeleUser();
    if (respon.satus === 204) {
      alert("Xóa thành công");
      navigate("/");
      localStorage.removeItem("token");
    }
  };
  const handleClickLogout = async () => {
    const respon = await logout();
    if (respon.succses === true) {
      navigate("/login");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Thông tin User</h1>
      {editing ? (
        <Update
          currentUser={users}
          setEditing={setEditing}
          setUsers={setUsers}
        />
      ) : (
        ""
      )}
      <table style={{ marginLeft: "20px" }}>
        <tr>id:{users._id}</tr>
        <tr>Name:{users.name}</tr>
        <tr>Email:{users.email}</tr>
        <tr>Age:{users.age}</tr>
      </table>
      <button
        onClick={() => {
          editing === false ? setEditing(true) : setEditing(false);
        }}
      >
        Update
      </button>
      <button onClick={handleClick}>Xóa</button>
      <button onClick={handleClickLogout}>Đăng xuất</button>
    </div>
  );
}
