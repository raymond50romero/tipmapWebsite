import axios from 'axios';

/**
 *
 * @param {string} emailOrUser
 * @param {string} password
 * @returns {Promise<Object>} returns the response from server, false otherwise
 */
export default async function doLogin(emailOrUser, password) {
  if (!emailOrUser) {
    setError('login-email-field', 'Missing Email');
    return false;
  }
  if (!password) {
    setError('login-password-field', 'Missing Password');
    return false;
  }

  const data = {
    emailOrUser: emailOrUser,
    password: password,
  };

  return await axios
    .post(
      `${process.env.HOST}:${process.env.PORT}/${process.env.LOGIN}`,
      data,
      { withCredentials: true }
    )
    .then((res) => {
      console.log('response from server\n', res);
      return res;
    })
    .catch((error) => {
      console.log('error occured when connecting to backend\n', error);
      return false;
    });
}

function setError(elementId, message) {
  const tagField = document.getElementById(`${elementId}`);
  const helperMessage = document.getElementById(`helper-message`);
  tagField.style.borderColor = 'red';
  helperMessage.innerHTML = `${message}`;
}
