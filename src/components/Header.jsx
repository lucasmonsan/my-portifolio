import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import menu_icon from '../assets/menu_icon.svg'

export const Header = () => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const MenuOptions = document.getElementById('MenuOptions')

    MenuOptions.style.width = menu ? '240px' : '0'
    MenuOptions.style.padding = menu ? '0.5rem 1rem' : '0'
    MenuOptions.style.opacity = menu ? '1' : '0'
  }, [menu])

  return (
    <Box_Header>
      <Logo src={logo} alt='' />
      
      <Img src={menu_icon} alt='' onClick={() => setMenu(!menu)} />
      
      <Nav id='MenuOptions'>
        <A href=''>SOBRE MIM</A>
        <A href=''>SKILLS</A>
        <A href=''>EXPERIÊNCIAS</A>
        <A href=''>PROJETOS</A>
        <A href=''>CONTATO</A>
      </Nav>
    </Box_Header>
  )
}

export const Box_Header = styled.header`
  z-index: 3;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 1rem;
  border-bottom: solid 3px;
  background-color: white;
`
export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
`
export const Logo = styled.img`
  height: 80%;
`
export const Nav = styled.nav`
  position: fixed;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
  width: 15rem;
  border: solid 2px;
  background-color: white;
  transition: all 0.25s ease-in-out;
`
export const Img = styled.img`
  z-index: 3;
  height: 100%;
`
export const A = styled.a`
  width: fit-content;
  font-size: 1.5em;
  font-weight: 400;
  border-left: solid 0;
  transition: all 0.25s ease-in-out;
  &&:hover {
    border-left: solid 24px;
  }
`