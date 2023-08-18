import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import { animateBorder, animateFilter, animateTransform, animateWidth } from '../js/Animations'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const [start, setStart] = useState(true)

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
    const CV = document.getElementById('CV')
    const Contact = document.getElementById('Contact')

    if (start) {
      const finalState = window.innerWidth > 720 ? '11.25ch' : '6.45ch'

      Img.style.opacity = '0.85'
      animateBorder(Strong, 0, 4, 0, 0, () => {
        animateWidth(Strong, '3.25ch', () => {
          animateWidth(Strong, '13.25ch', () => {
            Strong.style.borderRight = 'none'
            setStart(false)
            animateWidth(StrongStroke, finalState, () => {
              animateWidth(StrongFill01, finalState, () => {
                animateWidth(StrongFill02, finalState, () => {
                  StrongStroke.style.opacity = '0'
                  StrongFill01.style.opacity = '0'
                  P1.style.borderRight = 'solid 4px'
                  animateWidth(P1, '19ch', () => {
                    P1.style.borderRight = 'none'
                    P2.style.borderRight = 'solid 4px'
                    animateWidth(P2, '9.5ch', () => {
                      P2.style.borderRight = 'none'
                      P3.style.borderRight = 'solid 4px'
                      animateWidth(P3, '25.5ch', () => {
                        P3.style.borderRight = 'none'
                        P4.style.borderRight = 'solid 4px'
                        animateWidth(P4, '28.5ch', () => {
                          P4.style.width = '28.5ch'
                          animateTransform(CV, 'scale(1)', () => {
                            animateTransform(Contact, 'scale(1)', () => {
                              animateFilter(Img, 'grayscale(100%) blur(0px)', () => {
                                Strong.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.75)'
                                StrongFill02.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.75)'
                                P1.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.75)'
                                P2.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.75)'
                                P3.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.75)'
                                P4.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.75)'
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
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

        <Div>
          <A
            target='_blank'
            href='https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/Portifolio%2FLucasMonteiroSantos_Curriculo.pdf?alt=media&token=42d2c8cd-fe69-45f4-b510-cc61084bc918'
          >
            <Button id='CV'>Meu CV</Button>
          </A>
          <Link to='/contact' className='hoverGrow'>
            <Button id='Contact'>Bora bater um papo?</Button>
          </Link>
        </Div>
      </LeftBox>

      <RightBox>
        <Img
          src='https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/Portifolio%2Fhomepage01.webp?alt=media&token=e258ef29-a42a-4ff5-854d-9ee39eb48c76'
          alt=''
          id='Img'
        />
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
  transition: all 0.75s ease-in-out;
  opacity: 0;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
  color: ${(props) => props.theme.lightColor};
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
  -webkit-text-stroke: 0.1rem ${(props) => props.theme.bgComponentColor};
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
  -webkit-text-stroke: 0.12rem ${(props) => props.theme.primaryColor};
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
  color: ${(props) => props.theme.lightColor};
  animation: blinking 0.5s infinite step-end alternate;
  @media (max-width: 720px) {
    font-size: 1.5em;
  }
`
const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 3rem;
  margin-top: 1rem;
  font-size: 1.5em;
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};
  border: solid 3px ${(props) => props.theme.primaryColor};
  border-radius: 0.5rem;
  background-color: transparent;
  transition: all 0.25s ease-in-out;
  transform: scale(0);
  &#Contact {
    width: 14.5rem;
    color: ${(props) => props.theme.lightColor};
    background-color: ${(props) => props.theme.primaryColor};
    text-shadow: 0 0 8px #00000085;
  }
`
