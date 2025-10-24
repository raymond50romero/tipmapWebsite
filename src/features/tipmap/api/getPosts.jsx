import axios from "axios";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const getPostsRoute = import.meta.env.VITE_GET_POSTS;

export async function getPosts(center, zoom, northEast, southWest) {
  return await axios
    .get(
      `${host}:${port}/${getPostsRoute}`,
      {
        params: {
          userLong: center[0],
          userLat: center[1],
          zoom: zoom,
          northEastLong: northEast[0],
          northEastLat: northEast[1],
          southWestLong: southWest[0],
          southWestLat: southWest[1],
        },
      },
      {
        withCredentials: true,
      },
    )
    .then((response) => {
      if (response) {
        console.log("able to get data");
        console.log(response);
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
