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
      "Développeur passionné avec plus de deux ans d'expérience dans la création d'applications web modernes. Je transforme vos idées en solutions digitales innovantes avec une approche centrée sur l'expérience utilisateur.",
    "hero.cta": "Voir mes projets",
    "hero.download": "Télécharger CV",

    // About Section
    "about.title": "À propos de moi",
    "about.description":
      "Développeur passionné avec plus de deux ans d'expérience dans la création d'applications web. Curieux et motivé, j'aime explorer de nouvelles technologies, relever des défis complexes et concevoir des solutions élégantes et performantes. Actuellement, je poursuis une formation continue afin d'approfondir mes compétences en développement full-stack.",
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
    "skills.data": "Analyse/Science de données",



    // Projects Section
    "projects.title": "Mes Projets",
    "projects.view": "Voir le projet",
    "projects.code": "Code source",
    "projects.teleconsultation.title": "Plateforme de téléconsultation",
    "projects.teleconsultation.description":
      "Plateforme permettant aux patients et médecins de réaliser des consultations médicales à distance de manière sécurisée.",
    "projects.crm.title": "CRM",
    "projects.crm.description":
      "Un CRM est une application qui centralise les informations et interactions clients pour optimiser la gestion commerciale, le marketing et la relation client",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.description": "Site portfolio moderne et responsive avec animations fluides.",
    "projects.expedition.title": "Suivi des expéditions",
    "projects.expedition.description":
      "Application permettant de suivre en temps réel l'état et la localisation des expéditions.",

    // Contact Section
    "contact.title": "Contactez-moi",
    "contact.description": "Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.success": "Message envoyé avec succès !",
    "contact.sendmessage":"Envoyez-moi un message",
    "contact.info":"Informations de contact",
    "contact.map":"Carte interactive",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.madewith": "Fait avec ",
    "footer.in": "à Madagascar",
    "footer.followme": "Suivez-moi",
    "footer.quicklinks": "Liens rapides",
    "footer.description":"Développeur Full Stack animé par la passion de créer des expériences digitales exceptionnelles.",
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
      "Passionate developer with over two years of experience in creating modern web applications. I transform your ideas into innovative digital solutions with a user-centered approach.",
    "hero.cta": "View my projects",
    "hero.download": "Download CV",

    // About Section
    "about.title": "About Me",
    "about.description":
      "Passionate developer with over two years of experience in web application development. Curious and motivated, I love exploring new technologies, tackling complex challenges and designing elegant and efficient solutions. Currently, I am pursuing continuous training to deepen my full-stack development skills.",
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
    "skills.data": "Data analyst/science ",
    


    // Projects Section
    "projects.title": "My Projects",
    "projects.view": "View project",
    "projects.code": "Source code",
    "projects.teleconsultation.title": "Telemedicine Platform",
    "projects.teleconsultation.description":
      "Platform allowing patients and doctors to conduct secure remote medical consultations.",
    "projects.crm.title": "CRM",
    "projects.crm.description":
      "A CRM is an application that centralizes customer information and interactions to optimize sales management, marketing and customer relations",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.description": "Modern and responsive portfolio website with smooth animations.",
    "projects.expedition.title": "Shipment Tracking",
    "projects.expedition.description": "Application allowing real-time tracking of shipment status and location.",

    // Contact Section
    "contact.title": "Contact Me",
    "contact.description": "Have a project in mind? Feel free to contact me to discuss it.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.success": "Message sent successfully!",
    "contact.sendmessage":"Send me a message",
    "contact.info":"Contact informations",
    "contact.map":"Interactive map",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.madewith": "Made with ",
    "footer.in": " in Madagascar",
    "footer.followme": "Follow me",
    "footer.quicklinks": "Quick links",
    "footer.description":"Full Stack Developer driven by a passion for building outstanding digital experiences."

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
