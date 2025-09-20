import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const route = import.meta.env.VITE_POST_ROUTE;
const newPostRoute = import.meta.env.VITE_NEW_POST;

/**
 *
 * @param {string} name
 * @param {string} address
 * @param {string} city
 * @param {string} state
 * @param {Array} userLongLat
 * @param {number} weekdayTips
 * @param {number} weekendTips
 * @param {number} workenv
 * @param {number} management
 * @param {number} clientele
 * @param {string} title
 * @param {string} comment
 * @returns {Promise<object>} returns object containing returned data from server, false otherwise
 */
export default async function newPost(
  name,
  address,
  city,
  state,
  userLongLat,
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
    !city ||
    !state ||
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
    city: city,
    state: state.state,
    userLongLat: userLongLat,
    weekdayTips: weekdayTips,
    weekendTips: weekendTips,
    workenv: workenv,
    management: management,
    clientele: clientele,
    title: title,
    comment: comment,
  };

  return await axios
    .post(`${host}:${port}/${route}/${newPostRoute}`, data, {
      withCredentials: true,
    })
    .then((res) => {
      if (res) {
        return res;
      } else {
        console.error("Server Error, no response");
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}
