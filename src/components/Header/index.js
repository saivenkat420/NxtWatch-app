import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import themeContext from '../../context/themeContext'
import {
  IconContainer,
  PlatformLogo,
  Container,
  ThemeButton,
  ProfileImg,
  LogOutButton,
} from './styledComponents'

const Header = () => (
  <themeContext.Consumer>
    {value => {
      const {theme, logOut, changeTheme} = value
      const LogOutClicked = () => {
        logOut()
      }
      const changeThemeClicked = () => {
        changeTheme()
      }
      return (
        <IconContainer theme={theme}>
          <Link to="/">
            <PlatformLogo
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <Container theme={theme}>
            <ThemeButton
              onClick={changeThemeClicked}
              data-testid="theme"
              type="button"
            >
              {theme === 'light' ? (
                <FaMoon size={20} cursor="pointer" />
              ) : (
                <FiSun color="#ffffff" size={20} cursor="pointer" />
              )}
            </ThemeButton>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              theme={theme}
            />
            <LogOutButton onClick={LogOutClicked} theme={theme}>
              Logout
            </LogOutButton>
          </Container>
        </IconContainer>
      )
    }}
  </themeContext.Consumer>
)

export default Header
