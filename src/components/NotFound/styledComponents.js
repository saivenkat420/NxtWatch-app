import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 87.5vh;
  height: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const Head = styled.h1`
  font-family: Roboto;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ebebeb')};
  font-size: 25px;
  font-weight: 500;
  margin: 30px 0px 10px;
`
export const NotFoundDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-grow: 1;
`

export const Para = styled.p`
  font-family: Roboto;
  color: #64748b;
  font-size: 15px;
  margin-top: 0px;
`

export const NotFoundImg = styled.img`
  width: 35%;
`
