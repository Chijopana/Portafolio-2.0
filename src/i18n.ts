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
                    "greeting": "Hi, I'm Jose Blondel",
                    "about": "About Me",
                    "aboutContent": "I'm a passionate web developer who thrives on creating modern, efficient, and beautiful digital experiences. With a strong focus on React and TypeScript, I build scalable, high-performance applications that solve real-world problems. I believe in continuous learning and collaboration, always eager to embrace new technologies and methodologies. My portfolio showcases a range of projects from sleek portfolio websites to complex task management apps, all crafted with attention to detail and user experience. If you're looking for a dedicated developer who brings creativity, technical expertise, and a proactive mindset, let's connect and build something amazing together.",
                    "projects": "Projects",
                    "downloadCV": "Download CV",
                    "projectsContent": [
                        {
                            "name": "Portfolio Website",
                            "description": "A clean and responsive portfolio built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.",
                            "url": "https://github.com/joseblondel/portfolio"
                        },
                        {
                            "name": "Task Manager App",
                            "description": "A productivity app with React featuring drag-and-drop and real-time synchronization to help teams stay organized.",
                            "url": "https://github.com/joseblondel/task-manager"
                        },
                        {
                            "name": "Weather Dashboard",
                            "description": "An interactive weather forecast dashboard using APIs, built with React and styled with Tailwind CSS.",
                            "url": "https://github.com/joseblondel/weather-dashboard"
                        },
                        {
                            "name": "E-commerce Store",
                            "description": "A full-featured online store developed with Next.js and Stripe integration for smooth payment processing.",
                            "url": "https://github.com/joseblondel/ecommerce-store"
                        }
                    ],
                    skills: "Skills",
                    skillsContent: [
                        "JavaScript / TypeScript",
                        "React & Redux",
                        "Node.js & Express",
                        "Tailwind CSS",
                        "Git & GitHub",
                        "HTML5 & CSS3",
                        "REST APIs",
                        "Next.js",
                        "Docker",
                        "Testing (Jest, React Testing Library)",
                        "Webpack & Vite",
                        "Responsive Design",
                        "Basic CI/CD Concepts",
                        "Scrum / Agile Methodologies"
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
  contact: "Contact",
  contactContent: "Feel free to reach out via email or LinkedIn for collaborations or job opportunities.",
  email: "jose@example.com",
  linkedin: "https://linkedin.com/in/joseblondel",
  contactFormTitle: "Want to get in touch?",
  contactFormDescription: "Send me a message and I'll get back to you soon.",
  yourName: "Your name",
  yourEmail: "Your email",
  yourMessage: "Your message",
  sendMessage: "Send"
}
            },
            es: {
                translation: {
                    "greeting": "Hola, soy Jose Blondel",
                    "about": "Sobre mí",
                    "aboutContent": "Soy un desarrollador web apasionado que disfruta creando experiencias digitales modernas, eficientes y atractivas. Con un fuerte enfoque en React y TypeScript, construyo aplicaciones escalables y de alto rendimiento que resuelven problemas reales. Creo en el aprendizaje continuo y la colaboración, siempre con ganas de adoptar nuevas tecnologías y metodologías. Mi portafolio muestra una variedad de proyectos, desde sitios web elegantes hasta aplicaciones complejas de gestión de tareas, todos elaborados con atención al detalle y experiencia de usuario. Si buscas un desarrollador comprometido que aporte creatividad, conocimiento técnico y una mentalidad proactiva, conectemos y construyamos algo increíble juntos.",
                    "projects": "Proyectos",
                    "downloadCV": "Descargar CV",
                    "projectsContent": [
                        {
                            "name": "Sitio Web Portfolio",
                            "description": "Un portfolio limpio y responsivo construido con React, TypeScript y Tailwind CSS que muestra mis habilidades y proyectos.",
                            "url": "https://github.com/joseblondel/portfolio"
                        },
                        {
                            "name": "App de Gestión de Tareas",
                            "description": "Una aplicación de productividad con React que incluye funcionalidad de arrastrar y soltar y sincronización en tiempo real para equipos organizados.",
                            "url": "https://github.com/joseblondel/task-manager"
                        },
                        {
                            "name": "Panel del Clima",
                            "description": "Un panel interactivo de pronóstico del tiempo usando APIs, construido con React y estilizado con Tailwind CSS.",
                            "url": "https://github.com/joseblondel/weather-dashboard"
                        },
                        {
                            "name": "Tienda Online",
                            "description": "Una tienda online completa desarrollada con Next.js e integración de Stripe para pagos fluidos.",
                            "url": "https://github.com/joseblondel/ecommerce-store"
                        }
                    ],
                    skills: "Habilidades",
                    skillsContent: [
                        "JavaScript / TypeScript",
                        "React & Redux",
                        "Node.js & Express",
                        "Tailwind CSS",
                        "Git & GitHub",
                        "HTML5 & CSS3",
                        "APIs REST",
                        "Next.js",
                        "Docker",
                        "Testing (Jest, React Testing Library)",
                        "Webpack & Vite",
                        "Diseño responsivo",
                        "Conceptos básicos de CI/CD",
                        "Scrum / Metodologías ágiles"
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
                    contact: "Contacto",
  contactContent: "No dudes en escribirme por email o LinkedIn para colaboraciones o empleo.",
  email: "jose@example.com",
  linkedin: "https://linkedin.com/in/joseblondel",
  contactFormTitle: "¿Quieres ponerte en contacto?",
  contactFormDescription: "Envíame un mensaje y te responderé pronto.",
  yourName: "Tu nombre",
  yourEmail: "Tu correo",
  yourMessage: "Tu mensaje",
  sendMessage: "Enviar"
}
            },
            ca: {
                translation: {
                    "greeting": "Hola, sóc en Jose Blondel",
                    "about": "Sobre mi",
                    "aboutContent": "Sóc un desenvolupador web apassionat que gaudeix creant experiències digitals modernes, eficients i atractives. Amb un fort enfocament en React i TypeScript, construeixo aplicacions escalables i d'alt rendiment que resolen problemes reals. Crec en l'aprenentatge continu i la col·laboració, sempre amb ganes d'adoptar noves tecnologies i metodologies. El meu portafoli mostra una varietat de projectes, des de webs elegants fins a aplicacions complexes de gestió de tasques, tots elaborats amb atenció al detall i experiència d'usuari. Si busques un desenvolupador compromès que aporti creativitat, coneixement tècnic i una mentalitat proactiva, connectem i construïm alguna cosa increïble junts.",
                    "projects": "Projectes",
                    "downloadCV": "Descarregar CV",
                    "projectsContent": [
                        {
                            "name": "Web Portfolio",
                            "description": "Un portfolio net i responsiu construït amb React, TypeScript i Tailwind CSS que mostra les meves habilitats i projectes.",
                            "url": "https://github.com/joseblondel/portfolio"
                        },
                        {
                            "name": "App de Gestió de Tasques",
                            "description": "Una aplicació de productivitat amb React que inclou funcionalitat d'arrossegar i deixar anar i sincronització en temps real per a equips organitzats.",
                            "url": "https://github.com/joseblondel/task-manager"
                        },
                        {
                            "name": "Panell del Temps",
                            "description": "Un panell interactiu de previsió meteorològica utilitzant APIs, construït amb React i estilitzat amb Tailwind CSS.",
                            "url": "https://github.com/joseblondel/weather-dashboard"
                        },
                        {
                            "name": "Botiga Online",
                            "description": "Una botiga online completa desenvolupada amb Next.js i integració de Stripe per a pagaments fluids.",
                            "url": "https://github.com/joseblondel/ecommerce-store"
                        }
                    ],
                    skills: "Habilitats",
                    skillsContent: [
                        "JavaScript / TypeScript",
                        "React & Redux",
                        "Node.js & Express",
                        "Tailwind CSS",
                        "Git & GitHub",
                        "HTML5 & CSS3",
                        "APIs REST",
                        "Next.js",
                        "Docker",
                        "Testing (Jest, React Testing Library)",
                        "Webpack & Vite",
                        "Disseny responsiu",
                        "Conceptes bàsics de CI/CD",
                        "Scrum / Metodologies àgils"
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
                    contact: "Contacte",
  contactContent: "No dubtis en contactar-me per correu o LinkedIn per a col·laboracions o feina.",
  email: "jose@example.com",
  linkedin: "https://linkedin.com/in/joseblondel",
  contactFormTitle: "Vols posar-te en contacte?",
  contactFormDescription: "Envia'm un missatge i et respondré aviat.",
  yourName: "El teu nom",
  yourEmail: "El teu correu",
  yourMessage: "El teu missatge",
  sendMessage: "Enviar"
}
            }
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    })

export default i18n
