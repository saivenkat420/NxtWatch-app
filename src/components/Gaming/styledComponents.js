import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 87.5vh;
  max-height: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const GamingBarVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GamingBar = styled.div`
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

export const GamingIcon = styled.span`
  text-align: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
  border-radius: 50%;
  padding: 20px;
  margin: 0px 15px 0px 40px;
`

export const GamingHeading = styled.p`
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
`
export const VideoDetailsContainer = styled.li`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ThumbnailImg = styled.img`
  width: 90%;
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-size: 15px;
  font-weight: 600;
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 0px;
  width: 80%;
`
export const VideoViewCount = styled(VideoTitle)`
  color: #475569;
  margin-bottom: 20px;
  margin-top: 5px;
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
