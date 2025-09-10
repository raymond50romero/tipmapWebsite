import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const route = import.meta.env.VITE_CREATE;

/**
 *
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @param {string} confirmPassword
 * @param {object} occupations an array that contains all of the occupations of the user
 *
 * @returns {Promise<Object>} returns server response after creating, false otherwise
 */
export default async function doCreate(
  email,
  username,
  password,
  confirmPassword,
  occupations,
  other,
) {
  if (!email) return false;

  if (!username) return false;
  if (!password) return false;
  if (!confirmPassword) return false;
  if (!occupations) return false;
  if (password !== confirmPassword) return false;

  const data = {
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    occupation: occupations,
    other: other,
  };

  return await axios
    .post(`${host}:${port}/${route}`, data, {
      withCredentials: true,
    })
    .then((res) => {
      console.log("response:", res);
      return res;
    })
    .catch((error) => {
      console.log("error response:", error);
      return error;
    });
}
