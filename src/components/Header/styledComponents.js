import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 40px;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`
export const PlatformLogo = styled.img`
  width: 180px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

export const ThemeButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const ProfileImg = styled.img`
  width: 30px;
  cursor: pointer;
`

export const LogOutButton = styled.button`
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 600;
  color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ebebeb')};
  border: 2.5px solid
    ${props => (props.theme === 'light' ? '#3b82f6' : '#ebebeb')};
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
`
