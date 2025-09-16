import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const route = import.meta.env.FORGOT_PASSWORD;

export default async function sendEmail(email) {
  if (!email) return false;

  const data = { email: email };

  return await axios
    .post(`${host}:${port}/${route}`, data, { withCredentials: true })
    .then((res) => {
      console.log(
        "this is response after sending email on forgot password:",
        res,
      );
      return res;
    })
    .catch((error) => {
      console.log("forgot password error:", error);
      return error;
    });
}
