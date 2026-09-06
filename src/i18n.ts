import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * Only translatable copy lives here. Links, stacks, dates and skill names are
 * language-neutral and live in `src/data`, keyed by the same ids used below.
 */

export const SUPPORTED_LANGUAGES = ['en', 'es', 'ca'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
}

const en = {
  common: {
    skipToContent: 'Skip to main content',
    readMore: 'Read more',
    showLess: 'Show less',
    menu: 'Menu',
    close: 'Close',
    backToTop: 'Back to top',
    inProgress: 'In progress',
    language: 'Language',
    theme: 'Toggle theme',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    available: 'Available for junior / mid roles',
    role: 'Full-Stack Developer',
    pitch:
      'I build web apps end to end — from accessible React interfaces to REST APIs with authentication and a database. Currently studying Web Application Development in Barcelona.',
    ctaProjects: 'See my work',
    ctaCv: 'Download CV',
    ctaContact: 'Get in touch',
    statProjects: 'projects deployed',
    statLanguages: 'languages (EN · ES · CA)',
    statLocation: 'Barcelona · Remote',
  },
  about: {
    title: 'About me',
    subtitle: 'Who is behind the projects.',
    intro:
      "I'm a self-taught developer who went from studying Computer Engineering in Venezuela to building web applications in Barcelona. What keeps me here is the part of the job where a rough idea becomes something people can actually use — and the part right after, where you go back and make it simpler.",
    bullets: [
      'Eight projects deployed and online, from plain-JavaScript games to a real-time multiplayer game with its own Node backend.',
      'Comfortable across the stack: React and Next.js on the front, Express, MongoDB and JWT auth on the back.',
      "Careful with the details that don't show up in a screenshot: keyboard navigation, reduced motion, semantics and SEO.",
    ],
    closing:
      'Open to junior/mid roles, internships or freelance work. Based in Barcelona, comfortable working remotely.',
  },
  why: {
    title: 'Why hire me',
    subtitle: 'Four claims you can check in the code, not just read here.',
    items: {
      fullstack: {
        title: 'I ship the whole feature',
        description:
          'Battleship runs a React client, an Express + Socket.IO server and an Android build from a single repo. Task Manager adds JWT auth, MongoDB models and protected routes.',
      },
      frontend: {
        title: 'Frameworks, not one framework',
        description:
          'React and Next.js day to day, plus a full Angular + TypeScript store. Picking up a new stack is part of the routine rather than an obstacle.',
      },
      quality: {
        title: "Details that don't demo well",
        description:
          'This site honours reduced-motion preferences, works with a keyboard, and ships semantic landmarks, structured data and a sitemap. The same care goes into the projects.',
      },
      learning: {
        title: 'Learning in public',
        description:
          'Self-taught since 2024, now doing a higher vocational degree in web development while I keep shipping. Every project listed here is deployed, not a folder on my laptop.',
      },
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Public source code for all of them, and a live demo for most.',
    featured: 'Selected work',
    more: 'Also built',
    viewLive: 'Live demo',
    viewCode: 'Code',
    localOnly: 'Runs locally',
    screenshotAlt: 'Screenshot of {{name}}',
    items: {
      pulsechat: {
        name: 'PulseChat — pay-to-unlock chat',
        description:
          'Private chat where any message can be put behind a price and unlocked through Stripe. The server never ships unpaid content: locked text leaves only a masked teaser, and images go through an endpoint that re-checks the purchase on every request, so a leaked URL is worthless. Real-time delivery over Socket.IO.',
      },
      medilab: {
        name: 'Medilab — medical records system',
        description:
          'Django platform with separate portals for patients and clinical staff. Preliminary image diagnosis with a Keras model, an intent chatbot for quick questions, role-based permissions and PDF export of the record.',
      },
      battleship: {
        name: 'Battleship — online multiplayer',
        description:
          'Turn-based naval game with a local AI opponent and an online mode over WebSockets. React + Vite client, Express + Socket.IO server handling matchmaking and real-time turns, plus a Capacitor Android build.',
      },
      taskManager: {
        name: 'Task Manager',
        description:
          'Full-stack task app in TypeScript: due dates, priorities and tags, JWT sessions that can be revoked on every device at once, and an optimistic UI that rolls back when the server refuses. Validation lives once in a shared workspace both sides import, covered by 82 tests running in CI.',
      },
      weather: {
        name: 'Weather App',
        description:
          'Next.js and TypeScript app built on a weather API: hourly and daily forecasts, search by location, and backgrounds that follow the current conditions.',
      },
      ecommerce: {
        name: 'Mini E-Commerce',
        description:
          'Angular and TypeScript store: catalogue with filters by category, price and rating, search, cart and checkout flow. Built on Angular Material components and injectable services, with dark mode and multi-language support.',
      },
      portfolio: {
        name: 'This portfolio',
        description:
          'React and TypeScript, three languages with i18next, dark mode without a flash of the wrong theme, and a deliberate accessibility pass.',
      },
      calculator: {
        name: 'Calculator',
        description:
          'React and Vite calculator with keyboard input and a running history of operations.',
      },
      rockPaperScissors: {
        name: 'Rock Paper Scissors',
        description:
          'Plain JavaScript game with score tracking, sound effects and an animated result screen. No framework, no build step.',
      },
      wordGame: {
        name: 'Word guessing game',
        description:
          'Plain JavaScript word game with difficulty levels and live scoring.',
      },
    },
  },
  skills: {
    title: 'Skills',
    subtitle: 'What I reach for when building.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      tooling: 'Tooling & practices',
    },
  },
  experience: {
    title: 'Experience & learning',
    subtitle: "No paid industry role yet — this is what I've been doing instead.",
    items: {
      daw: {
        role: 'Web Application Development (DAW)',
        details:
          'Higher vocational degree, in progress. Backend fundamentals, databases, security and deployment, running alongside my own projects.',
      },
      selfTaught: {
        role: 'Self-taught developer',
        details:
          'Certifications from Meta, Google, IBM and AWS, and a steady stream of projects — every one of them deployed and public on GitHub.',
      },
      bootcamp: {
        role: 'Full-Stack student',
        details:
          'Intensive training in JavaScript, Node.js and MongoDB, working with Git flows and agile practices in a team setting.',
      },
    },
  },
  education: {
    title: 'Education & certifications',
    subtitle: 'The ones that carry the most weight, first.',
    more: 'Other certifications',
    items: {
      daw: 'Higher Vocational Degree in Web Application Development',
      metaFrontend: 'Meta Front-End Developer Professional Certificate',
      ioe: 'Web Page Design & Publishing Certificate',
      engineering: 'Computer Engineering — 4 semesters completed',
      freeCodeCamp: 'Responsive Web Design · JavaScript · React',
      googleIt: 'IT Support Professional Certificate',
      ibmWeb: 'Foundations of Web Development',
      awsAi: 'Foundations of Generative AI',
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'The fastest ways to reach me.',
    intro:
      "If you're hiring or want to build something together, email or LinkedIn are the quickest — or leave a message below.",
    formTitle: 'Send a message',
    formSubtitle: "I read everything and reply within 24 hours.",
    name: 'Your name',
    email: 'Your email',
    message: 'Your message',
    send: 'Send message',
    success: "Thanks — your message is on its way. I'll get back to you within 24 hours.",
    location: 'Barcelona, Spain',
    emailLabel: 'Email',
  },
  footer: {
    built: 'Built with React, TypeScript and Tailwind CSS.',
    rights: 'All rights reserved.',
    source: 'Source code',
  },
}

const es: typeof en = {
  common: {
    skipToContent: 'Saltar al contenido principal',
    readMore: 'Leer más',
    showLess: 'Mostrar menos',
    menu: 'Menú',
    close: 'Cerrar',
    backToTop: 'Volver arriba',
    inProgress: 'En curso',
    language: 'Idioma',
    theme: 'Cambiar tema',
  },
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Skills',
    experience: 'Experiencia',
    education: 'Formación',
    contact: 'Contacto',
  },
  hero: {
    available: 'Disponible para posiciones junior / mid',
    role: 'Desarrollador Full-Stack',
    pitch:
      'Construyo aplicaciones web de principio a fin: desde interfaces accesibles en React hasta APIs REST con autenticación y base de datos. Ahora mismo curso Desarrollo de Aplicaciones Web en Barcelona.',
    ctaProjects: 'Ver mi trabajo',
    ctaCv: 'Descargar CV',
    ctaContact: 'Hablemos',
    statProjects: 'proyectos desplegados',
    statLanguages: 'idiomas (EN · ES · CA)',
    statLocation: 'Barcelona · Remoto',
  },
  about: {
    title: 'Sobre mí',
    subtitle: 'Quién hay detrás de los proyectos.',
    intro:
      'Soy desarrollador autodidacta y pasé de estudiar Ingeniería Informática en Venezuela a construir aplicaciones web en Barcelona. Lo que me engancha es esa parte del oficio en la que una idea difusa acaba siendo algo que la gente puede usar de verdad, y la parte siguiente: volver sobre ello y hacerlo más simple.',
    bullets: [
      'Ocho proyectos desplegados y online, desde juegos en JavaScript puro hasta un multijugador en tiempo real con su propio backend en Node.',
      'Me muevo en toda la pila: React y Next.js en el front; Express, MongoDB y autenticación con JWT en el back.',
      'Cuido los detalles que no se ven en una captura: navegación por teclado, movimiento reducido, semántica y SEO.',
    ],
    closing:
      'Abierto a puestos junior/mid, prácticas o proyectos freelance. Vivo en Barcelona y trabajo bien en remoto.',
  },
  why: {
    title: 'Por qué contratarme',
    subtitle: 'Cuatro afirmaciones que puedes comprobar en el código, no solo leer aquí.',
    items: {
      fullstack: {
        title: 'Entrego la funcionalidad completa',
        description:
          'Battleship levanta un cliente React, un servidor Express + Socket.IO y una build de Android desde un único repositorio. Task Manager añade autenticación JWT, modelos de MongoDB y rutas protegidas.',
      },
      frontend: {
        title: 'Frameworks, no un framework',
        description:
          'React y Next.js en el día a día, y además una tienda completa en Angular con TypeScript. Aprender una pila nueva es parte de la rutina, no un obstáculo.',
      },
      quality: {
        title: 'Detalles que no lucen en una demo',
        description:
          'Esta web respeta la preferencia de movimiento reducido, funciona con teclado e incluye landmarks semánticos, datos estructurados y sitemap. El mismo cuidado va en los proyectos.',
      },
      learning: {
        title: 'Aprendo en público',
        description:
          'Autodidacta desde 2024 y ahora cursando un ciclo superior de desarrollo web mientras sigo publicando. Todos los proyectos de esta lista están desplegados, no son una carpeta en mi portátil.',
      },
    },
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Código fuente público en todos, y demo en vivo en la mayoría.',
    featured: 'Trabajo destacado',
    more: 'También he construido',
    viewLive: 'Ver demo',
    viewCode: 'Código',
    localOnly: 'Se ejecuta en local',
    screenshotAlt: 'Captura de {{name}}',
    items: {
      pulsechat: {
        name: 'PulseChat — chat con contenido de pago',
        description:
          'Chat privado donde cualquier mensaje puede ponerse tras un precio y desbloquearse con Stripe. El servidor nunca envía lo que no se ha pagado: del texto bloqueado solo sale un adelanto enmascarado, y las imágenes pasan por un endpoint que vuelve a comprobar la compra en cada petición, así que una URL filtrada no sirve de nada. Entrega en tiempo real con Socket.IO.',
      },
      medilab: {
        name: 'Medilab — gestión de expedientes médicos',
        description:
          'Plataforma en Django con portales separados para pacientes y personal sanitario. Diagnóstico preliminar por imagen con un modelo de Keras, chatbot de intenciones para dudas rápidas, permisos por rol y exportación del expediente a PDF.',
      },
      battleship: {
        name: 'Battleship — multijugador online',
        description:
          'Juego naval por turnos con oponente IA en local y modo online sobre WebSockets. Cliente React + Vite, servidor Express + Socket.IO que gestiona el emparejamiento y los turnos en tiempo real, y una build de Android con Capacitor.',
      },
      taskManager: {
        name: 'Gestor de tareas',
        description:
          'Aplicación de tareas full-stack en TypeScript: fechas de vencimiento, prioridades y etiquetas, sesiones JWT revocables en todos los dispositivos a la vez e interfaz optimista que revierte si el servidor rechaza el cambio. La validación vive una sola vez en un workspace compartido que importan ambos lados, con 82 tests ejecutándose en CI.',
      },
      weather: {
        name: 'App del tiempo',
        description:
          'Aplicación en Next.js y TypeScript sobre una API meteorológica: previsión por horas y por días, búsqueda por ubicación y fondos que acompañan a las condiciones actuales.',
      },
      ecommerce: {
        name: 'Mini E-Commerce',
        description:
          'Tienda en Angular y TypeScript: catálogo con filtros por categoría, precio y valoración, buscador, carrito y flujo de compra. Construida sobre componentes de Angular Material y servicios inyectables, con modo oscuro y soporte multiidioma.',
      },
      portfolio: {
        name: 'Este portafolio',
        description:
          'React y TypeScript, tres idiomas con i18next, modo oscuro sin parpadeo del tema equivocado y una revisión deliberada de accesibilidad.',
      },
      calculator: {
        name: 'Calculadora',
        description:
          'Calculadora en React y Vite con entrada por teclado e historial de operaciones.',
      },
      rockPaperScissors: {
        name: 'Piedra, papel o tijera',
        description:
          'Juego en JavaScript puro con marcador, efectos de sonido y pantalla de resultado animada. Sin framework y sin paso de build.',
      },
      wordGame: {
        name: 'Juego de adivinar palabras',
        description:
          'Juego de palabras en JavaScript puro con niveles de dificultad y puntuación en vivo.',
      },
    },
  },
  skills: {
    title: 'Skills',
    subtitle: 'Con lo que trabajo habitualmente.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      tooling: 'Herramientas y práctica',
    },
  },
  experience: {
    title: 'Experiencia y formación',
    subtitle: 'Todavía sin puesto remunerado en empresa: esto es lo que he estado haciendo mientras tanto.',
    items: {
      daw: {
        role: 'Desarrollo de Aplicaciones Web (DAW)',
        details:
          'Ciclo formativo de grado superior, en curso. Fundamentos de backend, bases de datos, seguridad y despliegue, en paralelo a mis propios proyectos.',
      },
      selfTaught: {
        role: 'Desarrollador autodidacta',
        details:
          'Certificaciones de Meta, Google, IBM y AWS, y una sucesión constante de proyectos: todos desplegados y públicos en GitHub.',
      },
      bootcamp: {
        role: 'Estudiante Full-Stack',
        details:
          'Formación intensiva en JavaScript, Node.js y MongoDB, trabajando con flujos de Git y prácticas ágiles en equipo.',
      },
    },
  },
  education: {
    title: 'Formación y certificaciones',
    subtitle: 'Primero las que más pesan.',
    more: 'Otras certificaciones',
    items: {
      daw: 'Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web',
      metaFrontend: 'Certificado Profesional de Front-End Developer de Meta',
      ioe: 'Certificado de Confección y Publicación de Páginas Web',
      engineering: 'Ingeniería Informática — 4 semestres cursados',
      freeCodeCamp: 'Diseño Web Responsive · JavaScript · React',
      googleIt: 'Certificado Profesional de Soporte de TI',
      ibmWeb: 'Fundamentos del Desarrollo Web',
      awsAi: 'Fundamentos de IA Generativa',
    },
  },
  contact: {
    title: 'Contacto',
    subtitle: 'Las vías más rápidas para localizarme.',
    intro:
      'Si estás contratando o quieres construir algo conmigo, lo más rápido es el correo o LinkedIn. También puedes dejarme un mensaje aquí abajo.',
    formTitle: 'Envíame un mensaje',
    formSubtitle: 'Lo leo todo y respondo en menos de 24 horas.',
    name: 'Tu nombre',
    email: 'Tu correo',
    message: 'Tu mensaje',
    send: 'Enviar mensaje',
    success: 'Gracias, tu mensaje va en camino. Te respondo en menos de 24 horas.',
    location: 'Barcelona, España',
    emailLabel: 'Correo',
  },
  footer: {
    built: 'Hecho con React, TypeScript y Tailwind CSS.',
    rights: 'Todos los derechos reservados.',
    source: 'Código fuente',
  },
}

