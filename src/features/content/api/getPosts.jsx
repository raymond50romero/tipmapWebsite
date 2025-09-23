import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const route = import.meta.env.VITE_POST_ROUTE;
const getPostsRoute = import.meta.env.VITE_GET_POSTS;

export async function getPosts(
  center,
  zoom,
  northEast = null,
  southWest = null,
) {
  const data = {
    longitude: center[0],
    latitude: center[1],
    zoom: zoom,
    ne: northEast,
    sw: southWest,
  };

  return await axios
    .get(
      `${host}:${port}/${route}/${getPostsRoute}`,
      { params: { data: data } },
      {
        withCredentials: true,
      },
    )
    .then((response) => {
      if (response) {
        console.log("able to get data");
        return response;
      } else {
        console.log("no response");
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
