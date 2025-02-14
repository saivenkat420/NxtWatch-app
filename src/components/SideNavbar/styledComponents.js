import styled from 'styled-components'

export const SideNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 16vw;
  max-width: 17vw;
  min-height: 87.5vh;
  max-height: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`
export const SectionsSocailMeadiaInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  min-height: 87.5vh;
`
export const SectionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
`
export const SectionItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  cursor: pointer;
  background-color: ${props => {
    if (props.selected) {
      if (props.theme === 'dark') {
        return '#383838'
      }
      return '#e2e8f0'
    }
    return 'none'
  }};
  padding: 0px 20px;
`
export const IconName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => {
    if (props.selected) {
      if (props.theme === 'dark') {
        return '#ffffff'
      }
      return '#000000'
    }
    return '#7e858e'
  }}
  font-weight: ${props => (props.selected ? 'bold' : 'none')};
`
export const SocialMeadiaInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  padding-left: 20px;
  gap: 10px;
  min-height: auto;
  position: sticky;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.theme === 'light' ? '#7e858e' : '#ebebeb')};
`
export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const IconImg = styled.img`
  height: 35px;
  width: 35px;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.theme === 'light' ? '#7e858e' : '#ebebeb')};
`
