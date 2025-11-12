"use client"

import { Github, Linkedin, Facebook, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 
             onClick={() => {
                  const link = document.createElement('a');
                  link.href ="#home";
                  link.click();
                }}
            className="cursor-pointer text-2xl font-black font-montserrat text-primary mb-4">Espérant.</h3>
            <p className="text-muted-foreground leading-relaxed"> {t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">{t("footer.quicklinks")} </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">{t("footer.followme")}</h4>
            <div className="space-y-3">
              {[
                { href: "https://github.com/MandrindraEsperant", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mandrindra-esp%C3%A9rant-randriamahasoa-55129428b/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.facebook.com/mandrindraesperant.randriamahasoa", icon: Facebook, label: "Facebook" },
              ].map(({ href, icon: Icon, label }) => (
                <a                  
                  href={href}
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{label}</span>
                </a>
              ))}
             
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © {new Date().getFullYear()} Mandrindra Espérant. {t("footer.rights")}
            <span className="mx-2">•</span>
            {t("footer.madewith")} <Heart className="h-4 w-4 text-red-500 mx-1" /> {t("footer.in")}
          </p>
        </div>
      </div>
    </footer>
  )
}
