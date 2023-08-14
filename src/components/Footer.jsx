import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import home01 from '../assets/icons/home01.svg'
import home02 from '../assets/icons/home02.svg'
import user01 from '../assets/icons/user01.svg'
import user02 from '../assets/icons/user02.svg'
import projects01 from '../assets/icons/projects01.svg'
import projects02 from '../assets/icons/projects02.svg'
import academic01 from '../assets/icons/academic01.svg'
import academic02 from '../assets/icons/academic02.svg'
import contact01 from '../assets/icons/contact01.svg'
import contact02 from '../assets/icons/contact02.svg'

export const Footer = () => {
  const { pathname } = useLocation()
  return (
    <Box_Footer>
      <Link id='LinkFix' to='/'>
        {pathname === '/' ? <Img src={home02} alt='' /> : <Img src={home01} alt='' />}
      </Link>

      <Link id='LinkFix' to='/about-me'>
        {pathname === '/about-me' ? <Img src={user02} alt='' /> : <Img src={user01} alt='' />}
      </Link>

      <Link id='LinkFix' to='projects'>
        {pathname === '/projects' ? <Img src={projects02} alt='' /> : <Img src={projects01} alt='' />}
      </Link>

      <Link id='LinkFix' to='academic'>
        {pathname === '/academic' ? <Img src={academic02} alt='' /> : <Img src={academic01} alt='' />}
      </Link>

      <Link id='LinkFix' to='contact'>
        {pathname === '/contact' ? <Img src={contact02} alt='' /> : <Img src={contact01} alt='' />}
      </Link>
    </Box_Footer>
  )
}

export const Box_Footer = styled.nav`
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
  background-color: ${(props) => props.theme.bgComponentColor};
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
