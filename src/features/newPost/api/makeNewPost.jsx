import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const newPostRoute = import.meta.env.VITE_NEW_POST;

/**
 * @param {*} mapCenter
 * @param {string} brandId
 * @param {string} mapboxId
 * @param {string} name
 * @param {string} address
 * @param {string} place
 * @param {number} longitude
 * @param {number} latitude
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
  mapCenter,
  brandId,
  mapboxId,
  name,
  address,
  place,
  longitude,
  latitude,
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
    !brandId ||
    !mapboxId ||
    !name ||
    !address ||
    !place ||
    !longitude ||
    !latitude ||
    !weekdayTips ||
    !weekendTips ||
    !workenv ||
    !management ||
    !clientele
  ) {
    return false;
  }

  const data = {
    mapCenter: mapCenter,
    brandId: brandId,
    mapboxId: mapboxId,
    name: name,
    address: address,
    place: place,
    longitude: longitude,
    latitude: latitude,
    userLongLat: userLongLat ? userLongLat : null,
    weekdayTips: weekdayTips,
    weekendTips: weekendTips,
    workenv: workenv,
    management: management,
    clientele: clientele,
    title: title,
    comment: comment,
  };

  return await axios
    .post(`${host}:${port}/${newPostRoute}`, data, {
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
      if (error.status === 403) {
        return 403;
      }
      return false;
    });
}
