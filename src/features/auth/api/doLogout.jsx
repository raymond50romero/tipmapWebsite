import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const logoutRoute = import.meta.env.VITE_LOGOUT;

export default async function doLogout() {
  const data = null;
  return await axios
    .post(`${host}:${port}/${logoutRoute}`, data, {
      withCredentials: true,
    })
    .then((res) => {
      if (res) {
        console.log("logout on backend successfull");
        return res;
      } else {
        console.log("no response when loging out");
        return false;
      }
    })
    .catch((error) => {
      console.log("error when loggin out: ", error);
      return false;
    });
}
