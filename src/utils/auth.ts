export const isAuthenticated = () => {
  return !!localStorage.getItem("user_token");
};

export const logout = () => {
  localStorage.removeItem("user_token");
};
