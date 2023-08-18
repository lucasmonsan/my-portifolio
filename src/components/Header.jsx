import { styled } from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'
import github from '../assets/json/github.json'
import linkedin from '../assets/json/linkedin.json'
import { SVG_Moon } from './icons/SVG_Moon'
import { SVG_Sun } from './icons/SVG_Sun'
import { useContext, useEffect } from 'react'
import { SwitchThemeContext } from '../shared/ThemeContext'

/******************************/

export const Header = () => {
  const { currentTheme, setCurrentTheme } = useContext(SwitchThemeContext)

  useEffect(() => {
    if (localStorage.getItem('currentTheme')) {
      setCurrentTheme(localStorage.getItem('currentTheme'))
    }
  }, [])

  return (
    <Box_Header>
      <Nav>
        {currentTheme === 'light' ? <SVG_Sun /> : <SVG_Moon />}
        <H1>MonSan</H1>
      </Nav>

      <Nav>
        <A target='_blank' href='https://github.com/lucasmonsan'>
          <Player src={github} hover={true} loop={true} autoplay={false} speed={1.5} style={{ height: '2rem' }} />
        </A>

        <A target='_blank' href='https://br.linkedin.com/in/lucasmonsan'>
          <Player
            src={linkedin}
            hover={true}
            loop={true}
            autoplay={false}
            speed={1.5}
            style={{ transform: 'scale(1.75)', paddingTop: '0.25rem' }}
          />
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
  margin-left: 2.25rem;
  font-size: 2em;
`
const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  width: fit-content;
`
const A = styled.a`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  max-height: 3rem;
`
