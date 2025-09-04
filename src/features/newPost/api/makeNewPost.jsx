import axios from "axios";

export default async function newPost(
  name,
  address,
  weekdayTips,
  weekendTips,
  workenv,
  management,
  clientele,
  title,
  comment,
) {
  if (
    !name ||
    !address ||
    !weekdayTips ||
    !weekendTips ||
    !workenv ||
    !management ||
    !clientele
  ) {
    return false;
  }

  const data = {
    name: name,
    address: address,
    weekdayTips: weekdayTips,
    weekendTips: weekendTips,
    workenv: workenv,
    management: management,
    clientele: clientele,
    title: title,
    comment: comment,
  };

  return await axios
    .post(
      `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/${import.meta.env.VITE_NEW_POST}`,
      data,
      { withCredentials: true },
    )
    .then((res) => {
      if (res) {
        console.log("got res response: ", res);
        return res;
      } else return false;
    })
    .catch((error) => {
      console.log("error: ", error);
      return false;
    });
}
