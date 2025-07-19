import bg_i from "../components/bg-image.jpg";

export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

// copy this from TMDB - go to moviesList then now playing and select javaScript then copy
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_API_TOKEN,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
export const BACKGROUND_IMAGE = bg_i;
