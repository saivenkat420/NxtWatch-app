import themeContext from '../../context/themeContext'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundDetailsContainer,
  Head,
  Para,
} from './styledComponents'

const NotFound = () => (
  <themeContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <>
          <Header />
          <NotFoundContainer theme={theme}>
            <SideNavbar />
            <NotFoundDetailsContainer theme={theme}>
              <NotFoundImg
                src={
                  theme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <Head theme={theme}>Page Not Found</Head>
              <Para theme={theme}>
                we are sorry, the page you requested could not be found.
              </Para>
            </NotFoundDetailsContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </themeContext.Consumer>
)

export default NotFound
