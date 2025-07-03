import { AuroraText } from "@/components/magicui/aurora-text";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ModeToggle } from "./mode-toggle";

export default function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md    transition-colors duration-300 px-4 md:px-8 ">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-extrabold uppercase">
            <AuroraText colors={["#f97316", "#f59e0b"]}>Logo</AuroraText>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={() => setActiveLink("home")}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
              activeLink === "home"
                ? "text-orange-400"
                : "dark:text-gray-300 hover:text-orange-400"
            }`}
          >
            {t("menu.home")}
          </a>
          <a
            href="#about"
            onClick={() => setActiveLink("about")}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
              activeLink === "about"
                ? "text-orange-400"
                : "dark:text-gray-300 hover:text-orange-400"
            }`}
          >
            {t("menu.about")}
          </a>
          <a
            href="#portfolio"
            onClick={() => setActiveLink("portfolio")}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
              activeLink === "portfolio"
                ? "text-orange-400"
                : "dark:text-gray-300 hover:text-orange-400"
            }`}
          >
            {t("menu.portfolio")}
          </a>
          <a
            href="#contact"
            onClick={() => setActiveLink("contact")}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
              activeLink === "contact"
                ? "text-orange-400"
                : "dark:text-gray-300 hover:text-orange-400"
            }`}
          >
            {t("menu.contact")}
          </a>
        </div>

        {/* Desktop settings */}
        <div className="hidden md:flex items-center space-x-1.5">
          {/* Language Switcher */}
          <LanguageSwitcher />
          {/* Mode Toggle */}
          <ModeToggle />
          {/* Hire Button */}
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ">
            {t("menu.hire")}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-1.5">
          {/* Language Switcher */}
          <LanguageSwitcher />
          {/* Mode Toggle */}
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="dark:text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 ">
          <a
            href="#home"
            className="dark:text-gray-300 hover:text-orange-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t("menu.home")}
          </a>
          <a
            href="#about"
            className="dark:text-gray-300 hover:text-orange-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t("menu.about")}
          </a>
          <a
            href="#portfolio"
            className="dark:text-gray-300 hover:text-orange-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t("menu.portfolio")}
          </a>
          <a
            href="#contact"
            className="dark:text-gray-300 hover:text-orange-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t("menu.contact")}
          </a>
          <div className="pt-2">
            <button
              className="w-full bg-orange-400  text-white py-2 px-4 rounded-md text-base font-medium hover:transform hover:scale-105 transition-transform "
              onClick={() => setIsOpen(false)}
            >
              {t("menu.hire")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
