import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 87vh;
  height: 100%;
  width: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const ViewCount = styled.p`
  color: #7e858e;
  width: auto;
  font-size: 14px;
  font-family: Roboto;
  margin: 5px 0x;
`
export const VideoDuration = styled.p`
  color: #7e858e;
  width: auto;
  font-size: 13px;
  font-family: Roboto;
  margin: 5px;
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

export const VideoPlayerVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 20px;
  width: 100%;
  height: 100%;
`
export const VideoDesc = styled.p`
  font-family: Roboto;
  font-weight: 15px;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
`
export const VideoActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ViewCountVideoDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin: 0px;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 0px 10px;
  gap: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isLiked ? '#2563eb' : ' #64748b')};
`
export const DislikeButton = styled(LikeButton)`
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled(LikeButton)`
  color: ${props => (props.isSaved ? '#64748b' : '#64748b')};
`
export const HorizontalLine = styled.hr`
  color: #7e858e;
  width: 100%;
  margin: 30px 0px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelImg = styled.img`
  width: 60px;
  margin-right: 15px;
`
export const ChannelName = styled.p`
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-size: 15px;
  margin: 0px;
`
export const VideoDetailsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const SubscriberCount = styled.p`
  color: #7e858e;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0px 20px;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-size: 15px;
  margin: 16px 0px;
  width: 80%;
`
