import { styled } from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'
import github from '../assets/animations/github.json'
import linkedin from '../assets/animations/linkedin.json'

/******************************/

export const Header = () => {
  return (
    <Box_Header>
      <Nav>
        <H1>MonSan</H1>
      </Nav>

      <Nav>
        <A href=''>
          <Player autoplay={false} loop={true} hover={true} speed={1.5} src={github} style={{ height: '2.75rem' }} />
        </A>

        <A href=''>
          <Player autoplay={false} loop={true} hover={true} speed={1.5} src={linkedin} style={{ transform: 'scale(2)', paddingTop: '0.25rem' }} />
        </A>
      </Nav>
    </Box_Header>
  )
}

/*********************************/

const Box_Header = styled.header`
  z-index: 3;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
`
const H1 = styled.h1`
  font-size: 2em;
`
const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  width: fit-content;
`
const A = styled.a`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  max-height: 3rem;
`
