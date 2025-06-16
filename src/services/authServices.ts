import { login, register } from "../api";

export const loginUser = async (data: any) => {
  const response = await login(data);
  localStorage.setItem("user_token", response.data.token);
  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await register(data);
  localStorage.setItem("user_token", response.data.token);
  return response.data;
};
