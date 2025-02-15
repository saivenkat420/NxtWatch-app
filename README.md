# NxtWatch App

## Introduction

The **NxtWatch App** is a video streaming platform built using React. It allows users to explore videos, watch content, and interact with a user-friendly interface. The app supports dark mode, authentication, and category-based filtering.

---

## What the App Can Do

- **Home Page**:
  - Displays a list of trending videos.
  - Allows users to search for videos.
  - Provides category-based filtering.

- **Video Details Page**:
  - Shows complete information about a video.
  - Allows users to like, dislike, and save videos.

- **Trending Videos**:
  - Highlights popular videos.

- **Saved Videos**:
  - Users can save videos to watch later.

- **User Authentication**:
  - Secure login and authentication system.
  - Users can manage their profile settings.

- **Theme Switcher**:
  - Users can toggle between light and dark mode.

- **Error Handling**:
  - Displays meaningful error messages when API calls fail.

---

## How the Project is Organized

```
nxtwatch-app/
├── public/                    # Static assets (favicon, manifest, images, etc.)
├── src/
│   ├── assets/                # Images, fonts, and static resources
│   ├── components/            # Reusable UI components
│   │   ├── Header/            # Navigation bar and theme switcher
│   │   ├── Sidebar/           # Sidebar menu for navigation
│   │   ├── VideoCard/         # Displays a video preview
│   │   ├── SearchBar/         # Search input for videos
│   │   ├── LikeDislikeButtons/# Like and dislike button component
│   ├── pages/                 # Main application pages
│   │   ├── Home/              # Home page with video listings
│   │   ├── VideoDetails/      # Detailed video page
│   │   ├── Trending/          # Trending videos page
│   │   ├── SavedVideos/       # Saved videos page
│   │   ├── Login/             # User authentication login page
│   │   ├── NotFound/          # 404 error page
│   ├── context/               # Global state management using Context API
│   │   ├── AuthContext.js     # Manages authentication state
│   │   ├── VideoContext.js    # Manages video list and saved videos
│   ├── services/              # API interaction and backend services
│   │   ├── authService.js     # Handles login and authentication
│   │   ├── videoService.js    # Fetches video data from API
│   ├── utils/                 # Utility functions and helpers
│   ├── styles/                # Global styles and themes
│   ├── App.js                 # Main app component, routing, and providers
│   ├── index.js               # Application entry point
├── .env                       # Environment variables
├── .gitignore                 # Files and directories to ignore in Git
├── package.json               # Dependencies and scripts
├── README.md                  # Project documentation
```

---

## How to Install

1. Copy the project:
   ```sh
   git clone https://github.com/your-username/nxtwatch-app.git
   ```

2. Go to the project folder:
   ```sh
   cd nxtwatch-app
   ```

3. Install everything the app needs:
   ```sh
   npm install
   ```

4. Run the app:
   ```sh
   npm start
   ```

---

## How to Use

1. **Home Page**:
   - Browse trending videos.
   - Use the search bar to find specific content.
   - Click on a video to watch.

2. **Video Details Page**:
   - Watch the video and view details.
   - Like, dislike, and save the video.

3. **Trending Videos**:
   - View the most popular videos.

4. **Saved Videos**:
   - Access previously saved content.

5. **Authentication**:
   - Log in to personalize your experience.

6. **Theme Switcher**:
   - Toggle between light and dark mode.

---

## API Information

The app fetches video data from:
```
https://api.example.com/videos
```
- **Method**: GET
- **What You Get**: A list of videos with details like `id`, `title`, `thumbnail`, `channel`, and `views`.

---

## Tools Used

- **React**: For building the app.
- **react-router-dom**: For handling navigation.
- **react-icons**: For adding icons.
- **styled-components**: For styling components.
- **Axios**: For API calls.

---

## Plans for the Future

- Add comments section for videos.
- Implement a recommendation algorithm.
- Improve the UI for better user experience.

---

