/**
 *
 * @param {string} email
 * @param {string} password
 */
export default function doLogin(email, password) {
  if (!email) {
    setError('login-email-field', 'Missing Email');
    return false;
  }
  if (!password) {
    setError('login-password-field', 'Missing Password');
    return false;
  }

  // TODO connect to backend
  console.log(`login sucessful, email:${email} password:${password}`);
}

function setError(elementId, message) {
  const tagField = document.getElementById(`${elementId}`);
  const helperMessage = document.getElementById(`helper-message`);
  tagField.style.borderColor = 'red';
  helperMessage.innerHTML = `${message}`;
}
