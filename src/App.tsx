import { useTranslation } from 'react-i18next'
import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialRail from './components/SocialRail'
import WhyHireMe from './components/WhyHireMe'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLanguage'

export default function App() {
  const { t } = useTranslation()
  const { isDark, toggleTheme } = useTheme()

  // Keeps <html lang> in sync with the language actually rendered.
  useLanguage()

  return (
    <div className="min-h-screen bg-bg text-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
      >
        {t('common.skipToContent')}
      </a>

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <SocialRail />

      <main id="main-content">
        <Hero />
        <About />
        <WhyHireMe />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
