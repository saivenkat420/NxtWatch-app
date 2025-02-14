import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaCircle} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import themeContext from '../../context/themeContext'
import {
  VideoItemDetailsContainer,
  VideoPlayerVideoDetailsContainer,
  VideoDesc,
  VideoActionsContainer,
  ActionsContainer,
  ViewCountVideoDurationContainer,
  ViewCount,
  VideoDuration,
  FailureViewContainer,
  FailureImg,
  FailureHead,
  FailurePara,
  FailureButton,
  LoadingViewContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelImg,
  ChannelName,
  VideoDetailsSubContainer,
  SubscriberCount,
  VideoTitle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: '',
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getFormattedData = data => {
    const camelCaseData = {
      videoDetails: data.video_details,
    }
    camelCaseData.videoDetails = {
      id: camelCaseData.videoDetails.id,
      title: camelCaseData.videoDetails.title,
      thumbnailUrl: camelCaseData.videoDetails.thumbnail_url,
      videoUrl: camelCaseData.videoDetails.video_url,
      viewCount: camelCaseData.videoDetails.view_count,
      publishedAt: camelCaseData.videoDetails.published_at,
      description: camelCaseData.videoDetails.description,
      channel: {
        name: camelCaseData.videoDetails.channel.name,
        profileImageUrl: camelCaseData.videoDetails.channel.profile_image_url,
        subscriberCount: camelCaseData.videoDetails.channel.subscriber_count,
      },
    }
    return camelCaseData
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        const formattedData = this.getFormattedData(fetchedData)
        this.setState({
          videoDetails: formattedData.videoDetails,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 404) {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch (err) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  tryFetchAgain = () => {
    this.getVideoDetails()
  }

  changeLikeStatus = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isDisliked
        ? !prevState.isDisliked
        : prevState.isDisliked,
    }))
  }

  changeDislikeStatus = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isLiked ? !prevState.isLiked : prevState.isLiked,
    }))
  }

  saveVideo = result => {
    const {isSaved} = this.state
    console.log(isSaved)
    this.setState({
      isSaved: !result,
    })
  }

  render() {
    const {videoDetails} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <themeContext.Consumer>
        {value => {
          const {theme, addVideo, removeVideo, savedVideos} = value

          const result = savedVideos.find(
            eachItem => eachItem.id === videoDetails.id,
          )

          const addOrRemoveVideo = () => {
            this.saveVideo(result)
            if (videoDetails.length === 0) {
              addVideo(videoDetails)
            } else if (result) {
              removeVideo(videoDetails)
            } else {
              addVideo(videoDetails)
            }
          }

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
                We are having some trouble to complete your request
              </FailurePara>
              <FailurePara theme={theme}>Please try again</FailurePara>
              <Link to={`/videos/${id}`}>
                <FailureButton
                  type="button"
                  theme={theme}
                  onClick={this.tryFetchAgain}
                >
                  Retry
                </FailureButton>
              </Link>
            </FailureViewContainer>
          )

          const renderVideoDetailsView = () => {
            const {isLiked, isDisliked} = this.state
            try {
              return (
                <VideoPlayerVideoDetailsContainer>
                  <ReactPlayer url={videoDetails.videoUrl} width="100%" />
                  <VideoTitle theme={theme}>{videoDetails.title}</VideoTitle>
                  <VideoActionsContainer>
                    <ViewCountVideoDurationContainer>
                      <ViewCount theme={theme}>
                        {videoDetails.viewCount} views
                      </ViewCount>
                      <FaCircle size={5} color="#7e858e" />
                      <VideoDuration theme={theme}>
                        {formatDistanceToNow(new Date(videoDetails.publishedAt))
                          .replace('about ', '')
                          .replace('almost ', '')
                          .replace('over', '')}{' '}
                        ago
                      </VideoDuration>
                    </ViewCountVideoDurationContainer>
                    <ActionsContainer>
                      <LikeButton
                        type="button"
                        onClick={this.changeLikeStatus}
                        isLiked={isLiked}
                      >
                        <AiOutlineLike size={25} />
                        {isLiked ? 'Liked' : 'Like'}
                      </LikeButton>
                      <DislikeButton
                        type="button"
                        onClick={this.changeDislikeStatus}
                        isDisliked={isDisliked}
                      >
                        <AiOutlineDislike size={25} />
                        Dislike
                      </DislikeButton>
                      <SaveButton
                        type="button"
                        onClick={addOrRemoveVideo}
                        isSaved={result}
                      >
                        <CgPlayListAdd size={25} />
                        {result ? 'Saved' : 'Save'}
                      </SaveButton>
                    </ActionsContainer>
                  </VideoActionsContainer>
                  <HorizontalLine />
                  <ChannelDetailsContainer>
                    <ChannelImg
                      src={videoDetails.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <VideoDetailsSubContainer>
                      <ChannelName theme={theme}>
                        {videoDetails.channel.name}
                      </ChannelName>
                      <SubscriberCount>
                        {videoDetails.channel.subscriberCount} subscribers
                      </SubscriberCount>
                      <VideoDesc theme={theme}>
                        {videoDetails.description}
                      </VideoDesc>
                    </VideoDetailsSubContainer>
                  </ChannelDetailsContainer>
                </VideoPlayerVideoDetailsContainer>
              )
            } catch (err) {
              return renderFailureView()
            }
          }

          const renderLoadingView = () => (
            <LoadingViewContainer data-testid="loader">
              <Loader type="ThreeDots" color="#0b69ff" height="70" width="70" />
            </LoadingViewContainer>
          )

          const renderVideoDetails = () => {
            const {apiStatus} = this.state
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
              <VideoItemDetailsContainer theme={theme}>
                <SideNavbar />
                {renderVideoDetails()}
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </themeContext.Consumer>
    )
  }
}

export default VideoItemDetails
