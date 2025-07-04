import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ShineBorder } from "../magicui/shine-border";
import { Button } from "../ui/button";
export default function Home() {
  const [public_repos, setPublicRepos] = useState<number>(0);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchPublicRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/thadthon08");
        const data = await response.json();
        const reposCount = data.public_repos || 0;
        setPublicRepos(reposCount);
      } catch (error) {
        console.error("Error fetching public repositories:", error);
      }
    };
    fetchPublicRepos();
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col justify-center items-stretch md:items-start w-full gap-8"
        >
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="dark:text-gray-400 text-2xl">
              {t("profile.greeting")}
            </p>
            <p className="font-bold dark:text-gray-200 text-2xl">
              {t("profile.name")}
            </p>
            <h1 className="md:mt-12 text-3xl md:text-5xl font-bold bg-orange-400 bg-clip-text text-transparent bg-gradient-to-l from-orange-400 to-yellow-700">
              <WordRotate
                // "roles": ["Software Engineer", "Network Engineer"],
                words={t("profile.roles", { returnObjects: true }) as string[]}
                duration={5000}
              />
            </h1>
          </div>
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
              className="rounded-full dark:border-white"
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
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-400 text-white px-6 py-1 rounded-md  hover:transform hover:scale-105 transition-transform "
            >
              {t("profile.hire")}
            </a>
            <ShinyButton
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/uc?export=download&id=1hjfLZ-Eoiet9amknfwsOqIXOxsDLu_t3";
                link.download = "Thadthon_Sangkhachon_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="border-2 border-black dark:border-white text-white px-6 py-1 rounded-md hover:transform hover:scale-105 transition-transform duration-300"
            >
              {t("profile.download_cv")}
            </ShinyButton>
          </div>
          <div className="bg-[#111] p-6 rounded-sm flex flex-col  gap-2 md:flex-row items-center justify-center text-white shadow-lg">
            {/* Block 1 */}
            <div className="flex flex-col items-center md:items-start px-6 gap-2">
              <h2 className="text-2xl font-bold text-orange-500">
                <NumberTicker value={0} />
              </h2>
              <p className="text-sm text-gray-300">
                {t("profile.experiences")}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-gray-700 mx-4" />

            {/* Block 2 */}
            <div className="flex flex-col  items-center md:items-start px-6 gap-2">
              <h2 className="text-2xl font-bold text-orange-500">
                <NumberTicker value={6} />
              </h2>
              <p className="text-sm text-gray-300">{t("profile.projects")}</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-gray-700 mx-4" />

            {/* Block 3 */}
            <div className="flex flex-col  items-center md:items-start px-6 gap-2">
              <h2 className="text-2xl font-bold text-orange-500">
                <NumberTicker value={public_repos} />
              </h2>
              <p className="text-sm text-gray-300">
                {t("profile.repositories")}
              </p>
            </div>
          </div>
        </motion.div>
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
          className="hidden md:flex flex-col items-center justify-center relative mt-8 md:mt-0"
        >
          {/* Background circle */}
          <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-xl opacity-30 z-0 animate-pulse"></div>
          {/* Profile Image */}
          <div className="relative w-72 h-72  md:w-full md:h-96   rounded-full overflow-hidden shadow-2xl ">
            <ShineBorder
              className="absolute inset-0 rounded-full"
              borderWidth={3}
            />
            <img
              src="/images/IMG_0003.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
