import {Component} from 'react'
import Cookies from 'js-cookie'
import themeContext from '../../context/themeContext'
import {
  MainContainer,
  LoginForm,
  PlatformLogo,
  InputLabel,
  Input,
  LoginBtn,
  CheckBox,
  CheckBoxContainer,
  WarningText,
} from './styledComponents'

class Login extends Component {
  state = {
    password: 'rahul@2021',
    username: 'rahul',
    showPassword: false,
    warningText: '',
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'post',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
      })
      this.setState({warningText: ''})
      history.replace('/')
    }
    this.setState({warningText: `*${data.error_msg}`})
  }

  upadteUsername = event => {
    this.setState({username: event.target.value})
  }

  upadtePassword = event => {
    this.setState({password: event.target.value})
  }

  updateShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {password, username, warningText, showPassword} = this.state
    return (
      <themeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <MainContainer theme={theme}>
              <LoginForm onSubmit={this.submitForm} theme={theme}>
                <PlatformLogo
                  src={
                    theme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputLabel htmlFor="username" theme={theme}>
                  USERNAME
                </InputLabel>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.upadteUsername}
                  required
                  theme={theme}
                  placeholder="Username"
                />
                <InputLabel htmlFor="password" theme={theme}>
                  PASSWORD
                </InputLabel>
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={this.upadtePassword}
                  required
                  theme={theme}
                />
                <CheckBoxContainer>
                  <CheckBox
                    theme={theme}
                    id="showPassword"
                    type="checkbox"
                    onChange={this.updateShowPassword}
                  />
                  <InputLabel theme={theme} htmlFor="showPassword">
                    Show Password
                  </InputLabel>
                </CheckBoxContainer>
                <LoginBtn theme={theme} type="sumbit">
                  Login
                </LoginBtn>
                <WarningText>{warningText}</WarningText>
              </LoginForm>
            </MainContainer>
          )
        }}
      </themeContext.Consumer>
    )
  }
}

export default Login
