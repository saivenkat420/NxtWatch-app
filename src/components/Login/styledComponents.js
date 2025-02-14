import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-color: ${props =>
    props.theme === 'light' ? '#f8fafc' : '#181818'};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
  @media (max-width: 767px) {
    padding: 20px;
  }
`

export const PlatformLogo = styled.img`
  width: 80%;
  padding-bottom: 80px;
  @media (max-width: 767px) {
    padding-bottom: 40px;
    width: 75%;
  }
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  line-height: 10px;
  color: ${props => (props.theme === 'light' ? '#94a3b8' : '#f1f5f9')};
  align-self: flex-start;
  padding-bottom: 5px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`

export const Input = styled.input`
  font-size: 14px;
  height: 35px;
  width: 100%;
  border: ${props =>
    props.theme === 'light' ? '1px solid #94a3b8' : '1px solid #f1f5f9'};
  color: ${props => (props.theme === 'light' ? '#475569' : '#f1f5f9')};
  border-radius: 2px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  padding: 8px 16px 8px 16px;
  outline: none;
  background-color: transparent;
  ::placeholder {
    color: ${props => (props.theme === 'light' ? '#64748b' : '#f1f5f9')};
    font-size: 13px;
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
  @media (max-width: 767px) {
    font-size: 12px;
    heihgt: 25px;
  }
`
export const CheckBoxContainer = styled.div`
  align-self: flex-start;
  disply: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  gap: 10px;
`
export const CheckBox = styled.input`
  padding: 5px;
  margin-right: 10px;
`

export const LoginBtn = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
export const WarningText = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
  align-self: flex-start;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
