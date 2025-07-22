import axios from 'axios';

export default async function sendEmail(email) {
  if (!email) return false;

  const data = { email: email };

  return await axios
    .post(
      `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/${
        import.meta.env.FORGOT_PASSWORD
      }`,
      data,
      { withCredentials: true }
    )
    .then((res) => {
      console.log(
        'this is response after sending email on forgot password:',
        res
      );
      return res;
    })
    .catch((error) => {
      console.log('forgot password error:', error);
      return error;
    });
}
