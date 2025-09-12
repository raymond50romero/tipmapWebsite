import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const route = import.meta.env.VITE_GET_DATA;

export function getData() {
  axios
    .get(`${host}:${port}/${route}`, { withCredentials: true })
    .then((response) => {
      if (response) {
        console.log("able to get data");
      }
    });
}
