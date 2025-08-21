"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Bonjour, je suis",
    "hero.name": "Mandrindra Espérant",
    "hero.title": "Développeur Full Stack",
    "hero.subtitle": "Architecte Logiciel",
    "hero.description":
      "Passionné par la création d'applications web modernes et performantes. Je transforme vos idées en solutions digitales innovantes avec une approche centrée sur l'expérience utilisateur.",
    "hero.cta": "Voir mes projets",
    "hero.download": "Télécharger CV",

    // About Section
    "about.title": "À propos de moi",
    "about.description":
      "Développeur passionné avec plusieurs années d'expérience dans la création d'applications web et mobiles. J'aime résoudre des problèmes complexes et créer des solutions élégantes.",
    "about.experience": "Années d'expérience",
    "about.projects": "Projets réalisés",
    "about.clients": "Clients satisfaits",

    // Services Section
    "services.title": "Mes Services",
    "services.web.title": "Développement Web",
    "services.web.description":
      "Création d'applications web modernes avec React, Next.js et les dernières technologies.",
    "services.mobile.title": "Applications Mobiles",
    "services.mobile.description": "Développement d'applications mobiles natives et cross-platform.",
    "services.backend.title": "Backend & API",
    "services.backend.description": "Conception et développement d'APIs robustes et scalables.",
    "services.consulting.title": "Conseil Technique",
    "services.consulting.description": "Accompagnement dans vos choix technologiques et architecture.",

    // Skills Section
    "skills.title": "Mes Compétences",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Base de données",
    "skills.tools": "Outils",

    // Projects Section
    "projects.title": "Mes Projets",
    "projects.view": "Voir le projet",
    "projects.code": "Code source",

    // Contact Section
    "contact.title": "Contactez-moi",
    "contact.description": "Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.success": "Message envoyé avec succès !",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.name": "Mandrindra Esperant",
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "Software Architect",
    "hero.description":
      "Passionate about creating modern and performant web applications. I transform your ideas into innovative digital solutions with a user-centered approach.",
    "hero.cta": "View my projects",
    "hero.download": "Download CV",

    // About Section
    "about.title": "About Me",
    "about.description":
      "Passionate developer with several years of experience in creating web and mobile applications. I love solving complex problems and creating elegant solutions.",
    "about.experience": "Years of experience",
    "about.projects": "Projects completed",
    "about.clients": "Happy clients",

    // Services Section
    "services.title": "My Services",
    "services.web.title": "Web Development",
    "services.web.description": "Creating modern web applications with React, Next.js and the latest technologies.",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.description": "Development of native and cross-platform mobile applications.",
    "services.backend.title": "Backend & API",
    "services.backend.description": "Design and development of robust and scalable APIs.",
    "services.consulting.title": "Technical Consulting",
    "services.consulting.description": "Support in your technological choices and architecture.",

    // Skills Section
    "skills.title": "My Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.tools": "Tools",

    // Projects Section
    "projects.title": "My Projects",
    "projects.view": "View project",
    "projects.code": "Source code",

    // Contact Section
    "contact.title": "Contact Me",
    "contact.description": "Have a project in mind? Feel free to contact me to discuss it.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.success": "Message sent successfully!",

    // Footer
    "footer.rights": "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
