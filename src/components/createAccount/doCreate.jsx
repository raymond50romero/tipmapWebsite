/**
 *
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @param {string} confirmPassword
 * @param {object} occupations
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
  if (!email || !username || !password || !confirmPassword || !occupations) {
    return answer(1, 'missing parameters');
  }
  if (password !== confirmPassword) {
    return answer(2, 'passwords do not match');
  }

  // TODO call backend to create account
  // for now just console.log to 'create account'
  let message = `sucessfully created account! username: ${username} email: ${email} password: ${password} occupations: ${occupations}`;
  return answer(0, message);
}

function answer(status, message) {
  let obj = { status: status, message: message };
  return obj;
}
