import API from "./axios";

export const getUserDetails = () => {
  return API.get("/api/users/me");
};

export const updateUser = (data) => {
  return API.put("/api/users/update", data);
};