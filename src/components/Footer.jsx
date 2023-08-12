import { styled } from 'styled-components'

export const Footer = () => {


  return (
    <Box_Footer>

    </Box_Footer>
  )
}

export const Box_Footer = styled.footer`
  position: fixed;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-top: solid 3px;
  background-color: white;
  @media (max-width: 720px) {
    border: none;
  }
`