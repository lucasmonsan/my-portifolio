import { useContext, useEffect } from 'react'
import { styled } from 'styled-components'
import { SwitchThemeContext } from '../../shared/ThemeContext'
import { animateTransform } from '../../js/Animations'

export const SVG_Sun = () => {
  const { setCurrentTheme } = useContext(SwitchThemeContext)

  const changeTheme = () => {
    const Sun = document.getElementById('Sun')
    animateTransform(Sun, 'scale(0)')
    setTimeout(() => {
      setCurrentTheme('dark')
      localStorage.setItem('currentTheme', 'dark')
    }, 150)
  }

  useEffect(() => {
    const Sun = document.getElementById('Sun')
    Sun.style.transform = 'scale(1)'
  }, [])

  return (
    <BoxSVG id='Sun' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={changeTheme}>
      <g id='svgRepoBgCarrier' strokeWidth='0'></g>
      <g id='svgRepoTracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='svgRepoIconCarrier'>
        <path d='M12 2V3' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M12 21V22' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M22 12L21 12' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M3 12L2 12' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M19.0708 4.92969L18.678 5.32252' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M5.32178 18.6777L4.92894 19.0706' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M19.0708 19.0703L18.678 18.6775' strokeWidth='1.5' strokeLinecap='round'></path>
        <path d='M5.32178 5.32227L4.92894 4.92943' strokeWidth='1.5' strokeLinecap='round'></path>
        <path
          d='M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141'
          strokeWidth='1.5'
          strokeLinecap='round'
        ></path>
      </g>
    </BoxSVG>
  )
}
const BoxSVG = styled.svg`
  user-select: none;
  position: absolute;
  width: fit-content;
  min-width: 36px;
  height: 2.5rem;
  stroke: ${(props) => props.theme.secondaryColor};
  transform: scale(0);
  transition: all 0.15s ease-in-out;
  @media (max-width: 720px) {
    height: 2rem;
  }
`
