import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { SVG_Academic } from './icons/SVG_Academic'
import { SVG_Contact } from './icons/SVG_Contact'
import { SVG_Home } from './icons/SVG_Home'
import { SVG_User } from './icons/SVG_User'
import { SVG_Projects } from './icons/SVG_Projects'

export const Footer = () => {
  return (
    <Box_Footer>
      <BlurBG />

      <Link id='LinkFix' to='/'>
        <SVG_Home />
      </Link>

      <Link id='LinkFix' to='/about-me'>
        <SVG_User />
      </Link>

      <Link id='LinkFix' to='projects'>
        <SVG_Projects />
      </Link>

      <Link id='LinkFix' to='academic'>
        <SVG_Academic />
      </Link>

      <Link id='LinkFix' to='contact'>
        <SVG_Contact />
      </Link>
    </Box_Footer>
  )
}

const Box_Footer = styled.nav`
  z-index: 3;
  overflow: hidden;
  position: fixed;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5rem;
  width: 4rem;
  padding: 2.5rem 1rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 18px 50px -10px;
  @media (max-width: 720px) {
    bottom: 0;
    right: 0;
    flex-direction: row;
    width: 100%;
    height: 4.5rem;
    padding: 0 2rem;
    border-radius: 0;
  }
`
const Img = styled.img`
  width: fit-content;
  height: 2rem;
  @media (max-width: 720px) {
    height: 2rem;
  }
`
const BlurBG = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgComponentColor};
  backdrop-filter: blur(0.85em);
`
