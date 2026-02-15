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
                    "greeting": "Jose Blondel — Full Stack Developer | React • TypeScript • Node.js",
                    "about": "About Me",
                    "aboutContent": "I'm Jose Blondel, a self-taught Full-Stack Developer with 3+ years of continuous learning and hands-on experience building production-ready web applications. Specialized in React, TypeScript, and Node.js, with proven skill in performance optimization, accessibility, and building scalable applications.\n\n🎯 What I Bring:\n✓ Production-level React & TypeScript development\n✓ Full-stack capabilities (Node.js, Express, MongoDB, PostgreSQL)\n✓ Performance optimization & SEO best practices\n✓ WCAG 2.1 AA Accessibility compliance\n✓ Design system implementation (Tailwind CSS, custom components)\n✓ Agile/Scrum methodologies & Git workflows\n✓ Fast learner, adaptable to new technologies\n\n🚀 What I've Built: 8+ deployed applications across React, Angular, and full-stack technologies. Started from Venezuela without a formal CS degree—proved self-reliance, determination, and commitment to quality. Currently studying Web Development at IOC (Professional Degree) while actively building in the Spanish tech community.\n\n💡 Open to: Full-time junior/mid-level roles, contract work, or freelance projects in Frontend, Full-Stack, or purpose-driven companies. Remote-friendly, based in Barcelona, Spain.",
                    "projects": "Featured Projects",
                    "downloadCV": "Download CV",
                    "whyHireMe": "Why Hire Me?",
                    "whyHireMeContent": [
                        {
                            title: "Production-Ready Code",
                            description: "All projects follow best practices: clean architecture, error handling, testing, and performance optimization. Not just pretty interfaces—solid software engineering."
                        },
                        {
                            title: "Full-Stack Versatility",
                            description: "From responsive frontends to backend APIs. Handle databases, authentication, deployment. Complete end-to-end development capability."
                        },
                        {
                            title: "Growth Mindset",
                            description: "Self-taught developer who mastered multiple frameworks, languages, and DevOps concepts independently. Quick learner, never stops growing."
                        },
                        {
                            title: "User-Centric Focus",
                            description: "Every project optimized for performance, accessibility, and UX. Understand that code exists to serve users, not just to exist."
                        }
                    ],
                    "projectsContent": [
                        {
                            name: "🧠 Word Guessing Game",
                            description: "Interactive word guessing game with multiple difficulty levels, smooth animations, and real-time scoring. Built with Vanilla JavaScript for optimal performance.",
                            url: "https://buscapalabra.vercel.app/",
                            github: "https://github.com/Chijopana/Buscapalabra"
                        },
                        {
                            name: "🧮 Modern Calculator",
                            description: "Feature-rich calculator with scientific mode, persistent state, and accessible UI. Demonstrates mastery of DOM manipulation and CSS animations.",
                            url: "https://java-script-calculator-gzhd.vercel.app/",
                            github: "https://github.com/Chijopana/JavaScript-Calculator"
                        },
                        {
                            name: "✂️ Advanced Rock Paper Scissors",
                            description: "Multiplayer game with AI opponent, real-time scoring, and dark/light mode. Built with React showing state management and game logic expertise.",
                            url: "https://rock-paper-scissors-jade-six.vercel.app/",
                            github: "https://github.com/Chijopana/rock-paper-scissors"
                        },
                        {
                            name: "🚢 Battleship Strategy Game",
                            description: "Complex strategy game with custom AI logic, turn-based mechanics, and responsive board layout. Showcases algorithmic thinking and strategic gameplay.",
                            url: "https://battleship-web-game.netlify.app/",
                            github: "https://github.com/Chijopana/battleship"
                        },
                        {
                            name: "💼 Professional Portfolio",
                            description: "This website! Built with React, TypeScript, Tailwind CSS, and Framer Motion. Features multi-language support, dark mode, contact form, and SEO optimization. Production-ready.",
                            url: "https://www.joseblondel.dev/",
                            github: "https://github.com/Chijopana/Portafolio-2.0"
                        },
                        {
                            name: "🛒 E-Commerce Platform",
                            description: "Full-featured online store built with Angular and Angular Material. Includes product catalog, shopping cart, checkout flow, and payment integration. Professional UI/UX.",
                            url: "https://chijopana.github.io/E-commerce/",
                            github: "https://github.com/Chijopana/E-commerce"
                        },
                        {
                            name: "🗂️ Task Manager Application",
                            description: "Full-stack application with JWT authentication, secure login/registration. Built with Node.js, Express, MongoDB, and React. Demonstrates backend expertise.",
                            url: "https://task-manager-front-five.vercel.app/",
                            github: "https://github.com/Chijopana/Task-Manager"
                        },
                        {
                            name: "🌤️ Real-Time Weather App",
                            description: "Advanced weather application using Next.js, API integration, and dynamic backgrounds. Features hourly/daily forecasts, draggable carousels, and location-based data.",
                            url: "https://weather-app-4gmb.vercel.app/",
                            github: "https://github.com/Chijopana/weather-app"
                        }
                    ],
                    skills: "Technical Skills",
                    skillsContent: [
                        "React / React Hooks",
                        "TypeScript / JavaScript (ES6+)",
                        "Next.js / Vite",
                        "Node.js & Express.js",
                        "MongoDB & PostgreSQL",
                        "Tailwind CSS / CSS3 / SCSS",
                        "Framer Motion / Animations",
                        "RESTful APIs & GraphQL",
                        "Git & GitHub (Advanced)",
                        "Docker & Containerization",
                        "Testing (Jest, React Testing Library)",
                        "Webpack & Build Tools",
                        "SEO & Web Performance",
                        "Accessibility (WCAG 2.1)",
                        "Agile & Scrum",
                        "Angular / Vue.js"
                    ],
                    experience: "Professional Experience",
                    experienceContent: [
                        {
                            "company": "Portfolio Development",
                            "role": "Lead Developer",
                            "period": "2024 - Present",
                            "details": "Designed and developed professional portfolio using React, TypeScript, and Tailwind CSS. Implemented multi-language support (EN/ES/CA), dark mode toggle, working contact form, and comprehensive SEO optimization. Fully compliant with WCAG 2.1 AA accessibility standards."
                        },
                        {
                            "company": "Full-Stack Bootcamp - AI & Web Development",
                            "role": "Fullstack Developer (Student)",
                            "period": "2024",
                            "details": "Completed intensive training in fullstack web development. Built multiple projects using JavaScript, Node.js, and MongoDB. Practiced agile collaboration, Git workflows, and both relational and NoSQL databases. Collaborated with teams on real-world scenarios."
                        },
                        {
                            "company": "Self-Directed Learning - FreeCodeCamp, Coursera, IBM, AWS",
                            "role": "Continuous Learner",
                            "period": "2024 - Present",
                            "details": "Earned multiple certifications in web development, IT fundamentals, and generative AI. Gained proficiency in HTML, CSS, JavaScript, Python, React, and Git. Completed 500+ coding challenges and projects."
                        },
                        {
                            "company": "Higher Vocational Training - IOC (Spain)",
                            "role": "Web Application Development Student",
                            "period": "Sep 2025 - 2027",
                            "details": "Pursuing professional degree in Web Application Development. Focus on building dynamic, responsive applications using modern technologies. Coverage of backend fundamentals, databases, security, and deployment best practices."
                        }
                    ],
                    education: "Education & Certifications",
                    educationContent: [
                        {
                            "institution": "IOC - Higher Vocational Training",
                            "degree": "Cycle Superior en Desarrollo de Aplicaciones Web (DAW)",
                            "period": "Sep 2025 - 2027"
                        },
                        {
                            "institution": "Institut de Educación Online (IOE)",
                            "degree": "Web Page Design and Publishing Certificate",
                            "period": "Feb 2025 - Sep 2025"
                        },
                        {
                            "institution": "Google & Coursera",
                            "degree": "IT Support Professional Certificate",
                            "period": "2025"
                        },
                        {
                            "institution": "Meta & Coursera",
                            "degree": "Front-End Development Professional Certificate",
                            "period": "2025"
                        },
                        {
                            "institution": "IBM",
                            "degree": "Foundations of Web Development",
                            "period": "2025"
                        },
                        {
                            "institution": "AWS Academy",
                            "degree": "Foundations of Generative AI",
                            "period": "2024"
                        },
                        {
                            "institution": "freeCodeCamp",
                            "degree": "Responsive Web Design • JavaScript • React • Backend Development",
                            "period": "2024 - 2025"
                        },
                        {
                            "institution": "Universidad Santiago Mariño - Venezuela",
                            "degree": "Computer Engineering (4 semesters completed)",
                            "period": "2019 - 2021"
                        }
                    ],
                    contact: "Let's Connect",
                    contactContent: "Open to discussing new opportunities, collaborations, or technical projects. Get in touch via email, LinkedIn, or drop a message below.",
                    location: "Barcelona, Spain",
                    contactFormTitle: "Send me a message",
                    contactFormDescription: "I'll respond within 24 hours. Let's build something amazing together.",
                    yourName: "Your name",
                    yourEmail: "Your email",
                    yourMessage: "Your message",
                    sendMessage: "Send Message"
                }
            },
            es: {
                translation: {
                    "greeting": "Jose Blondel — Desarrollador Full Stack | React • TypeScript • Node.js",
                    "about": "Sobre mí",
                    "aboutContent": "Soy Jose Blondel, un desarrollador Full-Stack autodidacta con 3+ años de aprendizaje continuo y experiencia práctica construyendo aplicaciones web listas para producción. Especializado en React, TypeScript y Node.js, con experiencia comprobada en optimización de rendimiento, cumplimiento de accesibilidad y construcción de arquitecturas escalables.\n\n🎯 Lo que aporto:\n✓ Desarrollo profesional en React & TypeScript\n✓ Capacidades Full-Stack (Node.js, Express, MongoDB, PostgreSQL)\n✓ Optimización de rendimiento y mejores prácticas de SEO\n✓ Cumplimiento de Accesibilidad WCAG 2.1 AA\n✓ Implementación de sistemas de diseño (Tailwind CSS, componentes personalizados)\n✓ Metodologías Agile/Scrum y flujos Git\n✓ Aprendiz rápido, capaz de adaptarse a nuevas tecnologías\n\n🚀 Lo que he construido: 8+ aplicaciones desplegadas en React, Angular y tecnologías Full-Stack. Empecé en Venezuela sin título de CS formal—demostré autosuficiencia, determinación y compromiso con la calidad. Actualmente estudiando Desarrollo Web en IOC (Grado Profesional) mientras construyo activamente en la comunidad tech española.\n\n💡 Abierto a: Roles junior/mid-level a tiempo completo, trabajo por contrato o proyectos freelance en Frontend, Full-Stack o empresas con propósito. Remoto-friendly, ubicado en Barcelona, España.",
                    "projects": "Proyectos Destacados",
                    "downloadCV": "Descargar CV",
                    "whyHireMe": "¿Por qué contratarme?",
                    "whyHireMeContent": [
                        {
                            title: "Código Listo para Producción",
                            description: "Todos mis proyectos siguen mejores prácticas: arquitectura limpia, manejo de errores, testing, y optimización. No solo interfaces bonitas—ingeniería de software sólida."
                        },
                        {
                            title: "Versatilidad Full-Stack",
                            description: "Desde frontends responsivos hasta APIs backend. Manejo de bases de datos, autenticación y despliegue. Capacidad completa de desarrollo end-to-end."
                        },
                        {
                            title: "Mentalidad de Crecimiento",
                            description: "Desarrollador autodidacta que ha dominado múltiples frameworks y lenguajes de forma independiente. Aprendiz rápido, nunca deja de crecer."
                        },
                        {
                            title: "Enfoque Centrado en el Usuario",
                            description: "Cada proyecto optimizado para rendimiento, accesibilidad y UX. Entiendo que el código existe para servir usuarios, no solo para existir."
                        }
                    ],
                    "projectsContent": [
                        {
                            name: "🧠 Juego de Adivinanza de Palabras",
                            description: "Juego interactivo con múltiples niveles de dificultad, animaciones suaves y puntuación en tiempo real. Construido con JavaScript vanilla para rendimiento óptimo.",
                            url: "https://buscapalabra.vercel.app/",
                            github: "https://github.com/Chijopana/Buscapalabra"
                        },
                        {
                            name: "🧮 Calculadora Moderna",
                            description: "Calculadora con modo científico, estado persistente e interfaz accesible. Demuestra dominio de manipulación del DOM y animaciones CSS.",
                            url: "https://java-script-calculator-gzhd.vercel.app/",
                            github: "https://github.com/Chijopana/JavaScript-Calculator"
                        },
                        {
                            name: "✂️ Piedra Papel Tijeras Avanzado",
                            description: "Juego multijugador con oponente IA, puntuación en tiempo real y modo oscuro/claro. Construido con React mostrando dominio de gestión de estado y lógica de juegos.",
                            url: "https://rock-paper-scissors-jade-six.vercel.app/",
                            github: "https://github.com/Chijopana/rock-paper-scissors"
                        },
                        {
                            name: "🚢 Juego de Estrategia Battleship",
                            description: "Juego de estrategia con lógica IA personalizada, mecánicas por turnos y layout responsivo. Demuestra pensamiento algorítmico y jugabilidad estratégica.",
                            url: "https://battleship-web-game.netlify.app/",
                            github: "https://github.com/Chijopana/battleship"
                        },
                        {
                            name: "💼 Portafolio Profesional",
                            description: "¡Este sitio web! Construido con React, TypeScript, Tailwind CSS y Framer Motion. Incluye soporte multi-idioma, modo oscuro, formulario de contacto y optimización SEO. Listo para producción.",
                            url: "https://www.joseblondel.dev/",
                            github: "https://github.com/Chijopana/Portafolio-2.0"
                        },
                        {
                            name: "🛒 Plataforma de E-Commerce",
                            description: "Tienda online completa construida con Angular y Angular Material. Incluye catálogo de productos, carrito de compras, flujo de pago e integración de pagos. UI/UX profesional.",
                            url: "https://chijopana.github.io/E-commerce/",
                            github: "https://github.com/Chijopana/E-commerce"
                        },
                        {
                            name: "🗂️ Aplicación Gestor de Tareas",
                            description: "Aplicación Full-Stack con autenticación JWT, login y registro seguros. Construida con Node.js, Express, MongoDB y React. Demuestra experiencia en backend.",
                            url: "https://task-manager-front-five.vercel.app/",
                            github: "https://github.com/Chijopana/Task-Manager"
                        },
                        {
                            name: "🌤️ Aplicación del Clima en Tiempo Real",
                            description: "Aplicación avanzada del clima usando Next.js, integración de APIs y fondos dinámicos. Incluye pronósticos por hora/día, carruseles arrastrables y datos basados en ubicación.",
                            url: "https://weather-app-4gmb.vercel.app/",
                            github: "https://github.com/Chijopana/weather-app"
                        }
                    ],
                    skills: "Habilidades Técnicas",
                    skillsContent: [
                        "React / React Hooks",
                        "TypeScript / JavaScript (ES6+)",
                        "Next.js / Vite",
                        "Node.js & Express.js",
                        "MongoDB & PostgreSQL",
                        "Tailwind CSS / CSS3 / SCSS",
                        "Framer Motion / Animaciones",
                        "APIs REST & GraphQL",
                        "Git & GitHub (Avanzado)",
                        "Docker & Contenedores",
                        "Testing (Jest, React Testing Library)",
                        "Webpack & Herramientas de Build",
                        "SEO & Rendimiento Web",
                        "Accesibilidad (WCAG 2.1)",
                        "Agile & Scrum",
                        "Angular / Vue.js"
                    ],
                    experience: "Experiencia Profesional",
                    experienceContent: [
                        {
                            company: "Desarrollo de Portafolio",
                            role: "Desarrollador Principal",
                            period: "2024 - Presente",
                            details: "Diseñé y desarrollé portafolio profesional usando React, TypeScript y Tailwind CSS. Implementé soporte multidioma (EN/ES/CA), toggle de modo oscuro, formulario de contacto funcional y optimización SEO completa. Completamente conforme a estándares WCAG 2.1 AA."
                        },
                        {
                            company: "Bootcamp Full-Stack - IA y Desarrollo Web",
                            role: "Desarrollador Fullstack (Estudiante)",
                            period: "2024",
                            details: "Completé entrenamiento intensivo en desarrollo web fullstack. Construí múltiples proyectos usando JavaScript, Node.js y MongoDB. Practiqué colaboración ágil, flujos Git, y bases de datos relacionales y NoSQL. Colaboré con equipos en escenarios reales."
                        },
                        {
                            company: "Aprendizaje Autodidacta - FreeCodeCamp, Coursera, IBM, AWS",
                            role: "Aprendiz Continuo",
                            period: "2024 - Presente",
                            details: "Obtuve múltiples certificaciones en desarrollo web, fundamentos de TI e IA generativa. Dominio de HTML, CSS, JavaScript, Python, React y Git. Completé 500+ desafíos de codificación y proyectos."
                        },
                        {
                            company: "Ciclo Formativo Superior - IOC (España)",
                            role: "Estudiante de Desarrollo de Aplicaciones Web",
                            period: "Sep 2025 - 2027",
                            details: "Cursando grado profesional en Desarrollo de Aplicaciones Web. Enfoque en construcción de aplicaciones dinámicas y responsivas. Cobertura de fundamentos backend, bases de datos, seguridad y mejores prácticas de despliegue."
                        }
                    ],
                    education: "Educación & Certificaciones",
                    educationContent: [
                        {
                            "institution": "IOC - Ciclo Formativo Superior",
                            "degree": "Desarrollo de Aplicaciones Web (DAW)",
                            "period": "Sep 2025 - 2027"
                        },
                        {
                            "institution": "Instituto de Educación Online (IOE)",
                            "degree": "Certificado de Confección y Publicación de Páginas Web",
                            "period": "Feb 2025 - Sep 2025"
                        },
                        {
                            "institution": "Google & Coursera",
                            "degree": "Certificación Profesional de Soporte IT",
                            "period": "2025"
                        },
                        {
                            "institution": "Meta & Coursera",
                            "degree": "Certificación Profesional de Desarrollo Front-End",
                            "period": "2025"
                        },
                        {
                            "institution": "IBM",
                            "degree": "Fundamentos del Desarrollo Web",
                            "period": "2025"
                        },
                        {
                            "institution": "AWS Academy",
                            "degree": "Fundamentos de IA Generativa",
                            "period": "2024"
                        },
                        {
                            "institution": "freeCodeCamp",
                            "degree": "Diseño Web Responsivo • JavaScript • React • Desarrollo Backend",
                            "period": "2024 - 2025"
                        },
                        {
                            "institution": "Universidad Santiago Mariño - Venezuela",
                            "degree": "Ingeniería Informática (4 semestres cursados)",
                            "period": "2019 - 2021"
                        }
                    ],
                    contact: "Conectemos",
                    contactContent: "Abierto a discutir nuevas oportunidades, colaboraciones o proyectos técnicos. Contactame por email, LinkedIn o deja un mensaje abajo.",
                    location: "Barcelona, España",
                    contactFormTitle: "Envíame un mensaje",
                    contactFormDescription: "Responderé dentro de 24 horas. Construyamos algo increíble juntos.",
                    yourName: "Tu nombre",
                    yourEmail: "Tu correo",
                    yourMessage: "Tu mensaje",
                    sendMessage: "Enviar Mensaje"
                }
            },
            ca: {
                translation: {
                    "greeting": "Jose Blondel — Desenvolupador Full Stack | React • TypeScript • Node.js",
                    "about": "Sobre mi",
                    "aboutContent": "Sóc en Jose Blondel, un desenvolupador Full-Stack autodidacta amb 3+ anys d'aprenentatge continu i experiència pràctica construint aplicacions web listes per a producció. Especialitzat en React, TypeScript i Node.js, amb experiència comprovada en optimització de rendiment, compliment d'accessibilitat i construcció d'arquitectures escalables.\n\n🎯 El que aporto:\n✓ Desenvolupament professional en React & TypeScript\n✓ Capacitats Full-Stack (Node.js, Express, MongoDB, PostgreSQL)\n✓ Optimització de rendiment i millors pràctiques de SEO\n✓ Compliment d'Accessibilitat WCAG 2.1 AA\n✓ Implementació de sistemes de disseny (Tailwind CSS, components personalitzats)\n✓ Metodologies Agile/Scrum i fluxos Git\n✓ Aprenent ràpid, capaç d'adaptar-se a noves tecnologies\n\n🚀 El que he construït: 8+ aplicacions desplegades en React, Angular i tecnologies Full-Stack. Vaig començar a Veneçuela sense títol de CS formal—vaig demostrar autosuficiència, determinació i compromís amb la qualitat. Actualment estudiant Desenvolupament Web a l'IOC (Grau Professional) mentre construeixo activament a la comunitat tech catalana.\n\n💡 Obert a: Rols junior/mid-level a temps complet, treball per contracte o projectes freelance en Frontend, Full-Stack o empreses amb propòsit. Remote-friendly, ubicat a Barcelona, Espanya.",
                    "projects": "Projectes Destacats",
                    "downloadCV": "Descarregar CV",
                    "whyHireMe": "Per què contractar-me?",
                    "whyHireMeContent": [
                        {
                            title: "Codi Llest per a Producció",
                            description: "Tots els meus projectes segueixen millors pràctiques: arquitectura neta, maneig d'errors, testing i optimització. No només interfícies boniques—enginyeria de software sòlida."
                        },
                        {
                            title: "Versatilitat Full-Stack",
                            description: "Des de frontends responsius fins a APIs backend. Maneig de bases de dades, autenticació i desplegament. Capacitat completa de desenvolupament end-to-end."
                        },
                        {
                            title: "Mentalitat de Creixement",
                            description: "Desenvolupador autodidacta que ha dominat múltiples frameworks i llenguatges de forma independent. Aprenent ràpid, mai deixa de créixer."
                        },
                        {
                            title: "Enfocament Centrat en l'Usuari",
                            description: "Cada projecte optimitzat per rendiment, accessibilitat i UX. Entenc que el codi existeix per servir usuaris, no només per existir."
                        }
                    ],
                    "projectsContent": [
                        {
                            name: "🧠 Joc d'Endevinar Paraules",
                            description: "Joc interactiu amb múltiples nivells de dificultat, animacions suaus i puntuació en temps real. Construït amb JavaScript vanilla per rendiment òptim.",
                            url: "https://buscapalabra.vercel.app/",
                            github: "https://github.com/Chijopana/Buscapalabra"
                        },
                        {
                            name: "🧮 Calculadora Moderna",
                            description: "Calculadora amb mode científic, estat persistent i interfície accessible. Demostra domini de manipulació del DOM i animacions CSS.",
                            url: "https://java-script-calculator-gzhd.vercel.app/",
                            github: "https://github.com/Chijopana/JavaScript-Calculator"
                        },
                        {
                            name: "✂️ Pedra Paper Tisores Avançat",
                            description: "Joc multijugador amb oponent IA, puntuació en temps real i mode fosc/clar. Construït amb React mostrant domini de gestió d'estat i lògica de jocs.",
                            url: "https://rock-paper-scissors-jade-six.vercel.app/",
                            github: "https://github.com/Chijopana/rock-paper-scissors"
                        },
                        {
                            name: "🚢 Joc d'Estratègia Battleship",
                            description: "Joc d'estratègia amb lògica IA personalitzada, mecàniques per torns i layout responsiu. Demostra pensament algorítmic i jugabilitat estratègica.",
                            url: "https://battleship-web-game.netlify.app/",
                            github: "https://github.com/Chijopana/battleship"
                        },
                        {
                            name: "💼 Portafolis Professional",
                            description: "¡Aquest lloc web! Construït amb React, TypeScript, Tailwind CSS i Framer Motion. Inclou suport multiidioma, mode fosc, formulari de contacte i optimització SEO. Llest per a producció.",
                            url: "https://www.joseblondel.dev/",
                            github: "https://github.com/Chijopana/Portafolio-2.0"
                        },
                        {
                            name: "🛒 Plataforma E-Commerce",
                            description: "Botiga online completa construïda amb Angular i Angular Material. Inclou catàleg de productes, cistella de compra, flux de pagament i integració de pagaments. UI/UX professional.",
                            url: "https://chijopana.github.io/E-commerce/",
                            github: "https://github.com/Chijopana/E-commerce"
                        },
                        {
                            name: "🗂️ Aplicació Gestor de Tasques",
                            description: "Aplicació Full-Stack amb autenticació JWT, login i registre segurs. Construïda amb Node.js, Express, MongoDB i React. Demostra experiència en backend.",
                            url: "https://task-manager-front-five.vercel.app/",
                            github: "https://github.com/Chijopana/Task-Manager"
                        },
                        {
                            name: "🌤️ Aplicació del Temps en Temps Real",
                            description: "Aplicació avançada del temps usant Next.js, integració d'APIs i fons dinàmics. Inclou pronòstics per hora/dia, carrusels arrossegables i dades basades en ubicació.",
                            url: "https://weather-app-4gmb.vercel.app/",
                            github: "https://github.com/Chijopana/weather-app"
                        }
                    ],
                    skills: "Habilitats Tècniques",
                    skillsContent: [
                        "React / React Hooks",
                        "TypeScript / JavaScript (ES6+)",
                        "Next.js / Vite",
                        "Node.js & Express.js",
                        "MongoDB & PostgreSQL",
                        "Tailwind CSS / CSS3 / SCSS",
                        "Framer Motion / Animacions",
                        "APIs REST & GraphQL",
                        "Git & GitHub (Avançat)",
                        "Docker & Contenidors",
                        "Testing (Jest, React Testing Library)",
                        "Webpack & Eines de Build",
                        "SEO & Rendiment Web",
                        "Accessibilitat (WCAG 2.1)",
                        "Agile & Scrum",
                        "Angular / Vue.js"
                    ],
                    experience: "Experiència Professional",
                    experienceContent: [
                        {
                            company: "Desenvolupament de Portafolis",
                            role: "Desenvolupador Principal",
                            period: "2024 - Present",
                            details: "Vaig dissenyar i desenvolupar portafolis professional usant React, TypeScript i Tailwind CSS. Vaig implementar suport multiidioma (EN/ES/CA), toggle de mode fosc, formulari de contacte funcional i optimització SEO completa. Completament conforme als estàndards WCAG 2.1 AA."
                        },
                        {
                            company: "Bootcamp Full-Stack - IA i Desenvolupament Web",
                            role: "Desenvolupador Fullstack (Estudiant)",
                            period: "2024",
                            details: "Vaig completar entrenament intensiu en desenvolupament web fullstack. Vaig construir múltiples projectes usant JavaScript, Node.js i MongoDB. Vaig practicar col·laboració àgil, fluxos Git, i bases de dades relacionals i NoSQL. Vaig col·laborar amb equips en escenaris reals."
                        },
                        {
                            company: "Aprenentatge Autodidacta - FreeCodeCamp, Coursera, IBM, AWS",
                            role: "Aprenent Continu",
                            period: "2024 - Present",
                            details: "Vaig obtenir múltiples certificacions en desenvolupament web, fonaments de TI i IA generativa. Domini de HTML, CSS, JavaScript, Python, React i Git. Vaig completar 500+ desafiaments de codificació i projectes."
                        },
                        {
                            company: "Cicle Formatiu Superior - IOC (Espanya)",
                            role: "Estudiant de Desenvolupament d'Aplicacions Web",
                            period: "Set 2025 - 2027",
                            details: "Cursant grau professional en Desenvolupament d'Aplicacions Web. Enfocament en construcció d'aplicacions dinàmiques i responsives. Cobertura de fonaments de backend, bases de dades, seguretat i millors pràctiques de desplegament."
                        }
                    ],
                    education: "Educació & Certificacions",
                    educationContent: [
                        {
                            "institution": "IOC - Cicle Formatiu Superior",
                            "degree": "Desenvolupament d'Aplicacions Web (DAW)",
                            "period": "Set 2025 - 2027"
                        },
                        {
                            "institution": "Institut d'Educació Online (IOE)",
                            "degree": "Certificat de Confecció i Publicació de Pàgines Web",
                            "period": "Feb 2025 - Set 2025"
                        },
                        {
                            "institution": "Google & Coursera",
                            "degree": "Certificació Professional de Suport IT",
                            "period": "2025"
                        },
                        {
                            "institution": "Meta & Coursera",
                            "degree": "Certificació Professional de Desenvolupament Front-End",
                            "period": "2025"
                        },
                        {
                            "institution": "IBM",
                            "degree": "Fonaments del Desenvolupament Web",
                            "period": "2025"
                        },
                        {
                            "institution": "AWS Academy",
                            "degree": "Fonaments de la IA Generativa",
                            "period": "2024"
                        },
                        {
                            "institution": "freeCodeCamp",
                            "degree": "Disseny Web Responsiu • JavaScript • React • Desenvolupament Backend",
                            "period": "2024 - 2025"
                        },
                        {
                            "institution": "Universitat Santiago Mariño - Veneçuela",
                            "degree": "Enginyeria Informàtica (4 semestres cursats)",
                            "period": "2019 - 2021"
                        }
                    ],
                    contact: "Connectem",
                    contactContent: "Obert a discutir noves oportunitats, col·laboracions o projectes tècnics. Contacta'm per correu, LinkedIn o deixa un missatge avall.",
                    location: "Barcelona, Espanya",
                    contactFormTitle: "Envia'm un missatge",
                    contactFormDescription: "Respondré dins de 24 hores. Construïm quelcom increïble junts.",
                    yourName: "El teu nom",
                    yourEmail: "El teu correu",
                    yourMessage: "El teu missatge",
                    sendMessage: "Enviar Missatge"
                }
            }
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    })

export default i18n
