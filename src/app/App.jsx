import { Route, Routes } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import ScrollManager from '../components/layout/ScrollManager.jsx'
import HomePage from '../pages/HomePage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import ProjectCaseStudyPage from '../pages/ProjectCaseStudyPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollManager />
    </>
  )
}
