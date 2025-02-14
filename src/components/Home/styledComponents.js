import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 87.5vh;
  max-height: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
`

export const PremiumSubscriptionVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flext-start;
  width: 100%;
`
export const PremiumSubscriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flext-start;
  width: 100%;
  min-height: 35vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
`
export const PremiumSubscriptionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const Img = styled.img`
  height: 50px;
  width: 180px;
`
export const Para = styled.p`
  font-family: Roboto;
  color: #212121;
  font-size: 20px;
  width: 95%;
  line-height: 1.5;
`
export const Btn = styled.button`
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 600;
  color: #212121;
  border: 1.5px solid #212121;
  background-color: transparent;
  cursor: pointer;
  width: 50%;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`

export const SearchContainer = styled.div`
  background-color: transparent;
  border: 1px solid
    ${props => (props.theme === 'light' ? '#e2e8f0' : '#909090')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 16px 10px 0px;
  height: 40px;
  cursor: pointer;
`
export const SearchInput = styled.input`
  ::-webkit-search-cancel-button {
    position: relative;
    right: 20px;
  }
  height: 30px;
  width: 200px;
  outline: none;
  border: none;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
  font-family: 'Roboto';
  font-size: 13px;
  padding: 15px;
  flex-grow: 1;
  color: ${props => (props.theme !== 'light' ? '#7e858e' : '#181818')};
`

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 15%;
  border: none;
  cursor: pointer;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#212121'};
  padding: 0px;
  height: 100%;
  border-left: 1px solid
    ${props => (props.theme === 'light' ? '#e2e8f0' : '#909090')}; ;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 10px;
  padding-right: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`
export const VideoDetailsContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const ThumbnailImg = styled.img`
  width: 95%;
`
export const ChannelVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelImg = styled.img`
  width: 40px;
  margin-top: 15px;
`
export const VideoDetailsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
  margin-top: 10px;
  width: 100%;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-size: 15px;
  margin: 5px;
  width: 80%;
`
export const ChannelName = styled(VideoTitle)`
  color: #7e858e;
  font-size: 13px;
`

export const ViewCountVideoDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  margin: 0px;
`
export const ViewCount = styled(VideoTitle)`
  color: #7e858e;
  width: auto;
  font-size: 13px;
`
export const VideoDuration = styled(VideoTitle)`
  color: #7e858e;
  width: auto;
  font-size: 13px;
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
