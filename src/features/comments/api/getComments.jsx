import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const getCommentsRoute = import.meta.env.VITE_GET_COMMENTS;

export default async function getComments(post_id) {
  if (!post_id) {
    console.error("no post id found");
    return false;
  }

  return await axios
    .get(`${host}:${port}/${getCommentsRoute}/${post_id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.data.comments;
      } else {
        console.error("did not return status 200");
        return res;
      }
    })
    .catch((error) => {
      console.log("error fetching comments: ", error);
      return error;
    });
}
