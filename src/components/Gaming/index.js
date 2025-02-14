import {MdVideogameAsset} from 'react-icons/md'
import {Link, withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import themeContext from '../../context/themeContext'
import {
  GamingContainer,
  GamingBarVideosContainer,
  GamingBar,
  GamingIcon,
  GamingHeading,
  VideosContainer,
  VideoDetailsContainer,
  ThumbnailImg,
  VideoTitle,
  VideoViewCount,
  LoadingViewContainer,
  FailureViewContainer,
  FailureImg,
  FailureHead,
  FailurePara,
  FailureButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Gaming = () => (
  <themeContext.Consumer>
    {value => {
      const {
        theme,
        videoDetails,
        apiStatus,
        tryFetchAgain,
        changeSection,
      } = value

      const changeSectionId = () => {
        changeSection()
      }

      const retryFetch = () => {
        tryFetchAgain()
      }

      const renderLoadingView = () => (
        <LoadingViewContainer data-testid="loader">
          <Loader type="ThreeDots" color="#0b69ff" height="70" width="70" />
        </LoadingViewContainer>
      )

      const renderFailureView = () => (
        <FailureViewContainer>
          <FailureImg
            alt="failure view"
            src={
              theme === 'light'
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
          />
          <FailureHead theme={theme}>Oops! Something Went Wrong</FailureHead>
          <FailurePara theme={theme}>
            We are having some trouble to complete your request
          </FailurePara>
          <FailurePara theme={theme}>Please try again</FailurePara>
          <Link to="/gaming">
            <FailureButton type="button" theme={theme} onClick={retryFetch}>
              Retry
            </FailureButton>
          </Link>
        </FailureViewContainer>
      )

      const renderVideoDetailsView = () => (
        <GamingBarVideosContainer>
          <GamingBar theme={theme}>
            <GamingIcon theme={theme}>
              <MdVideogameAsset size={25} color="#ff0000" />
            </GamingIcon>
            <GamingHeading theme={theme}>Gaming</GamingHeading>
          </GamingBar>
          <VideosContainer>
            {videoDetails.videos.map(eachItem => (
              <Link
                to={`videos/${eachItem.id}`}
                key={eachItem.id}
                style={{
                  width: '33%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={changeSectionId}
              >
                <VideoDetailsContainer id={eachItem.id} key={eachItem.id}>
                  <ThumbnailImg
                    src={eachItem.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoTitle theme={theme}>{eachItem.title}</VideoTitle>
                  <VideoViewCount theme={theme}>
                    {eachItem.viewCount} Watching Worldwide
                  </VideoViewCount>
                </VideoDetailsContainer>
              </Link>
            ))}
          </VideosContainer>
        </GamingBarVideosContainer>
      )

      const renderVideoDetails = () => {
        switch (apiStatus) {
          case apiStatusConstants.success:
            return renderVideoDetailsView()
          case apiStatusConstants.failure:
            return renderFailureView()
          case apiStatusConstants.inProgress:
            return renderLoadingView()
          default:
            return null
        }
      }

      return (
        <>
          <Header />
          <GamingContainer theme={theme} data-testid="Gaming">
            <SideNavbar />
            {renderVideoDetails()}
          </GamingContainer>
        </>
      )
    }}
  </themeContext.Consumer>
)

export default withRouter(Gaming)
