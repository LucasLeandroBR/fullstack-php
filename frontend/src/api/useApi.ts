import axios from "axios";

const development = import.meta.env.VITE_ENV === "development";

export function useApi() {
  // Here we set the base URL for all requests made to the api
  return axios.create({
    baseURL: development
      ? (import.meta.env.VITE_API_BASE_URL as string)
      : "http://localhost:8000/api",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
}
