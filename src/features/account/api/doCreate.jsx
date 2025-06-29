import axios from 'axios';

/**
 *
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @param {string} confirmPassword
 * @param {object} occupations an array that contains all of the occupations of the user
 *
 *
 */
export default async function doCreate(
  email,
  username,
  password,
  confirmPassword,
  occupations,
  other
) {
  if (!email) {
    setError('create-email-field', 'Missing Email');
    return false;
  }
  if (!username) {
    setError('create-username-field', 'Missing Username');
    return false;
  }
  if (!password) {
    setError('create-password-field', 'Missing Password');
    return false;
  }
  if (!confirmPassword) {
    setError('create-confirm-password-field', 'Missing Confirm Password');
    return false;
  }
  if (!occupations) {
    setError('create-select-occupation-field', 'Missing Occupations');
    return false;
  }
  if (password !== confirmPassword) {
    setError('create-password-field', 'Passwords do not match');
    setError('create-confirm-password-field', 'Passwords do not match');
    return false;
  }

  const data = {
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    occupation: occupations,
    other: other,
  };

  return await axios
    .post(
      `${process.env.HOST}:${process.env.PORT}/${process.env.CREATE}`,
      data,
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log('response from server', res);
      return res;
    })
    .catch((error) => {
      console.log('error:', error);
      return false;
    });
}

function setError(elementId, message) {
  const htmlTag = document.getElementById(`${elementId}`);
  const helperMessage = document.getElementById('helper-message-caForm');
  htmlTag.style.borderColor = 'red';
  helperMessage.innerHTML = message;
  helperMessage.style.display = 'block';
}
