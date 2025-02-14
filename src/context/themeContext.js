import React from 'react'

const themeContext = React.createContext({
  theme: '',
  videoDetails: '',
  apiStatus: '',
  savedVideos: [],
  updateSearchParameter: () => {},
  logOut: () => {},
  changeTheme: () => {},
  changeSection: () => {},
  getVideos: () => {},
  tryFetchAgain: () => {},
})

export default themeContext
