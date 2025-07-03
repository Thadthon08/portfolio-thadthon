import { Mail, Phone } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-black/5 dark:bg-white/5 py-6">
      <div className="flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto px-4  ">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold uppercase">
          <AuroraText colors={["#f97316", "#f59e0b"]}>Logo</AuroraText>
        </h1>

        {/* Menu Links */}
        <ul className="flex flex-wrap justify-center gap-10 text-black dark:text-gray-300 font-medium text-sm">
          <li>
            <a href="#home" className="hover:text-orange-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-400">
              About me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-orange-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400">
              Contact me
            </a>
          </li>
        </ul>
        {/* Social Media Links */}
        <div className="flex flex-row gap-4 ">
          {/* Facebook */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:border-white"
            onClick={() =>
              window.open("https://www.facebook.com/tas.ton.5", "_blank")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Button>
          {/* Instagram */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:border-white "
            onClick={() => window.open("https://www.instagram.com/_thtas_/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram-icon lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Button>
          {/* LinkedIn */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:border-white"
            onClick={() => window.open("https://www.linkedin.com/login")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Button>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-black dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-400" />
            <span>thad.sangkhachon@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-400" />
            <span>098 747 5306</span>
          </div>
        </div>

        {/* Credit */}
        <p className="text-xs text-black dark:text-gray-400 mt-2">
          Developed by{" "}
          <span className="font-semibold text-orange-500">
            @Thadthon Sangkhachon
          </span>
        </p>
      </div>
    </footer>
  );
}
