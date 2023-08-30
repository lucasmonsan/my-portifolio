import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { SVG_Academic } from './icons/SVG_Academic'
import { SVG_Contact } from './icons/SVG_Contact'
import { SVG_Home } from './icons/SVG_Home'
import { SVG_User } from './icons/SVG_User'
import { SVG_Projects } from './icons/SVG_Projects'
import { goTo } from '../Router'
import { RouterPropsContext } from '../contexts/RouterPropsContext'

export const Footer = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { setTransition } = useContext(RouterPropsContext)

  const handleClick = (nextPath) => {
    setTransition('out')
    setTimeout(() => {
      goTo(pathname, nextPath, navigate)
      setTransition('in')
    }, 500)
  }

  return (
    <Box_Footer>
      <Button onClick={() => handleClick('/')}>
        <SVG_Home />
      </Button>

      <Button onClick={() => handleClick('/about-me')}>
        <SVG_User />
      </Button>

      <Button onClick={() => handleClick('/projects')}>
        <SVG_Projects />
      </Button>

      <Button onClick={() => handleClick('/academic')}>
        <SVG_Academic />
      </Button>

      <Button onClick={() => handleClick('/contact')}>
        <SVG_Contact />
      </Button>
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
const Button = styled.button`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`
