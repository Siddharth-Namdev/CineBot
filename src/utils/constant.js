export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

// copy this from TMDB - go to moviesList then now playing and select javaScript then copy
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTNjOGU5YmYzYzI0OTBkOWNjOTgzYWQzNWI2NWIzOSIsIm5iZiI6MTc1MTkwODQ1OC40NDYsInN1YiI6IjY4NmMwMDZhMGFkNzY4MTExMGVkNWIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fm_hPhwNqyumLsfyI1KTO_gu_R9Sr6IlNUcZGBZEyxM",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
export const BACKGROUND_IMAGE = process.env.REACT_APP_BACKGROUND_IMAGE;
