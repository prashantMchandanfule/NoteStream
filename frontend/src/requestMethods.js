import axios from "axios";

const LocalBASE_URL = "http://localhost:8000/api/";
const BASE_URL = "mongodb://localhost:27017";

export const pf = "https://notesharingbackend-ankitkr437.onrender.com/images";

export const publicRequest = axios.create({
  baseURL: LocalBASE_URL,
});

export const userRequest = axios.create({
  baseURL: LocalBASE_URL,
});
