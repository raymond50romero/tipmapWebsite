import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const route = import.meta.env.VITE_POST_ROUTE;
const getPosts = import.meta.env.VITE_GET_POSTS;

export function getAllPosts() {
  axios
    .get(`${host}:${port}/${route}/${getPosts}`, { withCredentials: true })
    .then((response) => {
      if (response) {
        console.log("able to get data");
        return response;
      } else {
        console.log("no response");
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
