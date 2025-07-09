import axios from 'axios';

/**
 *
 * @param {string} emailOrUser
 * @param {string} password
 * @returns {Promise<Object>} returns the response from server
 */
export default async function doLogin(emailOrUser, password) {
  if (!emailOrUser) {
    return false;
  }
  if (!password) {
    return false;
  }

  const data = {
    emailOrUser: emailOrUser,
    password: password,
  };

  return await axios
    .post(
      `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/${
        import.meta.env.VITE_LOGIN
      }`,
      data,
      { withCredentials: true }
    )
    .then((res) => {
      console.log('response:', res);
      return res;
    })
    .catch((error) => {
      console.log('error response:', error);
      return error;
    });
}
