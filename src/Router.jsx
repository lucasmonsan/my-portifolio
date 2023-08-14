import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AboutMePage } from './pages/AboutMePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { AcademicPage } from './pages/AcademicPage'
import { ContactPage } from './pages/ContactPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about-me' element={<AboutMePage />} />
        <Route path='projects' element={<ProjectsPage />} />
        <Route path='academic' element={<AcademicPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
