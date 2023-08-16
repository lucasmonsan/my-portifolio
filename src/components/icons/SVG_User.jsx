import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components'

export const SVG_User = () => {
  const { pathname } = useLocation()

  return pathname === '/about-me' ? (
    <BoxSVG id='Fill' width='64px' height='64px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <circle cx='12' cy='6' r='4'></circle>
        <path d='M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z'></path>
      </g>
    </BoxSVG>
  ) : (
    <BoxSVG id='Stroke' width='64px' height='64px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <circle cx='12' cy='6' r='4' stroke-width='1.5'></circle>
        <path
          d='M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z'
          stroke-width='1.5'
        ></path>
      </g>
    </BoxSVG>
  )
}
const BoxSVG = styled.svg`
  width: fit-content;
  height: 2rem;
  &#Fill {
    fill: ${(props) => props.theme.primaryColor};
  }
  &#Stroke {
    stroke: ${(props) => props.theme.secondaryColor};
  }
  @media (max-width: 720px) {
    height: 2rem;
  }
`
