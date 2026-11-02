import API from "./axios";

export const startJourney = (data) => {
  return API.post("/api/journey/start", data);
};

export const endJourney = (data) => {
  return API.post("/api/journey/end", data);
};