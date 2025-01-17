import axios from 'axios';

export default function doLogin(email: string, password: string) {
  if (!email || !password) return false;

  const loginData = {
    email: email,
    password: password,
  };

  return axios
    .post(`${process.env.APP_URL}:${process.env.APP_PORT}/login`, loginData, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else return false;
    })
    .catch((error) => {
      console.log('error while logging in', error);
      return false;
    });
}
