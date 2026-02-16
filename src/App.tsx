import React from 'react';
// Portfolio with enhanced aesthetic improvements - v2.0.1
// Timestamp: 2026-02-16
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  FiMoon, FiSun, FiMail, FiLinkedin, FiUser, FiFolder, FiStar,
  FiBook, FiAward, FiPhone, FiMapPin, FiGithub, FiInstagram, FiMessageSquare, FiChevronDown, FiBookOpen
} from 'react-icons/fi'

export default function App() {
  const { t, i18n } = useTranslation()
  const [darkMode, setDarkMode] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [expandedAbout, setExpandedAbout] = useState(false)
  const _i = 0;

  const changeLang = (lang: string) => i18n.changeLanguage(lang)
  const projects = t('projectsContent', { returnObjects: true }) as Array<{ name: string, description: string, url: string, github: string }>
  const skills = t('skillsContent', { returnObjects: true }) as string[]
  const experience = t('experienceContent', { returnObjects: true }) as Array<{ company: string, role: string, period: string, details: string }>
  const education = t('educationContent', { returnObjects: true }) as Array<{ institution: string, degree: string, period: string }>

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) setDarkMode(saved === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const btnStyle = (active: boolean) => `
    px-4 py-2 rounded-lg font-bold transition-colors shadow-md border
    ${active
      ? darkMode ? 'bg-blue-700 text-white shadow-lg border-blue-600' : 'bg-blue-600 text-white shadow-lg border-blue-700'
      : darkMode
        ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600 border-gray-600'
        : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300'}
  `

  return (
    <div className={`relative min-h-screen p-8 mx-auto shadow-2xl rounded-2xl overflow-hidden transition-colors duration-500 font-mono ${darkMode ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-gray-100' : 'bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 text-gray-900'}`}>
      {/* Fondo decorativo con efecto parallax */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{background: darkMode ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)' : 'radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent)'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{background: darkMode ? 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)' : 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)'}}></div>
      </div>
      <div className="relative z-10">



      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-blue-700 focus:text-white focus:p-2 focus:z-50">
        Skip to main content
      </a>

      {/* Redes sociales laterales solo en escritorio */}
      <div
        className={`hidden md:flex fixed z-50 flex-col left-4 top-1/2 -translate-y-1/2 gap-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
      >
        <a href="https://github.com/Chijopana" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
          <FiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/jose-manuel-blondel-moya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
          <FiLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/joseblondel1" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
          <FiInstagram size={24} />
        </a>
      </div>

      <header className="flex items-center justify-between py-6 mb-8 max-w-7xl mx-auto px-4" role="banner">
  <motion.h1
    initial={{ opacity: 0, y: -20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide flex-grow max-w-4xl drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r ${
      darkMode ? 'from-blue-400 via-blue-300 to-cyan-400' : 'from-blue-700 via-blue-600 to-indigo-600'
    }`}
  >
    {t('greeting')}
  </motion.h1>

  <motion.button
    onClick={() => setDarkMode(!darkMode)}
    whileHover={{ scale: 1.15, boxShadow: darkMode ? "0 0 20px rgba(59, 130, 246, 0.8)" : "0 0 20px rgba(59, 130, 246, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    className={`ml-6 p-2.5 rounded-xl transition-all duration-300 shadow-lg font-semibold backdrop-blur-sm ${
      darkMode
        ? 'bg-gradient-to-br from-gray-700 to-gray-600 text-yellow-300 hover:from-gray-600 hover:to-gray-500 border border-gray-500/50'
        : 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 hover:from-blue-200 hover:to-blue-100 border border-blue-300/50'
    }`}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
  </motion.button>

  {/* Escritorio: botones de idioma */}
  <div className="hidden md:flex gap-3 ml-8" role="group" aria-label="Language selection">
    {['en', 'es', 'ca'].map(l => (
      <motion.button
        key={l}
        onClick={() => changeLang(l)}
        whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}
        className={btnStyle(i18n.language === l)}
        aria-label={`Switch to ${l === 'en' ? 'English' : l === 'es' ? 'Spanish' : 'Catalan'}`}
        aria-pressed={i18n.language === l}
      >
        {l.toUpperCase()}
      </motion.button>
    ))}
  </div>
</header>

{/* Redes sociales móviles */}
<div className="md:hidden flex justify-center gap-6 -mt-4 mb-4 text-2xl text-gray-500">
  <a href="https://github.com/Chijopana" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
    <FiGithub />
  </a>
  <a href="https://www.linkedin.com/in/jose-manuel-blondel-moya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
    <FiLinkedin />
  </a>
  <a href="https://www.instagram.com/joseblondel1" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
    <FiInstagram />
  </a>
</div>

{/* Idiomas móviles debajo de redes sociales */}
<div className="md:hidden flex justify-center mb-8">
  <div className="relative">
    <button
      onClick={() => setShowLangMenu(!showLangMenu)}
      className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors shadow-md ${
        darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {i18n.language.toUpperCase()} <FiChevronDown />
    </button>

    {showLangMenu && (
      <div
        className={`absolute left-0 mt-2 w-32 rounded-md shadow-lg z-50 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
        }`}
      >
        {['en', 'es', 'ca'].map(l => (
          <button
            key={l}
            onClick={() => {
              changeLang(l)
              setShowLangMenu(false)
            }}
            className={`block w-full px-4 py-2 text-left hover:bg-blue-500 hover:text-white ${
              i18n.language === l ? 'font-bold underline' : ''
            }`}
          >
            {l === 'en' ? 'English' : l === 'es' ? 'Español' : 'Català'}
          </button>
        ))}
      </div>
    )}
  </div>
</div>

      <main className="space-y-32" id="main-content">

        {/* About */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-3xl mx-auto text-center"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 pb-3 inline-flex items-center justify-center gap-2 sm:gap-3 mx-auto bg-clip-text text-transparent
    ${darkMode
              ? 'border-blue-400 bg-gradient-to-r from-blue-400 to-cyan-300'
              : 'border-blue-500 bg-gradient-to-r from-blue-700 to-indigo-700'
            }
  `}>
            <FiStar size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            {t('about')}
          </h2>
          
          {/* About Content with Expandable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative rounded-2xl p-8 shadow-xl transition-all duration-300 border backdrop-blur-md
    ${darkMode ? 'bg-gradient-to-br from-gray-800/60 to-gray-700/40 text-gray-200 border-gray-600/30' : 'bg-gradient-to-br from-blue-50/80 via-white/80 to-indigo-50/80 text-gray-800 border-blue-200/30'}
  `}
          >
            <p className="text-lg leading-relaxed">
              {expandedAbout 
                ? t('aboutContent')
                : t('aboutContent')?.split('\n')[0]}
            </p>
            
            {t('aboutContent')?.includes('\n') && (
              <motion.button
                onClick={() => setExpandedAbout(!expandedAbout)}
                whileHover={{ scale: 1.08, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-4 px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto backdrop-blur-sm border
                  ${darkMode 
                    ? 'bg-blue-700/40 text-blue-300 hover:bg-blue-700/60 border-blue-500/30 hover:border-blue-400/50' 
                    : 'bg-blue-100/60 text-blue-700 hover:bg-blue-200/80 border-blue-200/50 hover:border-blue-300'}
                `}
              >
                {expandedAbout ? 'Show less' : 'Read more'}
                <motion.div
                  animate={{ rotate: expandedAbout ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={18}/>
                </motion.div>
              </motion.button>
            )}
          </motion.div>

          {/* Botón para descargar CV */}
          <motion.a
            href={i18n.language === 'en' ? '/Jose Manuel Blondel Moya CV Web developer Junior.pdf' : '/Jose Manuel Blondel Moya CV Desarrollador web Junior.pdf'}
            download
            whileHover={{ scale: 1.08, boxShadow: darkMode ? "0 0 20px rgba(59, 130, 246, 0.8)" : "0 0 20px rgba(59, 130, 246, 0.6)", y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block mt-6 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm border border-transparent hover:border-current
    ${darkMode
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-gray-200 hover:from-blue-500 hover:to-blue-400'
                : 'bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-600 hover:to-blue-500'
              }
  `}
          >
            {t('downloadCV')}
          </motion.a>
        </motion.section>

        {/* Why Hire Me */}
        <motion.section
          id="why-hire-me"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8 max-w-4xl mx-auto text-center"
          aria-label="Why hire me section"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 pb-3 inline-flex items-center justify-center gap-2 sm:gap-3 mx-auto bg-clip-text text-transparent
            ${darkMode ? 'border-indigo-400 bg-gradient-to-r from-indigo-400 to-blue-300' : 'border-indigo-500 bg-gradient-to-r from-indigo-600 to-blue-600'}
          `}>
            <FiAward size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            {t('whyHireMe')}
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {(t('whyHireMeContent', { returnObjects: true }) as Array<{ title: string, description: string }>).map(({ title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: darkMode ? "0 10px 25px rgba(79, 70, 229, 0.15)" : "0 10px 25px rgba(99, 102, 241, 0.1)" }}
                className={`p-6 rounded-2xl shadow-lg border-t-2 border-b-2 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105
                  ${darkMode
                    ? 'bg-gradient-to-br from-gray-800/70 to-gray-850/70 border-indigo-500/40 hover:border-indigo-400/70'
                    : 'bg-gradient-to-br from-indigo-50/80 to-white/80 border-indigo-300/50 hover:border-indigo-400/80'
                  }`}
              >
                <h3 className={`text-xl font-bold mb-3
                  ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}
                `}>
                  {title}
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -2, boxShadow: darkMode ? "0 8px 20px rgba(99, 102, 241, 0.3)" : "0 8px 20px rgba(99, 102, 241, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm border border-transparent
                ${darkMode ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:from-indigo-500 hover:to-indigo-400' : 'bg-gradient-to-r from-indigo-500 to-indigo-400 text-white hover:from-indigo-600 hover:to-indigo-500'}
              `}
            >
              {t('sendMessage')} →
            </motion.a>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
          aria-label="Featured projects"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 pb-3 mb-8 inline-flex items-center justify-center gap-2 sm:gap-3 mx-auto bg-clip-text text-transparent
      ${darkMode
              ? 'border-green-400 bg-gradient-to-r from-green-400 to-emerald-300'
              : 'border-green-500 bg-gradient-to-r from-green-600 to-emerald-600'
            }
    `}>
            <FiFolder size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            {t('projects')}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map(({ name, description, url, github }, i) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 80 }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: darkMode
                    ? "0 10px 15px rgba(0,0,0,0.5)"
                    : "0 10px 15px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border backdrop-blur-sm hover:scale-105 hover:-translate-y-1
      ${darkMode
                    ? 'bg-gradient-to-br from-gray-800/70 via-gray-750/70 to-gray-800/70 border-gray-600/30'
                    : 'bg-gradient-to-br from-gray-50/80 to-white/80 border border-gray-200/50'
                  }`}
                aria-label={`${name}: ${description}. View project`}
              >
                <motion.div
                  className="w-full h-44 mb-4 overflow-hidden rounded-xl relative group"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={`/assets/projects/thumb${i + 1}.png`}
                    alt={`Screenshot of ${name}`}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <h3 className={`text-2xl font-semibold mb-3 transition-colors duration-300 hover:drop-shadow-lg
      ${darkMode
                    ? 'text-green-400 hover:text-green-300'
                    : 'text-green-700 hover:text-green-900'
                  }`}>
                  {name}
                </h3>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700 font-medium'} flex-grow mb-4`}>
                  {description}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {i === 0 && <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-sm">JavaScript</span>}
                  {i === 1 && <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-sm">JavaScript</span>}
                  {i === 2 && <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full shadow-sm">React</span>}
                  {i === 3 && <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white rounded-full shadow-sm">JavaScript</span>}
                  {i === 4 && <><span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full shadow-sm">React</span><span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-sm">TypeScript</span></>}
                  {i === 5 && <><span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-sm">Angular</span></>}
                  {i === 6 && <><span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full shadow-sm">React</span><span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full shadow-sm">Node.js</span></>}
                  {i === 7 && <><span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full shadow-sm">Next.js</span></>}
                </div>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold underline
        ${darkMode ? 'text-green-300' : 'text-green-600'}
      `}
                  aria-label={`View ${name} source code on GitHub`}
                >
                  → View on GitHub
                </a>
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
          className="space-y-6 max-w-4xl mx-auto text-center"
          aria-label="Technical skills"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 pb-3 inline-flex items-center justify-center gap-2 sm:gap-3 mx-auto bg-clip-text text-transparent
      ${darkMode
              ? 'border-purple-400 bg-gradient-to-r from-purple-400 to-pink-300'
              : 'border-purple-500 bg-gradient-to-r from-purple-600 to-pink-600'
            }
    `}>
            <FiStar size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            {t('skills')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -4, scale: 1.1, boxShadow: darkMode ? "0 12px 20px rgba(168, 85, 247, 0.4)" : "0 12px 24px rgba(147, 51, 234, 0.25)" }}
                className={`px-6 py-3 rounded-full font-bold text-sm shadow-xl cursor-default select-none transition-all duration-300 border-0 hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white shadow-purple-500/50' 
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-purple-400/50'
                }`}
                role="img"
                aria-label={skill}
              >
                {skill}
              </motion.span>
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
          className="space-y-12 max-w-4xl mx-auto"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold pb-3 text-center bg-clip-text text-transparent
      ${darkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-300' : 'bg-gradient-to-r from-yellow-600 to-orange-600'}
    `}>
            <span className={`inline-flex items-center justify-center gap-2 sm:gap-3 border-b-4 pb-1
        ${darkMode ? 'border-yellow-400' : 'border-yellow-500'}
      `}>
              <FiBook size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
              {t('experience')}
            </span>
          </h2>
          <div className={`relative ml-8
      ${darkMode ? 'border-l-4 border-yellow-500/50' : 'border-l-4 border-yellow-300/70'}
    `}>
            {experience.map(({ company, role, period, details }, i) => (
              <div key={company + i} className="mb-12 ml-10 relative">
                <span className={`absolute w-4 h-4 rounded-full shadow-lg ring-4 ring-offset-2 flex-shrink-0
            ${darkMode ? '-left-8 top-3.5 bg-yellow-400 ring-gray-800 ring-offset-gray-900' : '-left-8 top-3.5 bg-yellow-400 ring-yellow-100 ring-offset-gray-100'}
          `}></span>
                <h3 className={`text-xl font-bold mb-1
            ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}
          `}>{role}</h3>
                <p className={`text-sm font-semibold mb-2
            ${darkMode ? 'text-yellow-200/70' : 'text-yellow-600/80'}
          `}>{company} • {period}</p>
                <p className={`leading-relaxed font-medium
            ${darkMode ? 'text-gray-300' : 'text-gray-800'}
          `}>{details}</p>
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
          className="space-y-8 max-w-3xl mx-auto"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold pb-3 text-center bg-clip-text text-transparent
    ${darkMode ? 'bg-gradient-to-r from-pink-400 to-rose-300' : 'bg-gradient-to-r from-pink-600 to-rose-600'}
  `}>
            <span className={`inline-flex items-center justify-center gap-2 sm:gap-3 border-b-4 pb-1
      ${darkMode ? 'border-pink-400' : 'border-pink-500'}
    `}>
              <FiAward size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
              {t('education')}
            </span>
          </h2>

          <div className="space-y-6">
            {education.map(({ institution, degree, period }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, boxShadow: darkMode ? "0 10px 20px rgba(236, 72, 153, 0.15)" : "0 10px 20px rgba(236, 72, 153, 0.08)" }}
                className={`flex items-start gap-4 p-6 rounded-2xl shadow-lg border backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105 hover:border-pink-400/50
          ${darkMode
                    ? 'bg-gradient-to-r from-gray-800/70 to-gray-750/70 text-gray-200 border-gray-600/30'
                    : 'bg-gradient-to-br from-pink-50/80 to-white/80 text-gray-800 border-pink-200/30'
        }`}
              >
                <FiBookOpen size={28} className={darkMode ? 'text-pink-400' : 'text-pink-500'} />

                <div>
                  <h3 className="text-xl font-semibold">{degree}</h3>
                  <p className="text-md">{institution}</p>
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">{period}</p>
                </div>
              </motion.div>
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
          className="space-y-14 max-w-3xl mx-auto text-center"
          aria-label="Contact information and form"
        >
          {/* Título */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 pb-3 inline-flex items-center justify-center gap-2 sm:gap-3 mx-auto bg-clip-text text-transparent
    ${darkMode ? 'border-blue-400 bg-gradient-to-r from-blue-400 to-cyan-300' : 'border-blue-600 bg-gradient-to-r from-blue-600 to-cyan-600'}
  `}>
            <FiMail size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            {t('contact')}
          </h2>

          {/* Texto descriptivo */}
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700 font-medium'} text-lg max-w-xl mx-auto`}>
            {t('contactContent')}
          </p>

          {/* Red social y datos */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto
  `}
    role="list"
    aria-label="Contact methods"
  >
            {[
              { icon: <FiMail size={20} />, label: 'jose7blondel@gmail.com' },
              { icon: <FiPhone size={20} />, label: "+34 632-485-849" },
              { icon: <FiMapPin size={20} />, label: t('location') },
              { icon: <FiGithub size={20} />, label: 'GitHub', href: 'https://github.com/Chijopana' },
              { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jose-manuel-blondel-moya/' },
              { icon: <FiInstagram size={20} />, label: 'Instagram', href: 'https://instagram.com/joseblondel1' },
            ].map(({ icon, label, href }, i) => (
              <motion.div 
                key={i}                 initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}                whileHover={{ scale: 1.08, y: -2, boxShadow: darkMode ? "0 10px 25px rgba(59, 130, 246, 0.2)" : "0 10px 25px rgba(59, 130, 246, 0.15)" }}
                className={`flex items-center gap-3 justify-center p-4 rounded-xl transition-all backdrop-blur-sm border
                ${darkMode 
                  ? 'bg-gray-800/70 text-blue-300 hover:bg-gray-700/70 border-gray-600/50 hover:border-blue-500/50' 
                  : 'bg-blue-50/70 text-blue-700 border-blue-200/50 hover:bg-blue-100/70 hover:border-blue-300'}
              `} 
                role="listitem"
              >
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-sm">
                    {label}
                  </a>
                ) : (
                  <span className="font-medium text-sm">{label}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Título del formulario */}
          <div className={`max-w-xl mx-auto mb-8 text-center`}>
            <h3 className={`text-3xl font-bold mb-2 bg-clip-text text-transparent
    ${darkMode ? 'bg-gradient-to-r from-blue-400 to-cyan-300' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}
  `}>
              {t('contactFormTitle') || '¿Quieres ponerte en contacto?'}
            </h3>
            <p className={`text-lg
    ${darkMode ? 'text-gray-300' : 'text-gray-600'}
  `}>
              {t('contactFormDescription') || 'Envíame un mensaje y te responderé pronto.'}
            </p>
          </div>

          {/* Formulario de contacto atractivo */}
          <form
            className="space-y-5 max-w-xl mx-auto text-left"
            method="POST"
            action="https://formsubmit.co/e4024c058206774f4d44c782a4b04ec5"
            aria-label="Contact form"
          >
            {/* 👇 Ocultos para configuración de FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Campo nombre */}
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-md border-2 focus-within:ring-2 focus-within:ring-offset-2 transition-all backdrop-blur-sm
    ${darkMode ? 'bg-gray-900/70 border-gray-600/50 focus-within:ring-blue-500 focus-within:ring-offset-gray-900 hover:border-gray-500/70' : 'bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-blue-200/50 focus-within:ring-blue-500 focus-within:ring-offset-white hover:border-blue-300/70'}`}
            >
              <FiUser className="text-gray-400" aria-hidden="true" />
              <input
                name="name"
                type="text"
                required
                placeholder={t('yourName') || 'Tu nombre'}
                className={`flex-1 bg-transparent outline-none font-medium
        ${darkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-800 placeholder-gray-600'}`}
                aria-label="Your name"
              />
            </div>

            {/* Campo email */}
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-md border-2 focus-within:ring-2 focus-within:ring-offset-2 transition-all
    ${darkMode ? 'bg-gray-900 border-gray-700 focus-within:ring-blue-500 focus-within:ring-offset-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 focus-within:ring-blue-500 focus-within:ring-offset-white'}`}
            >
              <FiMail className="text-gray-400" aria-hidden="true" />
              <input
                name="email"
                type="email"
                required
                placeholder={t('yourEmail') || 'Tu correo'}
                className={`flex-1 bg-transparent outline-none font-medium
        ${darkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-800 placeholder-gray-600'}`}
                aria-label="Your email"
              />
            </div>

            {/* Campo mensaje */}
            <div className={`flex items-start gap-3 px-4 py-3 rounded-xl shadow-md border-2 focus-within:ring-2 focus-within:ring-offset-2 transition-all backdrop-blur-sm
    ${darkMode ? 'bg-gray-900/70 border-gray-600/50 focus-within:ring-blue-500 focus-within:ring-offset-gray-900 hover:border-gray-500/70' : 'bg-white/80 border-blue-200/50 focus-within:ring-blue-500 focus-within:ring-offset-gray-100 hover:border-blue-300/70'}`}
            >
              <FiMessageSquare className="mt-2 text-gray-400" aria-hidden="true" />
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t('yourMessage') || 'Tu mensaje'}
                className={`flex-1 bg-transparent outline-none resize-none font-medium
        ${darkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-800 placeholder-gray-600'}`}
                aria-label="Your message"
              ></textarea>
            </div>

            {/* Botón enviar */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.08, y: -2, boxShadow: darkMode ? "0 10px 30px rgba(59, 130, 246, 0.5)" : "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl border-0 backdrop-blur-sm
      ${darkMode
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'}`}
              aria-label="Send message"
            >
              {t('sendMessage') || 'Enviar'}
            </motion.button>
          </form>

        </motion.section>

      </main>

      <footer className={`mt-24 text-center text-sm font-medium
  ${darkMode ? 'text-gray-400 border-t border-gray-700' : 'text-gray-600 border-t border-gray-300'}
  pt-8
`}>
        © {new Date().getFullYear()} Jose Blondel. All rights reserved.
      </footer>
      </div>
    </div>
  )
}
