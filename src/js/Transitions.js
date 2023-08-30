import { animateBorder, animateFilter, animateOpacity, animateTransform, animateWidth } from './Animations'

export function transitionInHome(Img, Strong, StrongStroke, StrongFill01, StrongFill02, P1, P2, P3, P4, CV, Contact, callback) {
  const finalState = window.innerWidth > 720 ? '11.25ch' : '6.45ch'

  animateOpacity(Img, 0.85, () => {
    Strong.style.width === '' &&
      animateBorder(Strong, 0, 4, 0, 0, () => {
        animateWidth(Strong, '3.25ch', () => {
          animateWidth(Strong, '13.25ch', () => {
            Strong.style.borderRight = 'none'
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
                                Strong.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
                                StrongFill02.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
                                P1.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
                                P2.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
                                P3.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
                                P4.style.textShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
                              })
                              Img.addEventListener('transitionend', () => {
                                if (callback) {
                                  callback()
                                }
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
  })
}

export function transitionOutHome(LeftBox, Img) {
  LeftBox.style.transition = 'all 0.5s ease-in-out'
  Img.style.transition = 'all 0.5s ease-in-out'

  LeftBox.style.opacity = '0'
  LeftBox.style.paddingTop = '8rem'
  Img.style.opacity = '0'
}

export function transitionInAboutMe(element01) {
  element01.style.transition = 'all 0.5s ease-in-out'
  element01.style.opacity = '1'
}

export function transitionOutAboutMe(element01) {
  element01.style.transition = 'all 0.5s ease-in-out'
  element01.style.opacity = '0'
}
