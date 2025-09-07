import React from 'react';
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
  const [showLangMenu, setShowLangMenu] = useState(false) // debajo de useState
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
    px-4 py-2 rounded-md font-semibold transition-colors shadow-md
    ${active
      ? 'bg-blue-700 text-white shadow-lg'
      : darkMode
        ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600 hover:text-yellow-400'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-blue-700'}
  `

  return (
    <div className={`relative min-h-screen p-8 mx-auto shadow-lg rounded-lg overflow-hidden transition-colors duration-500 font-mono ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-white text-gray-900'}`}>



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

      <header className="flex items-center justify-between py-6 mb-8 max-w-7xl mx-auto px-4">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`text-6xl font-extrabold tracking-wide flex-grow max-w-4xl drop-shadow-lg ${
      darkMode ? 'text-blue-400' : 'text-blue-700'
    }`}
  >
    {t('greeting')}
  </motion.h1>

  <motion.button
    onClick={() => setDarkMode(!darkMode)}
    whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)" }}
    className={`ml-6 p-2 rounded-md transition-colors duration-300 shadow-md ${
      darkMode
        ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    aria-label="Toggle dark mode"
  >
    {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
  </motion.button>

  {/* Escritorio: botones de idioma */}
  <div className="hidden md:flex gap-3 ml-8">
    {['en', 'es', 'ca'].map(l => (
      <motion.button
        key={l}
        onClick={() => changeLang(l)}
        whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}
        className={btnStyle(i18n.language === l)}
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

      <main className="space-y-32">

        {/* About */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-3xl mx-auto text-center"
        >
          <h2 className={`text-4xl font-bold border-b-4 pb-3 inline-flex items-center gap-3 mx-auto
    ${darkMode
              ? 'border-blue-400 text-blue-400'
              : 'border-blue-500 text-blue-600'
            }
  `}>
            <FiStar size={30} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            {t('about')}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative rounded-xl p-6 shadow-md transition-colors duration-300
    ${darkMode ? 'bg-white/5 border border-gray-700 text-gray-300' : 'bg-white border border-gray-200 text-gray-700'}
  `}
          >
            <p className="text-xl leading-relaxed whitespace-pre-line">
              {t('aboutContent')}
            </p>
          </motion.div>

          {/* Botón para descargar CV */}
          <motion.a
            href={i18n.language === 'en' ? '/Jose Manuel Blondel Moya CV Web developer Junior.pdf' : '/Jose Manuel Blondel Moya CV Desarrollador web Junior.pdf'}
            download
            whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)" }}
            className={`inline-block mt-6 px-6 py-3 rounded-md font-semibold transition-colors duration-300 shadow-md
    ${darkMode
                ? 'bg-blue-600 text-gray-200 hover:bg-blue-500'
                : 'bg-blue-500 text-white hover:bg-blue-600'
              }
  `}
          >
            {t('downloadCV')}
          </motion.a>
        </motion.section>


        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className={`text-4xl font-bold border-b-4 pb-3 mb-8 inline-flex items-center gap-3 justify-center
      ${darkMode
              ? 'border-green-400 text-green-400'
              : 'border-green-500 text-green-600'
            }
    `}>
            <FiFolder size={30} className={darkMode ? 'text-green-400' : 'text-green-600'} />
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
                className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border
      ${darkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                  }`}
              >
                <motion.div
                  className="w-full h-44 mb-4 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={`/assets/projects/thumb${i + 1}.png`} // O usa un link real si no tienes assets locales
                    alt={`Captura de ${name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                <h3 className={`text-2xl font-semibold mb-3 transition-colors duration-300 hover:drop-shadow-lg
      ${darkMode
                    ? 'text-green-400 hover:text-green-300'
                    : 'text-green-700 hover:text-green-900'
                  }`}>
                  {name}
                </h3>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} flex-grow`}>
                  {description}
                </p>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 text-sm font-semibold underline
        ${darkMode ? 'text-green-300' : 'text-green-600'}
      `}
                >
                  Ver en GitHub
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
        >
          <h2 className={`text-4xl font-bold border-b-4 pb-3 inline-flex items-center justify-center gap-3 mx-auto
      ${darkMode
              ? 'border-purple-400 text-purple-400'
              : 'border-purple-500 text-purple-600'
            }
    `}>
            <FiStar size={30} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            {t('skills')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow-md cursor-default select-none hover:scale-105 transition-transform duration-300"
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
          className="space-y-12 max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl font-bold pb-3 text-center
      ${darkMode ? 'text-yellow-400' : ''}
    `}>
            <span className={`inline-flex items-center gap-3 border-b-4 pb-1 justify-center
        ${darkMode ? 'border-yellow-400' : 'border-yellow-500'}
      `}>
              <FiBook size={30} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
              {t('experience')}
            </span>
          </h2>
          <div className={`relative border-l-4 ml-8
      ${darkMode ? 'border-yellow-400' : 'border-yellow-400'}
    `}>
            {experience.map(({ company, role, period, details }, i) => (
              <div key={company + i} className="mb-10 ml-10 relative">
                <span className={`absolute -left-6 top-3 w-5 h-5 rounded-full shadow-lg
            ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}
          `}></span>
                <h3 className={`text-2xl font-semibold
            ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}
          `}>{role}</h3>
                <p className={`text-sm italic
            ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}
          `}>{company} — {period}</p>
                <p className={`mt-3
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
          <h2 className={`text-4xl font-bold pb-3 text-center
    ${darkMode ? 'text-pink-400' : ''}
  `}>
            <span className={`inline-flex items-center gap-3 border-b-4 pb-1 justify-center
      ${darkMode ? 'border-pink-400' : 'border-pink-500'}
    `}>
              <FiAward size={30} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
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
                className={`flex items-start gap-4 p-4 rounded-lg shadow-md border-l-4
          ${darkMode
                    ? 'bg-gray-900 border-pink-400 text-gray-200'
                    : 'bg-white border-pink-500 text-gray-800'}
        `}
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
        >
          {/* Título */}
          <h2 className={`text-4xl font-bold border-b-4 pb-3 inline-flex items-center justify-center gap-3 mx-auto
    ${darkMode ? 'border-blue-400 text-blue-400' : 'border-blue-600 text-blue-600'}
  `}>
            <FiMail size={30} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            {t('contact')}
          </h2>

          {/* Texto descriptivo */}
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-xl max-w-xl mx-auto`}>
            {t('contactContent')}
          </p>

          {/* Red social y datos */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-semibold max-w-xl mx-auto
    ${darkMode ? 'text-blue-400' : 'text-blue-700'}
  `}>
            {[
              { icon: <FiMail size={24} />, label: 'jose7blondel@gmail.com' },
              { icon: <FiPhone size={24} />, label: "+34 632-485-849" },
              { icon: <FiMapPin size={24} />, label: t('location') },
              { icon: <FiGithub size={24} />, label: 'GitHub', href: 'https://github.com/Chijopana' },
              { icon: <FiLinkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jose-manuel-blondel-moya/' },
              { icon: <FiInstagram size={24} />, label: 'Instagram', href: 'https://instagram.com/joseblondel1' },
            ].map(({ icon, label, href }, i) => (
              <div className="flex items-center gap-3 justify-center">
                {icon}
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>

          {/* Título del formulario */}
          <div className={`max-w-xl mx-auto mb-8 text-center`}>
            <h3 className={`text-3xl font-bold mb-2
    ${darkMode ? 'text-blue-400' : 'text-blue-700'}
  `}>
              {t('contactFormTitle') || '¿Quieres ponerte en contacto?'}
            </h3>
            <p className={`text-lg
    ${darkMode ? 'text-gray-300' : 'text-gray-700'}
  `}>
              {t('contactFormDescription') || 'Envíame un mensaje y te responderé pronto.'}
            </p>
          </div>

          {/* Formulario de contacto atractivo */}
          <form
            className="space-y-5 max-w-xl mx-auto text-left"
            method="POST"
            action="https://formsubmit.co/e4024c058206774f4d44c782a4b04ec5"
          >
            {/* 👇 Ocultos para configuración de FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Campo nombre */}
            <div className={`flex items-center gap-3 px-4 py-2 rounded-md shadow-md border focus-within:ring-2 focus-within:ring-blue-400
    ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}
            >
              <FiUser className="text-gray-400" />
              <input
                name="name"
                type="text"
                required
                placeholder={t('yourName') || 'Tu nombre'}
                className={`flex-1 bg-transparent outline-none
        ${darkMode ? 'text-gray-200 placeholder-gray-400' : 'text-gray-700 placeholder-gray-500'}`}
              />
            </div>

            {/* Campo email */}
            <div className={`flex items-center gap-3 px-4 py-2 rounded-md shadow-md border focus-within:ring-2 focus-within:ring-blue-400
    ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}
            >
              <FiMail className="text-gray-400" />
              <input
                name="email"
                type="email"
                required
                placeholder={t('yourEmail') || 'Tu correo'}
                className={`flex-1 bg-transparent outline-none
        ${darkMode ? 'text-gray-200 placeholder-gray-400' : 'text-gray-700 placeholder-gray-500'}`}
              />
            </div>

            {/* Campo mensaje */}
            <div className={`flex items-start gap-3 px-4 py-2 rounded-md shadow-md border focus-within:ring-2 focus-within:ring-blue-400
    ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}
            >
              <FiMessageSquare className="mt-2 text-gray-400" />
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t('yourMessage') || 'Tu mensaje'}
                className={`flex-1 bg-transparent outline-none resize-none
        ${darkMode ? 'text-gray-200 placeholder-gray-400' : 'text-gray-700 placeholder-gray-500'}`}
              ></textarea>
            </div>

            {/* Botón enviar */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-2 rounded-md font-bold transition-colors duration-300 shadow-md
      ${darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              {t('sendMessage') || 'Enviar'}
            </motion.button>
          </form>

        </motion.section>

      </main>

      <footer className={`mt-24 text-center text-sm
  ${darkMode ? 'text-gray-400' : 'text-gray-500'}
`}>
        © {new Date().getFullYear()} Jose Blondel. All rights reserved.
      </footer>

    </div>
  )
}
