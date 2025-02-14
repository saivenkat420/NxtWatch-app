import {Component} from 'react'
import Cookies from 'js-cookie'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {MdVideogameAsset} from 'react-icons/md'
import {CgPlayListAdd} from 'react-icons/cg'
import themeContext from './context/themeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {
    theme: 'light',
    sectionContainer: [
      {
        id: 'HOME',
        sectionIconName: 'Home',
        url: 'https://apis.ccbp.in/videos/all/',
        link: '/',
        sectionIconTagName: IoMdHome,
      },
      {
        id: 'TRENDING',
        sectionIconName: 'Trending',
        url: 'https://apis.ccbp.in/videos/trending',
        link: '/trending',
        sectionIconTagName: FaFire,
      },
      {
        id: 'GAMING',
        sectionIconName: 'Gaming',
        url: 'https://apis.ccbp.in/videos/gaming  ',
        link: '/gaming',
        sectionIconTagName: MdVideogameAsset,
      },
      {
        id: 'SAVEDVIDEOS',
        sectionIconName: 'Saved videos',
        link: '/saved-videos',
        sectionIconTagName: CgPlayListAdd,
      },
    ],
    sectionSelected: '',
    apiStatus: apiStatusConstants.initial,
    videoDetails: '',
    savedVideos: [],
  }

  componentDidMount() {
    this.setState({sectionSelected: this.getSectionSelected()}, this.getVideos)
  }

  getSectionSelected = () => {
    const {sectionContainer} = this.state
    const {location} = this.props
    const {pathname} = location
    return sectionContainer.findIndex(
      eachItem => eachItem.link === pathname,
    ) !== -1
      ? sectionContainer[
          sectionContainer.findIndex(eachItem => eachItem.link === pathname)
        ].id
      : ''
  }

  updateSearchParameter = searchInput =>
    searchInput !== ''
      ? this.setState(
          prevState => ({
            sectionContainer: [
              {
                ...prevState.sectionContainer[0],
                url: `https://apis.ccbp.in/videos/all?search=${searchInput}`,
              },
              ...prevState.sectionContainer.slice(1),
            ],
          }),
          this.getVideos,
        )
      : null

  logOut = () => {
    Cookies.remove('jwt_token')
  }

  changeTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }))
  }

  changeSection = id => {
    if (id === 'undefined') {
      this.setState({sectionSelected: ''})
    } else {
      this.setState({sectionSelected: id}, this.getVideos)
    }
  }

  getFormattedData = data => {
    const {sectionSelected} = this.state
    const camelCaseData = {
      total: data.total,
      videos: data.videos,
    }
    camelCaseData.videos =
      sectionSelected !== 'GAMING'
        ? data.videos.map(eachItem => ({
            id: eachItem.id,
            title: eachItem.title,
            thumbnailUrl: eachItem.thumbnail_url,
            channel: {
              name: eachItem.channel.name,
              profileImageUrl: eachItem.channel.profile_image_url,
            },
            viewCount: eachItem.view_count,
            publishedAt: eachItem.published_at,
          }))
        : data.videos.map(eachItem => ({
            id: eachItem.id,
            title: eachItem.title,
            thumbnailUrl: eachItem.thumbnail_url,
            viewCount: eachItem.view_count,
          }))
    return camelCaseData
  }

  getVideos = async () => {
    const {sectionSelected, sectionContainer} = this.state

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const index = sectionContainer.findIndex(
      eachItem => eachItem.id === sectionSelected,
    )

    if (index !== -1) {
      const jwtToken = Cookies.get('jwt_token')

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(sectionContainer[index].url, options)

      if (response.ok) {
        const fetchedData = await response.json()
        const formattedData = this.getFormattedData(fetchedData)
        this.setState({
          videoDetails: formattedData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 404) {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  tryFetchAgain = () => {
    this.getVideos()
  }

  addVideo = addVideoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, addVideoDetails],
    }))
  }

  removeVideo = removeVideoDetails => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(
        eachItem => eachItem.id !== removeVideoDetails.id,
      ),
    }))
  }

  render() {
    const {
      theme,
      apiStatus,
      sectionSelected,
      videoDetails,
      savedVideos,
    } = this.state
    return (
      <themeContext.Provider
        value={{
          theme,
          savedVideos,
          sectionSelected,
          videoDetails,
          apiStatus,
          logOut: this.logOut,
          changeTheme: this.changeTheme,
          changeSection: this.changeSection,
          updateSearchParameter: this.updateSearchParameter,
          tryFetchAgain: this.tryFetchAgain,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </themeContext.Provider>
    )
  }
}

export default withRouter(App)
