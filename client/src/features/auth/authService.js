import axios from "axios";

const API_URL = "/api/users/";

// REGISTER
const register = async (user) => {
  const response = await axios.post(API_URL, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LOGIN
const login = async (user) => {
  const response = await axios.post(API_URL + "login", user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LOGOUT
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
