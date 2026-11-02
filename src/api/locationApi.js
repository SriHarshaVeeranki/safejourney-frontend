import API from "./axios";

export const sendLocation = (data) => {
  return API.post("/api/location", data);
};