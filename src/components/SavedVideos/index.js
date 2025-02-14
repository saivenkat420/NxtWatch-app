import {FaFire, FaCircle} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import themeContext from '../../context/themeContext'
import {
  SavedVideosContainer,
  SavedVideosBarVideosContainer,
  SavedVideosBar,
  SavedVideosIcon,
  SavedVideosHeading,
  VideosContainer,
  VideoDetailsContainer,
  ThumbnailImg,
  VideoTitle,
  ChannelName,
  ViewCount,
  VideoDuration,
  VideoDetailsSubContainer,
  ViewCountVideoDurationContainer,
  NoSavedVideosContainer,
  Head,
  Para,
  NoSavedVideoImg,
} from './styledComponents'

const SavedVideos = () => (
  <themeContext.Consumer>
    {value => {
      const {theme, savedVideos} = value

      return (
        <>
          <Header />
          <SavedVideosContainer theme={theme} data-testid="SavedVideos">
            <SideNavbar />
            {savedVideos.length ? (
              <SavedVideosBarVideosContainer>
                <SavedVideosBar theme={theme}>
                  <SavedVideosIcon theme={theme}>
                    <FaFire size={25} color="#ff0000" />
                  </SavedVideosIcon>
                  <SavedVideosHeading theme={theme}>
                    SavedVideos
                  </SavedVideosHeading>
                </SavedVideosBar>
                <VideosContainer>
                  {savedVideos.map(eachItem => (
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
                  ))}
                </VideosContainer>
              </SavedVideosBarVideosContainer>
            ) : (
              <NoSavedVideosContainer>
                <NoSavedVideoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <Head theme={theme}>No saved videos found</Head>
                <Para>You can save your videos while watching them</Para>
              </NoSavedVideosContainer>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </themeContext.Consumer>
)

export default withRouter(SavedVideos)
