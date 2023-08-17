import { styled } from 'styled-components'
import homepage01 from '../assets/images/homepage01.webp'
import { useEffect, useState } from 'react'
import { animateBorder, animateWidth } from '../js/Animations'

export const HomePage = () => {
  const [effects, setEffects] = useState(true)

  useEffect(() => {
    const Img = document.getElementById('Img')
    const Strong = document.getElementById('Strong')
    const StrongStroke = document.getElementById('StrongStroke')
    const StrongFill01 = document.getElementById('StrongFill01')
    const StrongFill02 = document.getElementById('StrongFill02')
    const P1 = document.getElementById('P1')
    const P2 = document.getElementById('P2')
    const P3 = document.getElementById('P3')
    const P4 = document.getElementById('P4')

    if (effects) {
      const finalState = window.innerWidth > 720 ? '11.25ch' : '6.45ch'

      animateBorder(Strong, 0, 4, 0, 0, () => {
        animateWidth(Strong, '3.25ch', () => {
          animateWidth(Strong, '13.25ch', () => {
            Strong.style.borderRight = 'none'
            animateWidth(StrongStroke, finalState, () => {
              animateWidth(StrongFill01, finalState, () => {
                animateWidth(StrongFill02, finalState, () => {
                  StrongStroke.style.opacity = '0'
                  StrongFill01.style.opacity = '0'
                  setTimeout(() => (P1.style.borderRight = 'solid 4px'), 0)
                  setTimeout(() => (P1.style.width = '19ch'), 500)
                  setTimeout(() => (P1.style.borderRight = 'none'), 1000)
                  setTimeout(() => (P2.style.borderRight = 'solid 4px'), 1000)
                  setTimeout(() => (P2.style.width = '9.5ch'), 1500)
                  setTimeout(() => (P2.style.borderRight = 'none'), 2000)
                  setTimeout(() => (P3.style.borderRight = 'solid 4px'), 2000)
                  setTimeout(() => (P3.style.width = '25.5ch'), 2500)
                  setTimeout(() => (P3.style.borderRight = 'none'), 3000)
                  setTimeout(() => (P4.style.borderRight = 'solid 4px'), 3000)
                  setTimeout(() => (P4.style.width = '28.5ch'), 3500)
                  setTimeout(() => (Img.style.filter = 'grayscale(100%) blur(0)'), 4000)
                })
              })
            })
          })
        })
      })
    } else {
    }
  })

  return (
    <main id='Page'>
      <LeftBox id='LeftBox'>
        <Div>
          <Strong id='Strong'>Olá! Meu nome é</Strong>
        </Div>

        <BoxName>
          <StrongStroke id='StrongStroke'>Lucas Monsan,</StrongStroke>
          <StrongFill01 id='StrongFill01'>Lucas Monsan,</StrongFill01>
          <StrongFill02 id='StrongFill02'>Lucas Monsan,</StrongFill02>
        </BoxName>

        <Div>
          <P id='P1'>eu sou Designer Gráfico,</P>
        </Div>

        <Div>
          <P id='P2'>Designer UI,</P>
        </Div>

        <Div>
          <P id='P3'>e Dev Front-End especialista em</P>
        </Div>

        <Div>
          <P id='P4'>responsividade, performance e SEO!</P>
        </Div>
      </LeftBox>

      <RightBox>
        <Img src={homepage01} alt='' id='Img' />
      </RightBox>
    </main>
  )
}
const LeftBox = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  padding-top: 2rem;
  @media (max-width: 720px) {
    justify-content: center;
    padding-top: 8rem;
  }
  @media (max-width: 420px) {
    justify-content: center;
    padding-top: 6rem;
  }
`
const RightBox = styled.div`
  z-index: 1;
  position: fixed;
  top: 5rem;
  right: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  @media (max-width: 720px) {
    right: 5rem;
  }
`
const Img = styled.img`
  height: 140%;
  filter: grayscale(100%) blur(400px);
  transition: filter 1s ease-in-out;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Strong = styled.strong`
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  margin-right: 0.5rem;
  font-size: 3em;
  font-weight: 600;
  animation: blinking 0.35s infinite step-end alternate;
  @media (max-width: 720px) {
    font-size: 2.5em;
  }
`
const BoxName = styled.div`
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0.5rem 0 1rem 0;
  @media (max-width: 720px) {
    width: 335px;
  }
`
const StrongStroke = styled.strong`
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  padding: 0.5rem 0;
  line-height: 4rem;
  font-size: 6em;
  color: transparent;
  -webkit-text-stroke: 0.15rem ${(props) => props.theme.bgComponentColor};
  animation: blinking 0.5s infinite step-end alternate;
  @media (max-width: 720px) {
    white-space: normal;
    padding: 0;
    font-size: 6em;
    line-height: 5rem;
    text-align: center;
  }
`
const StrongFill01 = styled.strong`
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  padding: 0.5rem 0;
  line-height: 4rem;
  font-size: 6em;
  color: transparent;
  transform: translateY(0.5rem);
  -webkit-text-stroke: 0.1rem ${(props) => props.theme.primaryColor};
  @media (max-width: 720px) {
    white-space: normal;
    padding: 0 0 0 0.15rem;
    text-align: center;
    line-height: 5rem;
    transform: translateY(4.3%);
  }
`
const StrongFill02 = styled.strong`
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  padding: 0.5rem 0;
  line-height: 4rem;
  font-size: 6em;
  color: ${(props) => props.theme.primaryColor};
  transform: translateY(0.5rem);
  -webkit-text-stroke: 0.1rem ${(props) => props.theme.primaryColor};
  @media (max-width: 720px) {
    white-space: normal;
    padding: 0 0 0 0.15rem;
    text-align: center;
    line-height: 5rem;
    transform: translateY(4.3%);
  }
`
const P = styled.p`
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  font-size: 2rem;
  animation: blinking 0.5s infinite step-end alternate;
  @media (max-width: 720px) {
    font-size: 1.5em;
  }
`
