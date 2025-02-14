import {FaFire} from 'react-icons/fa'
import {IoMdHome} from 'react-icons/io'
import {MdVideogameAsset} from 'react-icons/md'
import {CgPlayListAdd} from 'react-icons/cg'
import {withRouter, Link} from 'react-router-dom'
import themeContext from '../../context/themeContext'
import {
  SideNavbarContainer,
  SectionsSocailMeadiaInfoContainer,
  SectionsContainer,
  SectionItem,
  IconName,
  SocialMediaIcons,
  SocialMeadiaInfoContainer,
  Heading,
  IconImg,
  Para,
} from './styledComponents'

const sectionContainer = [
  {
    id: 'HOME',
    sectionIconName: 'Home',
    url: 'https://apis.ccbp.in/videos/all',
    link: '/',
    sectionIconTagName: IoMdHome,
  },
  {
    id: 'TRENDING',
    sectionIconName: 'Trending',
    url: 'https://apis.ccbp.in/videos/trending',
    link: '/trending',
    sectionIconTagName: FaFire,
  },
  {
    id: 'GAMING',
    sectionIconName: 'Gaming',
    url: 'https://apis.ccbp.in/videos/gaming',
    link: '/gaming',
    sectionIconTagName: MdVideogameAsset,
  },
  {
    id: 'SAVEDVIDEOS',
    sectionIconName: 'Saved videos',
    link: '/saved-videos',
    sectionIconTagName: CgPlayListAdd,
  },
]

const SideNavbar = () => (
  <themeContext.Consumer>
    {value => {
      const {theme, changeSection, sectionSelected} = value
      const changeSectionId = event => {
        changeSection(
          event.target.id === ''
            ? event.target.parentElement.id
            : event.target.id,
        )
      }
      return (
        <SideNavbarContainer theme={theme}>
          <SectionsSocailMeadiaInfoContainer>
            <SectionsContainer>
              {sectionContainer.map(eachItem => (
                <Link
                  to={eachItem.link}
                  style={{width: '100%'}}
                  key={eachItem.id}
                >
                  <SectionItem
                    key={eachItem.id}
                    onClick={changeSectionId}
                    id={eachItem.id}
                    theme={theme}
                    selected={sectionSelected === eachItem.id}
                  >
                    <eachItem.sectionIconTagName
                      size={20}
                      id={eachItem.id}
                      color={
                        eachItem.id === sectionSelected ? '#ff0000' : '#7e858e'
                      }
                    />
                    <IconName
                      selected={sectionSelected === eachItem.id}
                      theme={theme}
                    >
                      {eachItem.sectionIconName}
                    </IconName>
                  </SectionItem>
                </Link>
              ))}
            </SectionsContainer>
            <SocialMeadiaInfoContainer>
              <Heading theme={theme}>Contact Us</Heading>
              <SocialMediaIcons>
                <IconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaIcons>
              <Para theme={theme}>
                Enjoy! Now to see your channels and recommendations!
              </Para>
            </SocialMeadiaInfoContainer>
          </SectionsSocailMeadiaInfoContainer>
        </SideNavbarContainer>
      )
    }}
  </themeContext.Consumer>
)

export default withRouter(SideNavbar)
