import {FaCircle} from 'react-icons/fa'
import {GoSearch} from 'react-icons/go'
import {IoClose} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import themeContext from '../../context/themeContext'
import {
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  PremiumSubscriptionVideoDetailsContainer,
  PremiumSubscriptionContainer,
  PremiumSubscriptionContentContainer,
  Img,
  Para,
  Btn,
  CloseBtn,
  VideosContainer,
  VideoDetailsContainer,
  ThumbnailImg,
  ChannelImg,
  VideoTitle,
  ChannelName,
  ViewCount,
  VideoDuration,
  VideoDetailsSubContainer,
  ChannelVideoDetailsContainer,
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

class Home extends Component {
  state = {
    searchInput: '',
  }

  closePremiumAdContainer = () => {
    document.getElementById('premiumAdContainer').style.display = 'none'
  }

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <themeContext.Consumer>
        {value => {
          const {
            theme,
            videoDetails,
            apiStatus,
            updateSearchParameter,
            tryFetchAgain,
            changeSection,
          } = value

          const {searchInput} = this.state

          const changeSectionId = () => {
            changeSection()
          }

          const changeSearchQuery = () => {
            if (searchInput !== '') {
              updateSearchParameter(searchInput)
            }
            this.setState({searchInput: ''})
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
              <FailureHead theme={theme}>
                Oops! Something Went Wrong
              </FailureHead>
              <FailurePara theme={theme}>
                We are having some trouble
              </FailurePara>
              <FailurePara theme={theme}>Please try again</FailurePara>
              <Link to="/">
                <FailureButton type="button" theme={theme} onClick={retryFetch}>
                  Retry
                </FailureButton>
              </Link>
            </FailureViewContainer>
          )

          const renderVideoDetailsView = () => {
            try {
              return (
                <VideosContainer>
                  {videoDetails.videos.length ? (
                    videoDetails.videos.map(eachItem => (
                      <Link
                        to={`videos/${eachItem.id}`}
                        key={eachItem.id}
                        style={{width: '33%'}}
                        onClick={changeSectionId}
                      >
                        <VideoDetailsContainer
                          id={eachItem.id}
                          key={eachItem.id}
                        >
                          <ThumbnailImg
                            src={eachItem.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <ChannelVideoDetailsContainer>
                            <ChannelImg
                              src={eachItem.channel.profileImageUrl}
                              alt="channel logo"
                            />
                            <VideoDetailsSubContainer>
                              <VideoTitle theme={theme}>
                                {eachItem.title}
                              </VideoTitle>
                              <ChannelName theme={theme}>
                                {eachItem.channel.name}
                              </ChannelName>
                              <ViewCountVideoDurationContainer>
                                <ViewCount theme={theme}>
                                  {eachItem.viewCount} views
                                </ViewCount>
                                <FaCircle size={5} color="#7e858e" />
                                <VideoDuration theme={theme}>
                                  {formatDistanceToNow(
                                    new Date(eachItem.publishedAt),
                                  )
                                    .replace('about ', '')
                                    .replace('almost ', '')
                                    .replace('over', '')}{' '}
                                  ago
                                </VideoDuration>
                              </ViewCountVideoDurationContainer>
                            </VideoDetailsSubContainer>
                          </ChannelVideoDetailsContainer>
                        </VideoDetailsContainer>
                      </Link>
                    ))
                  ) : (
                    <FailureViewContainer>
                      <FailureImg
                        alt="no videos"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      />
                      <FailureHead theme={theme}>
                        No Search results found
                      </FailureHead>
                      <FailurePara theme={theme}>
                        Try different key words or remove search filter
                      </FailurePara>
                      <FailurePara theme={theme}>Please try again</FailurePara>
                      <Link to="/">
                        <FailureButton
                          type="button"
                          theme={theme}
                          onClick={retryFetch}
                        >
                          Retry
                        </FailureButton>
                      </Link>
                    </FailureViewContainer>
                  )}
                </VideosContainer>
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
              <HomeContainer theme={theme} data-testid="home">
                <SideNavbar />
                <PremiumSubscriptionVideoDetailsContainer>
                  <PremiumSubscriptionContainer
                    id="premiumAdContainer"
                    data-testid="banner"
                  >
                    <PremiumSubscriptionContentContainer>
                      <Img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <Para>Buy Nxt Watch Premium</Para>
                      <Btn>GET IT NOW</Btn>
                    </PremiumSubscriptionContentContainer>
                    <CloseBtn data-testid="close">
                      <IoClose
                        size={20}
                        cursor="pointer"
                        onClick={this.closePremiumAdContainer}
                      />
                    </CloseBtn>
                  </PremiumSubscriptionContainer>
                  <SearchContainer theme={theme}>
                    <SearchInput
                      placeholder="Search"
                      type="search"
                      onChange={this.changeInput}
                      value={searchInput}
                      theme={theme}
                    />
                    <SearchButton
                      theme={theme}
                      type="button"
                      onClick={changeSearchQuery}
                      data-testid="searchButton"
                    >
                      <GoSearch
                        size={15}
                        color={theme === 'light' ? '#7e858e' : '#909090'}
                      />
                    </SearchButton>
                  </SearchContainer>
                  {renderVideoDetails()}
                </PremiumSubscriptionVideoDetailsContainer>
              </HomeContainer>
            </>
          )
        }}
      </themeContext.Consumer>
    )
  }
}

export default Home
