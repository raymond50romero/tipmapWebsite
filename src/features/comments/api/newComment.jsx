import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const newCommentRoute = import.meta.env.VITE_NEW_COMMENT;

export default async function newComment(post_id, comment) {
  if (!post_id) {
    console.error("no post id found");
    return false;
  }
  if (!comment) {
    console.error("no comment found");
    return false;
  }

  return await axios
    .post(
      `${host}:${port}/${newCommentRoute}`,
      { postId: post_id, commentText: comment },
      { withCredentials: true },
    )
    .then((res) => {
      if (res.status === 201) {
        return res;
      } else {
        console.error("status did not return 201");
        return res;
      }
    })
    .catch((error) => {
      console.error("error when making new comment: ", error);
      return error;
    });
}
