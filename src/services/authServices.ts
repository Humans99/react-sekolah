import { login, register } from "../api";

export const loginUser = async (data: any) => {
  const response = await login(data);
  localStorage.setItem("user_token", response.data.token);
  localStorage.setItem("role", response.data.user.role);
  localStorage.setItem("username", response.data.user.username);
  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await register(data);
  localStorage.setItem("user_token", response.data.token);
  return response.data;
};
