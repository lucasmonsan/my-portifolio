import { useContext, useEffect } from 'react'
import { transitionInAboutMe, transitionOutAboutMe } from '../js/Transitions'
import { RouterPropsContext } from '../contexts/RouterPropsContext'

export const AboutMePage = () => {
  const { transition } = useContext(RouterPropsContext)

  useEffect(() => {
    const Page = document.getElementById('Page')

    transition === 'in' && transitionInAboutMe(Page)
    transition === 'out' && transitionOutAboutMe(Page)
  }, [transition])

  return (
    <main id='Page'>
      <h1>AboutMePage</h1>
    </main>
  )
}
