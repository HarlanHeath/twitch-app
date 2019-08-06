import axios from "axios";

let api = axios.create({
  headers: {
    //client id from twitch goes here
  }
});

export default api;
