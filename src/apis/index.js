import axios from "axios";

const BASE_URL = "https://api-nodejs-todolist.herokuapp.com/user";
const tokenStr = localStorage.getItem("token");
export const register = (name, email, password, age) => {
  return axios.post(
    `${BASE_URL}/register`,
    {
      name: name,
      email: email,
      password: password,
      age: age,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const login = (email, password) => {
  return axios.post(
    `${BASE_URL}/login`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const logout = () => {
  return axios.post(`${BASE_URL}/logout`, {
    headers: {
      Authorization: `Bearer ${tokenStr}`,
    },
  });
};

export const getUser = () => {
  return axios.get(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${tokenStr}`,
    },
  });
};
export const updateUser = (name, email, age) => {
  return axios.put(
    `${BASE_URL}/me`,
    {
      name: name,
      email: email,
      age: age,
    },
    {
      headers: {
        Authorization: `Bearer ${tokenStr}`,
      },
    }
  );
};
export const DeleUser = () => {
  return axios.delete(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${tokenStr}`,
    },
  });
};
