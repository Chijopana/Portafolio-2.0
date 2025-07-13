import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          greeting: "Hi, I'm Jose Blondel",
          about: "About Me",
          aboutContent: "I'm a passionate web developer specializing in modern React and TypeScript projects. I love building sleek, user-friendly websites and learning new technologies every day.",
          projects: "Projects",
          projectsContent: [
            {
              name: "Portfolio Website",
              description: "A clean and responsive portfolio built with React, TypeScript, and Tailwind CSS.",
              url: "https://github.com/joseblondel/portfolio"
            },
            {
              name: "Task Manager App",
              description: "A productivity app with React, featuring drag-and-drop and real-time sync.",
              url: "https://github.com/joseblondel/task-manager"
            }
          ],
          skills: "Skills",
          skillsContent: [
            "JavaScript / TypeScript",
            "React & Redux",
            "Node.js & Express",
            "Tailwind CSS",
            "Git & GitHub"
          ],
          experience: "Experience",
          experienceContent: [
            {
              company: "TechCorp",
              role: "Frontend Developer",
              period: "Jan 2022 - Present",
              details: "Building responsive web apps using React, TypeScript, and Tailwind CSS."
            },
            {
              company: "Web Solutions",
              role: "Junior Developer",
              period: "Jun 2020 - Dec 2021",
              details: "Worked on internal tools and automated workflows."
            }
          ],
          education: "Education",
          educationContent: [
            {
              institution: "University XYZ",
              degree: "Bachelor of Computer Science",
              period: "2017 - 2021"
            },
            {
              institution: "Online Bootcamp ABC",
              degree: "Fullstack Web Development",
              period: "2022"
            }
          ],
          testimonials: "Testimonials",
          testimonialsContent: [
            {
              name: "Ana Pérez",
              text: "Jose is an outstanding developer with great attention to detail."
            },
            {
              name: "Mark Johnson",
              text: "Professional and proactive, highly recommended!"
            }
          ],
          contact: "Contact",
          contactContent: "Feel free to reach out via email or LinkedIn for collaborations or job opportunities.",
          email: "jose@example.com",
          linkedin: "https://linkedin.com/in/joseblondel"
        }
      },
      es: {
        translation: {
          greeting: "Hola, soy Jose Blondel",
          about: "Sobre Mí",
          aboutContent: "Soy un desarrollador web apasionado especializado en proyectos modernos con React y TypeScript. Me encanta crear sitios web elegantes y fáciles de usar, y aprender nuevas tecnologías cada día.",
          projects: "Proyectos",
          projectsContent: [
            {
              name: "Sitio Web Portafolio",
              description: "Un portafolio limpio y responsivo construido con React, TypeScript y Tailwind CSS.",
              url: "https://github.com/joseblondel/portfolio"
            },
            {
              name: "App de Gestión de Tareas",
              description: "Una app de productividad con React, con funcionalidades de drag-and-drop y sincronización en tiempo real.",
              url: "https://github.com/joseblondel/task-manager"
            }
          ],
          skills: "Habilidades",
          skillsContent: [
            "JavaScript / TypeScript",
            "React & Redux",
            "Node.js & Express",
            "Tailwind CSS",
            "Git & GitHub"
          ],
          experience: "Experiencia",
          experienceContent: [
            {
              company: "TechCorp",
              role: "Desarrollador Frontend",
              period: "Ene 2022 - Presente",
              details: "Construyendo aplicaciones web responsivas usando React, TypeScript y Tailwind CSS."
            },
            {
              company: "Web Solutions",
              role: "Desarrollador Junior",
              period: "Jun 2020 - Dic 2021",
              details: "Trabajé en herramientas internas y automatización de procesos."
            }
          ],
          education: "Educación",
          educationContent: [
            {
              institution: "Universidad XYZ",
              degree: "Grado en Informática",
              period: "2017 - 2021"
            },
            {
              institution: "Bootcamp Online ABC",
              degree: "Desarrollo Web Fullstack",
              period: "2022"
            }
          ],
          testimonials: "Testimonios",
          testimonialsContent: [
            {
              name: "Ana Pérez",
              text: "Jose es un desarrollador excepcional con gran atención al detalle."
            },
            {
              name: "Mark Johnson",
              text: "Profesional y proactivo, muy recomendable."
            }
          ],
          contact: "Contacto",
          contactContent: "No dudes en contactarme por email o LinkedIn para colaboraciones o oportunidades laborales.",
          email: "jose@example.com",
          linkedin: "https://linkedin.com/in/joseblondel"
        }
      },
      ca: {
        translation: {
          greeting: "Hola, sóc Jose Blondel",
          about: "Sobre Mi",
          aboutContent: "Sóc un desenvolupador web apassionat especialitzat en projectes moderns amb React i TypeScript. M'encanta crear llocs web elegants i fàcils d'usar, i aprendre noves tecnologies cada dia.",
          projects: "Projectes",
          projectsContent: [
            {
              name: "Web Portafoli",
              description: "Un portafoli net i responsive construït amb React, TypeScript i Tailwind CSS.",
              url: "https://github.com/joseblondel/portfolio"
            },
            {
              name: "App de Gestió de Tasques",
              description: "Una app de productivitat amb React, amb funcionalitats de drag-and-drop i sincronització en temps real.",
              url: "https://github.com/joseblondel/task-manager"
            }
          ],
          skills: "Habilitats",
          skillsContent: [
            "JavaScript / TypeScript",
            "React & Redux",
            "Node.js & Express",
            "Tailwind CSS",
            "Git & GitHub"
          ],
          experience: "Experiència",
          experienceContent: [
            {
              company: "TechCorp",
              role: "Desenvolupador Frontend",
              period: "Gen 2022 - Present",
              details: "Construint aplicacions web responsives usant React, TypeScript i Tailwind CSS."
            },
            {
              company: "Web Solutions",
              role: "Desenvolupador Junior",
              period: "Juny 2020 - Des 2021",
              details: "Treballant en eines internes i automatització de processos."
            }
          ],
          education: "Educació",
          educationContent: [
            {
              institution: "Universitat XYZ",
              degree: "Grau en Informàtica",
              period: "2017 - 2021"
            },
            {
              institution: "Bootcamp Online ABC",
              degree: "Desenvolupament Web Fullstack",
              period: "2022"
            }
          ],
          testimonials: "Testimonis",
          testimonialsContent: [
            {
              name: "Ana Pérez",
              text: "Jose és un desenvolupador excepcional amb gran atenció al detall."
            },
            {
              name: "Mark Johnson",
              text: "Professional i proactiu, molt recomanat."
            }
          ],
          contact: "Contacte",
          contactContent: "No dubtis a contactar-me per email o LinkedIn per col·laboracions o oportunitats laborals.",
          email: "jose@example.com",
          linkedin: "https://linkedin.com/in/joseblondel"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
