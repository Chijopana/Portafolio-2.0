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
                    "aboutContent": "I'm Jose Blondel, a junior web developer passionate about technology and continuous learning. I come from Venezuela and currently live in Catalonia, where I’ve carved my own path into the tech world. I don’t have a university degree, but I’ve built my training through a bootcamp, well-recognized courses like Google IT Support, and certifications from IBM, Amazon, plus practical projects on platforms like freeCodeCamp and The Odin Project.\n\nBesides programming, I’ve worked as a delivery driver, which taught me discipline, consistency, and how to handle real-life work environments. Today, I have experience with technologies such as JavaScript, React, Python, Node.js, Tailwind CSS, Git, and databases like MySQL and MongoDB. I see myself as self-taught, resilient, and growth-oriented.\n\nMy goal is clear: to land a job as a web developer, continue improving my technical and creative skills, and build a stable future doing what I love. I'm committed to learning, improving, and adding value.",
                    "projects": "Projects",
                    "downloadCV": "Download CV",
                    "projectsContent": [
                        {
                            name: "🧠 Word Guessing Game",
                            description: "Interactive word guessing game with difficulty levels (easy, normal, hard), animations, scoring system, and modern gameplay experience.",
                            url: "https://github.com/Chijopana/Buscapalabra",
                            github: "https://github.com/Chijopana/Buscapalabra"
                        },
                        {
                            name: "🧮 Modern Calculator",
                            description: "Calculator with modern design, smooth transitions, and scientific mode.",
                            url: "https://github.com/Chijopana/JavaScript-Calculator",
                            github: "https://github.com/Chijopana/JavaScript-Calculator"
                        },
                        {
                            name: "✂️ Rock Paper Scissors",
                            description: "Advanced version of the classic game with animations, scoring, and multiple modes.",
                            url: "https://github.com/Chijopana/rock-paper-scissors",
                            github: "https://github.com/Chijopana/rock-paper-scissors"
                        },
                        {
                            name: "🚢 Battleship",
                            description: "Strategy game like Battleship with special modes and custom bot logic.",
                            url: "https://github.com/Chijopana/battleship",
                            github: "https://github.com/Chijopana/battleship"
                        },
                        {
                            name: "💼 Portfolio Website",
                            description: "My personal developer site built with TypeScript, Tailwind, Framer Motion, and React.",
                            url: "https://www.joseblondel.dev/",
                            github: "https://github.com/Chijopana/Portafolio-2.0"
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
                            "company": "Personal Project",
                            "role": "Frontend Developer",
                            "period": "2024 - Present",
                            "details": "Designed and developed my professional portfolio using React, TypeScript, and Tailwind CSS. Implemented language switching, dark mode, and a working contact form. Fully optimized for mobile and accessibility."
                        },
                        {
                            "company": "AI & Web Development Bootcamp",
                            "role": "Fullstack Student",
                            "period": "2024",
                            "details": "Built web apps using JavaScript, Node.js, and MongoDB. Practiced agile collaboration, Git workflows, and both relational and NoSQL databases."
                        },
                        {
                            "company": "FreeCodeCamp / Coursera / IBM / AWS",
                            "role": "Self-taught Learner",
                            "period": "2024 - Present",
                            "details": "Earned certifications in web development, IT fundamentals, and generative AI. Gained proficiency in HTML, CSS, JavaScript, Python, and GitHub."
                        }
                    ],
                    education: "Education",
                    educationContent: [
                        {
                            "institution": "Google & Coursera",
                            "degree": "IT Support Professional Certificate",
                            "period": "2025"
                        },
                        {
                            "institution": "IBM",
                            "degree": "Foundations of Web Development",
                            "period": "2025"
                        },
                        {
                            "institution": "AWS",
                            "degree": "Foundations of Generative AI",
                            "period": "2024"
                        },
                        {
                            "institution": "freeCodeCamp",
                            "degree": "Certifications in HTML, CSS, JavaScript, Python and more",
                            "period": "2024 - 2025"
                        },
                        {
                            "institution": "Programming & AI Bootcamp",
                            "degree": "Fullstack + AI intensive training",
                            "period": "2024"
                        },
                        {
                            "institution": "High School – Venezuela",
                            "degree": "Science Track",
                            "period": "2019"
                        }
                    ],
                    contact: "Contact",
                    contactContent: "Feel free to reach out via email or LinkedIn for collaborations or job opportunities.",
                    location: "Spain, Barcelona",
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
                    "aboutContent": "Soy Jose Blondel, un desarrollador web junior apasionado por la tecnología y el aprendizaje constante. Vengo de Venezuela y actualmente vivo en Cataluña, donde he trazado mi propio camino hacia el mundo tech. No tengo una carrera universitaria, pero he construido mi formación a través de un bootcamp, cursos reconocidos como el de Google IT Support, certificaciones de IBM, Amazon y varios proyectos prácticos en plataformas como freeCodeCamp y The Odin Project.\n\nAdemás de programar, he trabajado como repartidor, lo que me ha enseñado disciplina, constancia y cómo manejarme en entornos reales. Hoy, tengo experiencia con tecnologías como JavaScript, React, Python, Node.js, Tailwind CSS, Git y bases de datos como MySQL y MongoDB. Me defino como una persona autodidacta, resiliente y enfocada en crecer.\n\nMi objetivo es claro: conseguir un puesto como desarrollador web, seguir mejorando mis habilidades técnicas y creativas, y construir un futuro estable que me permita trabajar en lo que amo. Estoy comprometido con aprender, mejorar y aportar valor.",
                    "projects": "Proyectos",
                    "downloadCV": "Descargar CV",
                    "projectsContent": [
                        {
                            name: "🧠 Adivina la Palabra",
                            description: "Juego interactivo para adivinar palabras con modos de dificultad (fácil, normal, difícil), animaciones, sistema de puntuación y experiencia moderna.",
                            url: "https://github.com/Chijopana/Buscapalabra",
                            github: "https://github.com/Chijopana/Buscapalabra"
                        },
                        {
                            name: "🧮 Calculadora Moderna",
                            description: "Calculadora con diseño moderno, transiciones suaves y modo científico.",
                            url: "https://github.com/Chijopana/JavaScript-Calculator",
                            github: "https://github.com/Chijopana/JavaScript-Calculator"
                        },
                        {
                            name: "✂️ Piedra Papel Tijeras",
                            description: "Versión avanzada del clásico juego, con animaciones, puntuación y diferentes modos.",
                            url: "https://github.com/Chijopana/rock-paper-scissors",
                            github: "https://github.com/Chijopana/rock-paper-scissors"
                        },
                        {
                            name: "🚢 Battleship",
                            description: "Juego de estrategia tipo Hundir la flota, con modos especiales y lógica del bot personalizada.",
                            url: "https://github.com/Chijopana/battleship",
                            github: "https://github.com/Chijopana/battleship"
                        },
                        {
                            name: "💼 Portafolio Web",
                            description: "Mi sitio personal como desarrollador. Hecho con TypeScript, Tailwind, Framer Motion y React.",
                            url: "https://www.joseblondel.dev/",
                            github: "https://github.com/Chijopana/Portafolio-2.0"
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
                            company: "Proyecto personal",
                            role: "Desarrollador Frontend",
                            period: "2024 - Presente",
                            details: "Diseñé y desarrollé mi portafolio profesional con React, TypeScript y Tailwind CSS. Implementé cambio de idioma, modo oscuro, y formulario funcional. Todo optimizado para móviles y accesibilidad."
                        },
                        {
                            company: "Bootcamp IA y Desarrollo Web",
                            role: "Estudiante Fullstack",
                            period: "2024",
                            details: "Completé proyectos web con JavaScript, Node.js y MongoDB. Aprendí buenas prácticas de Git, trabajo en equipo ágil y bases de datos NoSQL y relacionales."
                        },
                        {
                            company: "FreeCodeCamp / Coursera / IBM / AWS",
                            role: "Aprendiz autodidacta",
                            period: "2024 - Presente",
                            details: "Certificaciones en desarrollo web, fundamentos de TI y herramientas de IA generativa. Dominio de HTML, CSS, JavaScript, Python y GitHub."
                        }
                    ],
                    education: "Educación",
                    educationContent: [
                        {
                            "institution": "Google & Coursera",
                            "degree": "Certificación Profesional de Soporte IT",
                            "period": "2025"
                        },
                        {
                            "institution": "IBM",
                            "degree": "Fundamentos del Desarrollo Web",
                            "period": "2025"
                        },
                        {
                            "institution": "AWS",
                            "degree": "Fundamentos de IA Generativa",
                            "period": "2024"
                        },
                        {
                            "institution": "freeCodeCamp",
                            "degree": "Certificaciones en HTML, CSS, JavaScript, Python y más",
                            "period": "2024 - 2025"
                        },
                        {
                            "institution": "Bootcamp de Programación e IA",
                            "degree": "Formación intensiva fullstack + IA",
                            "period": "2024"
                        },
                        {
                            "institution": "Bachillerato – Venezuela",
                            "degree": "Mención Ciencias",
                            "period": "2019"
                        }
                    ],
                    contact: "Contacto",
                    contactContent: "No dudes en escribirme por email o LinkedIn para colaboraciones o empleo.",
                    location: "España, Barcelona",
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
                    "aboutContent": "Sóc en Jose Blondel, un desenvolupador web júnior apassionat per la tecnologia i l'aprenentatge constant. Vinc de Veneçuela i actualment visc a Catalunya, on he traçat el meu propi camí cap al món tecnològic. No tinc una carrera universitària, però he format la meva preparació a través d’un bootcamp, cursos reconeguts com el de Google IT Support, certificacions d’IBM i Amazon, i projectes pràctics a plataformes com freeCodeCamp i The Odin Project.\n\nA més de programar, he treballat com a repartidor, cosa que m'ha ensenyat disciplina, constància i com moure'm en entorns reals. Avui dia, tinc experiència amb tecnologies com JavaScript, React, Python, Node.js, Tailwind CSS, Git i bases de dades com MySQL i MongoDB. Em considero autodidacta, resilient i amb ganes de créixer.\n\nEl meu objectiu és clar: aconseguir una feina com a desenvolupador web, continuar millorant les meves habilitats tècniques i creatives, i construir un futur estable fent el que m’agrada. Estic compromès amb aprendre, millorar i aportar valor.",
                    "projects": "Projectes",
                    "downloadCV": "Descarregar CV",
                    "projectsContent": [
                        {
                            name: "🧠 Joc d'Endevinar Paraules",
                            description: "Joc interactiu per endevinar paraules amb nivells de dificultat (fàcil, normal, difícil), animacions, sistema de puntuació i experiència moderna.",
                            url: "https://github.com/Chijopana/Buscapalabra",
                            github: "https://github.com/Chijopana/Buscapalabra"
                        },
                        {
                            name: "🧮 Calculadora Moderna",
                            description: "Calculadora amb disseny modern, transicions suaus i mode científic.",
                            url: "https://github.com/Chijopana/JavaScript-Calculator",
                            github: "https://github.com/Chijopana/JavaScript-Calculator"
                        },
                        {
                            name: "✂️ Pedra Paper Tisores",
                            description: "Versió avançada del joc clàssic, amb animacions, puntuació i diferents modes.",
                            url: "https://github.com/Chijopana/rock-paper-scissors",
                            github: "https://github.com/Chijopana/rock-paper-scissors"
                        },
                        {
                            name: "🚢 Battleship",
                            description: "Joc d'estratègia tipus Hundir la flota, amb modes especials i lògica personalitzada del bot.",
                            url: "https://github.com/Chijopana/battleship",
                            github: "https://github.com/Chijopana/battleship"
                        },
                        {
                            name: "💼 Portafolis Web",
                            description: "El meu lloc personal com a desenvolupador. Fet amb TypeScript, Tailwind, Framer Motion i React.",
                            url: "https://www.joseblondel.dev/",
                            github: "https://github.com/Chijopana/Portafolio-2.0"
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
                            "company": "Projecte personal",
                            "role": "Desenvolupador Frontend",
                            "period": "2024 - Present",
                            "details": "Vaig dissenyar i desenvolupar el meu portafoli professional amb React, TypeScript i Tailwind CSS. Amb suport multilingüe, mode fosc i formulari de contacte funcional. Totalment optimitzat per a mòbils i accessibilitat."
                        },
                        {
                            "company": "Bootcamp d’IA i Desenvolupament Web",
                            "role": "Estudiant Fullstack",
                            "period": "2024",
                            "details": "Creació de projectes web amb JavaScript, Node.js i MongoDB. Bones pràctiques amb Git, treball àgil i bases de dades relacionals i NoSQL."
                        },
                        {
                            "company": "FreeCodeCamp / Coursera / IBM / AWS",
                            "role": "Autodidacta",
                            "period": "2024 - Present",
                            "details": "Certificacions en desenvolupament web, fonaments de TI i IA generativa. Coneixements d'HTML, CSS, JavaScript, Python i GitHub."
                        }
                    ],
                    education: "Educació",
                    educationContent: [
                        {
                            "institution": "Google & Coursera",
                            "degree": "Certificat Professional de Suport IT",
                            "period": "2025"
                        },
                        {
                            "institution": "IBM",
                            "degree": "Fonaments del Desenvolupament Web",
                            "period": "2025"
                        },
                        {
                            "institution": "AWS",
                            "degree": "Fonaments de la IA Generativa",
                            "period": "2024"
                        },
                        {
                            "institution": "freeCodeCamp",
                            "degree": "Certificats en HTML, CSS, JavaScript, Python i més",
                            "period": "2024 - 2025"
                        },
                        {
                            "institution": "Bootcamp de Programació i IA",
                            "degree": "Formació intensiva fullstack + IA",
                            "period": "2024"
                        },
                        {
                            "institution": "Batxillerat – Veneçuela",
                            "degree": "Menció Ciències",
                            "period": "2019"
                        }
                    ],
                    contact: "Contacte",
                    contactContent: "No dubtis en contactar-me per correu o LinkedIn per a col·laboracions o feina.",
                    location: "Espanya, Barcelona",
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
