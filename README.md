##  name and his meaning 
 - CineBot  -->	Cinema + AI bot for smart search


 # CineBot 🎬

CineBot is a modern, feature-rich web application inspired by Netflix, designed for Browse and discovering movies. It leverages the TMDB API for movie data and features a powerful, AI-driven search capability powered by the Google Gemini API. User authentication is seamlessly handled by Firebase.

**Live Demo:** [hilarious-fudge-bac1eb.netlify.app]

---

## ✨ Features

* **User Authentication:** Secure Sign Up and Sign In functionality using Firebase Authentication.
* **Dynamic Movie Browse:** Fetches and displays lists of movies, including Now Playing, Popular, Top Rated, and Upcoming categories.
* **AI-Powered Search (AI Search):** A unique search page that uses the Google Gemini API to provide intelligent movie recommendations based on natural language queries.
* **Responsive Design:** A fully responsive user interface built with Tailwind CSS, providing a seamless experience on desktops, tablets, and mobile devices.
* **Protected Routes:** Core application pages are protected, accessible only after a user has successfully authenticated.
* **State Management:** Centralized and efficient state management handled by Redux Toolkit.

---



## 🛠️ Tech Stack

* **Frontend:**
    * [React](https://reactjs.org/)
    * [React Router DOM](https://reactrouter.com/) for routing
* **State Management:**
    * [Redux Toolkit](https://redux-toolkit.js.org/)
* **Styling:**
    * [Tailwind CSS](https://tailwindcss.com/)
* **Backend Services & APIs:**
    * [Firebase](https://firebase.google.com/) for User Authentication
    * [TMDB API](https://www.themoviedb.org/documentation/api) for movie data
    * [Google Gemini API](https://ai.google.dev/) for AI-powered search

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine. You will also need API keys from the following services:
* [Firebase](https://firebase.google.com/)
* [TMDB](https://www.themoviedb.org/signup)
* [Google AI (for Gemini)](https://makersuite.google.com/app/apikey)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Siddharth-Namdev/CineBot.git](https://github.com/Siddharth-Namdev/CineBot.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd CineBot
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Set up Firebase:**
    * Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    * Go to Project Settings and copy your Firebase config object.
    * Navigate to `src/utils/firebase.js` in the project and replace the placeholder `firebaseConfig` object with your own.

5.  **Set up Environment Variables:**
    * Create a `.env` file in the root of your project.
    * Add the following environment variables to your `.env` file with your personal keys:

    ```env
    # TMDB API Read Access Token (include "Bearer ")
    REACT_APP_TMDB_API_TOKEN="Bearer your_tmdb_api_token"

    # Google Gemini API Key
    REACT_APP_GEMINI_KEY="your_gemini_api_key"

    # URL for the login page background image
    REACT_APP_BACKGROUND_IMAGE="your_background_image_url"
    ```

6.  **Run the application:**
    ```sh
    npm start
    ```
    The app will be available at `http://localhost:3000`.

---

## 👤 Author

**Siddharth Namdev**
* GitHub: [@Siddharth-Namdev](https://github.com/Siddharth-Namdev)
* LinkedIn: [Your LinkedIn Profile URL]

---

## 🙏 Acknowledgements

* Thanks to [TMDB](https://www.themoviedb.org/) for providing the comprehensive movie API.
* Thanks to the teams behind [Firebase](https://firebase.google.com/) and [Google Gemini](https://ai.google.dev/) for their powerful and accessible services.
* This project was inspired by the UI of [Netflix](https://www.netflix.com).