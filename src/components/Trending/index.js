import {FaFire, FaCircle} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import themeContext from '../../context/themeContext'
import {
  TrendingContainer,
  TrendingBarVideosContainer,
  TrendingBar,
  TrendingIcon,
  TrendingHeading,
  VideosContainer,
  VideoDetailsContainer,
  ThumbnailImg,
  VideoTitle,
  ChannelName,
  ViewCount,
  VideoDuration,
  VideoDetailsSubContainer,
  ViewCountVideoDurationContainer,
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

const Trending = () => (
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
          <Link to="/trending">
            <FailureButton type="button" theme={theme} onClick={retryFetch}>
              Retry
            </FailureButton>
          </Link>
        </FailureViewContainer>
      )

      const renderVideoDetailsView = () => {
        try {
          return (
            <TrendingBarVideosContainer>
              <TrendingBar theme={theme}>
                <TrendingIcon theme={theme}>
                  <FaFire size={25} color="#ff0000" />
                </TrendingIcon>
                <TrendingHeading theme={theme}>Trending</TrendingHeading>
              </TrendingBar>
              <VideosContainer>
                {videoDetails.videos.map(eachItem => (
                  <Link
                    to={`videos/${eachItem.id}`}
                    key={eachItem.id}
                    style={{
                      width: '100%',
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
                      <VideoDetailsSubContainer>
                        <VideoTitle theme={theme}>{eachItem.title}</VideoTitle>
                        <ChannelName theme={theme}>
                          {eachItem.channel.name}
                        </ChannelName>
                        <ViewCountVideoDurationContainer>
                          <ViewCount theme={theme}>
                            {eachItem.viewCount} views
                          </ViewCount>
                          <FaCircle size={5} color="#7e858e" />
                          <VideoDuration theme={theme}>
                            {formatDistanceToNow(new Date(eachItem.publishedAt))
                              .replace('about ', '')
                              .replace('almost ', '')
                              .replace('over', '')}{' '}
                            ago
                          </VideoDuration>
                        </ViewCountVideoDurationContainer>
                      </VideoDetailsSubContainer>
                    </VideoDetailsContainer>
                  </Link>
                ))}
              </VideosContainer>
            </TrendingBarVideosContainer>
          )
        } catch (err) {
          return renderFailureView()
        }
      }

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
          <TrendingContainer theme={theme} data-testid="trending">
            <SideNavbar />
            {renderVideoDetails()}
          </TrendingContainer>
        </>
      )
    }}
  </themeContext.Consumer>
)

export default withRouter(Trending)
