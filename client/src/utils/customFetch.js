import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-server-nbs.vercel.app/api/v1",
  withCredentials: true, // 👈 send cookies
});

export default customFetch;
