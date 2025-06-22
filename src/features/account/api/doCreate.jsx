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
export default function doCreate(
  email,
  username,
  password,
  confirmPassword,
  occupations
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
  };

  axios
    .post(`http://localhost:4000/createAccount`, data, {
      withCredentials: true,
    })
    .then((res) => {
      console.log('response from server', res);
    })
    .catch((error) => {
      console.log('error:', error);
    });
}

function setError(elementId, message) {
  const htmlTag = document.getElementById(`${elementId}`);
  const helperMessage = document.getElementById('helper-message');
  htmlTag.style.borderColor = 'red';
  helperMessage.innerHTML = `${message}`;
}
