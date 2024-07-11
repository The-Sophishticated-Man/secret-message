import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
});

export function registerUser(userData: object) {
  return apiClient.post("/user/register/", userData);
}
export function loginUser(userData: object) {
  return apiClient.post("/user/login", userData);
}
