import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function App() {
  const { t, i18n } = useTranslation()
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = stored ?? (prefersDark ? 'dark' : 'light')
    const isDark = theme === 'dark'
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev
      localStorage.setItem('theme', next ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  const changeLang = (lang: string) => i18n.changeLanguage(lang)

  const projects = t('projectsContent', { returnObjects: true }) as Array<{ name: string, description: string, url: string }>
  const skills = t('skillsContent', { returnObjects: true }) as string[]
  const experience = t('experienceContent', { returnObjects: true }) as Array<{ company: string, role: string, period: string, details: string }>
  const education = t('educationContent', { returnObjects: true }) as Array<{ institution: string, degree: string, period: string }>
  const testimonials = t('testimonialsContent', { returnObjects: true }) as Array<{ name: string, text: string }>

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300 p-6 mx-auto">
      <header className="flex justify-between items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extralight tracking-wide"
        >
          {t('greeting')}
        </motion.h1>
        <div className="flex gap-3">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
          {['en', 'es', 'ca'].map((l) => (
            <button
              key={l}
              onClick={() => changeLang(l)}
              className={`px-4 py-1 rounded font-semibold transition ${
                i18n.language === l
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="space-y-24">
        {/* About */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            {t('about')}
          </h2>
          <p className="text-lg max-w-3xl leading-relaxed dark:text-gray-300">{t('aboutContent')}</p>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2 mb-6">
            {t('projects')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map(({ name, description, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{name}</h3>
                <p className="flex-grow text-gray-800 dark:text-gray-300">{description}</p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 underline">View on GitHub</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            {t('skills')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 px-4 py-1 rounded-full font-medium text-sm cursor-default select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            {t('experience')}
          </h2>
          <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
            {experience.map(({ company, role, period, details }, i) => (
              <div key={company + i} className="mb-8 ml-6 relative">
                <span className="absolute -left-4 top-2 w-3 h-3 bg-blue-600 rounded-full dark:bg-blue-400"></span>
                <h3 className="text-xl font-semibold dark:text-gray-100">{role}</h3>
                <p className="text-sm italic text-gray-600 dark:text-gray-400">{company} — {period}</p>
                <p className="mt-2 text-gray-800 dark:text-gray-300">{details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            {t('education')}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-800 dark:text-gray-300">
            {education.map(({ institution, degree, period }) => (
              <li key={institution}>
                <strong>{degree}</strong> - {institution} <em>({period})</em>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          id="testimonials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            {t('testimonials')}
          </h2>
          <div className="space-y-4">
            {testimonials.map(({ name, text }) => (
              <blockquote
                key={name}
                className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 italic text-gray-700 dark:text-gray-300"
              >
                “{text}” — <strong>{name}</strong>
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            {t('contact')}
          </h2>
          <p className="text-lg dark:text-gray-300">{t('contactContent')}</p>
          <p>
            <a
              href={`mailto:${t('email')}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t('email')}
            </a>
          </p>
          <p>
            <a
              href={t('linkedin')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </motion.section>
      </main>

      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Jose Blondel. All rights reserved.
      </footer>
    </div>
  )
}