const ca: typeof en = {
  common: {
    skipToContent: 'Vés al contingut principal',
    readMore: 'Llegir més',
    showLess: 'Mostrar menys',
    menu: 'Menú',
    close: 'Tancar',
    backToTop: 'Tornar a dalt',
    inProgress: 'En curs',
    language: 'Idioma',
    theme: 'Canviar tema',
  },
  nav: {
    about: 'Sobre mi',
    projects: 'Projectes',
    skills: 'Skills',
    experience: 'Experiència',
    education: 'Formació',
    contact: 'Contacte',
  },
  hero: {
    available: 'Disponible per a posicions junior / mid',
    role: 'Desenvolupador Full-Stack',
    pitch:
      "Construeixo aplicacions web de principi a fi: des d'interfícies accessibles en React fins a APIs REST amb autenticació i base de dades. Ara mateix curso Desenvolupament d'Aplicacions Web a Barcelona.",
    ctaProjects: 'Veure la meva feina',
    ctaCv: 'Descarregar CV',
    ctaContact: 'Parlem',
    statProjects: 'projectes desplegats',
    statLanguages: 'idiomes (EN · ES · CA)',
    statLocation: 'Barcelona · Remot',
  },
  about: {
    title: 'Sobre mi',
    subtitle: 'Qui hi ha darrere dels projectes.',
    intro:
      "Soc desenvolupador autodidacta i vaig passar d'estudiar Enginyeria Informàtica a Veneçuela a construir aplicacions web a Barcelona. El que m'enganxa és aquella part de l'ofici en què una idea difusa acaba sent alguna cosa que la gent pot fer servir de debò, i la part següent: tornar-hi i fer-ho més simple.",
    bullets: [
      'Vuit projectes desplegats i en línia, des de jocs en JavaScript pur fins a un multijugador en temps real amb el seu propi backend en Node.',
      'Em moc per tota la pila: React i Next.js al front; Express, MongoDB i autenticació amb JWT al back.',
      'Cuido els detalls que no es veuen en una captura: navegació amb teclat, moviment reduït, semàntica i SEO.',
    ],
    closing:
      'Obert a posicions junior/mid, pràctiques o projectes freelance. Visc a Barcelona i treballo bé en remot.',
  },
  why: {
    title: 'Per què contractar-me',
    subtitle: 'Quatre afirmacions que pots comprovar al codi, no només llegir aquí.',
    items: {
      fullstack: {
        title: 'Lliuro la funcionalitat completa',
        description:
          "Battleship aixeca un client React, un servidor Express + Socket.IO i una build d'Android des d'un únic repositori. Task Manager hi afegeix autenticació JWT, models de MongoDB i rutes protegides.",
      },
      frontend: {
        title: 'Frameworks, no un framework',
        description:
          'React i Next.js al dia a dia, i a més una botiga completa en Angular amb TypeScript. Aprendre una pila nova forma part de la rutina, no és un obstacle.',
      },
      quality: {
        title: 'Detalls que no lluen en una demo',
        description:
          'Aquest web respecta la preferència de moviment reduït, funciona amb teclat i inclou landmarks semàntics, dades estructurades i sitemap. La mateixa cura va als projectes.',
      },
      learning: {
        title: 'Aprenc en públic',
        description:
          'Autodidacta des del 2024 i ara cursant un cicle superior de desenvolupament web mentre segueixo publicant. Tots els projectes de la llista estan desplegats, no són una carpeta al portàtil.',
      },
    },
  },
  projects: {
    title: 'Projectes',
    subtitle: 'Codi font públic en tots, i demo en viu en la majoria.',
    featured: 'Feina destacada',
    more: 'També he construït',
    viewLive: 'Veure demo',
    viewCode: 'Codi',
    localOnly: "S'executa en local",
    screenshotAlt: 'Captura de {{name}}',
    items: {
      pulsechat: {
        name: 'PulseChat — xat amb contingut de pagament',
        description:
          "Xat privat on qualsevol missatge es pot posar darrere d'un preu i desbloquejar-se amb Stripe. El servidor no envia mai allò que no s'ha pagat: del text bloquejat només en surt un tast emmascarat, i les imatges passen per un endpoint que torna a comprovar la compra a cada petició, de manera que una URL filtrada no serveix de res. Lliurament en temps real amb Socket.IO.",
      },
      medilab: {
        name: 'Medilab — gestió d\'expedients mèdics',
        description:
          'Plataforma en Django amb portals separats per a pacients i personal sanitari. Diagnòstic preliminar per imatge amb un model de Keras, chatbot d\'intencions per a dubtes ràpids, permisos per rol i exportació de l\'expedient a PDF.',
      },
      battleship: {
        name: 'Battleship — multijugador en línia',
        description:
          "Joc naval per torns amb oponent IA en local i mode en línia sobre WebSockets. Client React + Vite, servidor Express + Socket.IO que gestiona l'emparellament i els torns en temps real, i una build d'Android amb Capacitor.",
      },
      taskManager: {
        name: 'Gestor de tasques',
        description:
          "Aplicació de tasques full-stack en TypeScript: dates de venciment, prioritats i etiquetes, sessions JWT revocables a tots els dispositius alhora i interfície optimista que reverteix si el servidor rebutja el canvi. La validació viu una sola vegada en un workspace compartit que importen tots dos costats, amb 82 tests executant-se en CI.",
      },
      weather: {
        name: 'App del temps',
        description:
          'Aplicació en Next.js i TypeScript sobre una API meteorològica: previsió per hores i per dies, cerca per ubicació i fons que acompanyen les condicions actuals.',
      },
      ecommerce: {
        name: 'Mini E-Commerce',
        description:
          'Botiga en Angular i TypeScript: catàleg amb filtres per categoria, preu i valoració, cercador, cistella i flux de compra. Construïda sobre components d\'Angular Material i serveis injectables, amb mode fosc i suport multiidioma.',
      },
      portfolio: {
        name: 'Aquest portafolis',
        description:
          'React i TypeScript, tres idiomes amb i18next, mode fosc sense parpelleig del tema equivocat i una revisió deliberada d\'accessibilitat.',
      },
      calculator: {
        name: 'Calculadora',
        description:
          "Calculadora en React i Vite amb entrada per teclat i historial d'operacions.",
      },
      rockPaperScissors: {
        name: 'Pedra, paper o tisores',
        description:
          'Joc en JavaScript pur amb marcador, efectes de so i pantalla de resultat animada. Sense framework i sense pas de build.',
      },
      wordGame: {
        name: 'Joc d\'endevinar paraules',
        description:
          'Joc de paraules en JavaScript pur amb nivells de dificultat i puntuació en viu.',
      },
    },
  },
  skills: {
    title: 'Skills',
    subtitle: 'Amb què treballo habitualment.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      tooling: 'Eines i pràctica',
    },
  },
  experience: {
    title: 'Experiència i formació',
    subtitle: "Encara sense lloc remunerat en empresa: això és el que he anat fent mentrestant.",
    items: {
      daw: {
        role: "Desenvolupament d'Aplicacions Web (DAW)",
        details:
          'Cicle formatiu de grau superior, en curs. Fonaments de backend, bases de dades, seguretat i desplegament, en paral·lel als meus propis projectes.',
      },
      selfTaught: {
        role: 'Desenvolupador autodidacta',
        details:
          'Certificacions de Meta, Google, IBM i AWS, i una successió constant de projectes: tots desplegats i públics a GitHub.',
      },
      bootcamp: {
        role: 'Estudiant Full-Stack',
        details:
          'Formació intensiva en JavaScript, Node.js i MongoDB, treballant amb fluxos de Git i pràctiques àgils en equip.',
      },
    },
  },
  education: {
    title: 'Formació i certificacions',
    subtitle: 'Primer les que pesen més.',
    more: 'Altres certificacions',
    items: {
      daw: "Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Web",
      metaFrontend: 'Certificat Professional de Front-End Developer de Meta',
      ioe: 'Certificat de Confecció i Publicació de Pàgines Web',
      engineering: 'Enginyeria Informàtica — 4 semestres cursats',
      freeCodeCamp: 'Disseny Web Responsive · JavaScript · React',
      googleIt: 'Certificat Professional de Suport de TI',
      ibmWeb: 'Fonaments del Desenvolupament Web',
      awsAi: 'Fonaments de la IA Generativa',
    },
  },
  contact: {
    title: 'Contacte',
    subtitle: 'Les vies més ràpides per localitzar-me.',
    intro:
      'Si estàs contractant o vols construir alguna cosa amb mi, el més ràpid és el correu o LinkedIn. També pots deixar-me un missatge aquí sota.',
    formTitle: "Envia'm un missatge",
    formSubtitle: 'Ho llegeixo tot i responc en menys de 24 hores.',
    name: 'El teu nom',
    email: 'El teu correu',
    message: 'El teu missatge',
    send: 'Enviar missatge',
    success: 'Gràcies, el teu missatge està en camí. Et responc en menys de 24 hores.',
    location: 'Barcelona, Espanya',
    emailLabel: 'Correu',
  },
  footer: {
    built: 'Fet amb React, TypeScript i Tailwind CSS.',
    rights: 'Tots els drets reservats.',
    source: 'Codi font',
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ca: { translation: ca },
    },
    supportedLngs: [...SUPPORTED_LANGUAGES],
    // Without this, a browser reporting `es-MX` never matches the `es` bundle.
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

export default i18n
