import axios from "axios";

const API = axios.create({

   baseURL:
   "https://ai-smart-complaint-system.onrender.com"
});

export default API;