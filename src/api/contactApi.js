import API from "./axios";

export const addContact = (data) => {
  return API.post("/api/contacts/add", data); 
};

export const getContacts = () => {
  return API.get("/api/contacts/getAllMyContacts");
};

// export const getContacts = () => {
//   return API.get("/api/contacts");
// };