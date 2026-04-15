import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

export async function getUserPosts() {
  return await axios
    .get(`${host}:${port}/getUserPosts`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("response from getting user posts: ", response);
      if (response && response.status === 200) {
        return response.data.posts;
      } else {
        console.log("no response or error when getting user posts");
        return false;
      }
    })
    .catch((error) => {
      console.log("Error fetching user posts:", error);
      return false;
    });
}
