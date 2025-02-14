import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 87.5vh;
  max-height: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const TrendingBarVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '#cccccc' : '#212121'};
  padding: 15px;
  margin-bottom: 30px;
  width: 100%;
`

export const TrendingIcon = styled.span`
  text-align: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
  border-radius: 50%;
  padding: 20px;
  margin: 0px 15px 0px 40px;
`

export const TrendingHeading = styled.p`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 10px;
  padding-right: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const VideoDetailsContainer = styled.li`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 50px 100px;
  margin-left: ;
`

export const ThumbnailImg = styled.img`
  width: 40%;
`

export const VideoDetailsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
  align-self: flex-start;
  flex-grow: 1;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-size: 20px;
  font-weight: bold;
  margin: 0px 10px 15px 10px;
  width: 80%;
`
export const ChannelName = styled(VideoTitle)`
  color: #7e858e;
  font-size: 15px;
  font-weight: normal;
`

export const ViewCountVideoDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 0px;
  margin-left: 10px;
`
export const ViewCount = styled(VideoTitle)`
  color: #7e858e;
  width: auto;
  font-size: 15px;
  font-weight: normal;
  margin: 0px;
`
export const VideoDuration = styled(VideoTitle)`
  color: #7e858e;
  width: auto;
  font-size: 15px;
  font-weight: normal;
  margin: 0px;
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  min-height: 80vh;
  max-height: 100%;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  min-height: 80vh;
  max-height: 100%;
  width: 100%;
`
export const FailureImg = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
`
export const FailureHead = styled.h1`
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`
export const FailurePara = styled.p`
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`
export const FailureButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 30px;
  padding-right: 30px;
  outline: none;
  cursor: pointer;
`
