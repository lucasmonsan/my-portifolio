export function animateBorder(element, top, right, bottom, left, callback) {
  setTimeout(() => {
    element.style.borderTop = `solid ${top}px`
    element.style.borderRight = `solid ${right}px`
    element.style.borderBottom = `solid ${bottom}px`
    element.style.borderLeft = `solid ${left}px`

    element.addEventListener('transitionend', () => {
      if (callback) {
        callback()
      }
    })
  }, 100)
}

export function animateWidth(element, finalState, callback) {
  element.style.transition = `width 0.5s ease-in-out`

  setTimeout(() => {
    element.style.width = `${finalState}`

    element.addEventListener('transitionend', () => {
      element.style.transition = ''
      if (callback) {
        callback()
      }
    })
  }, 100)
}
