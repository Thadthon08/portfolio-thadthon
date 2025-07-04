import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Pointer } from "../magicui/pointer";
import { ShineBorder } from "../magicui/shine-border";

export default function Aboutme() {
  const { t } = useTranslation();
  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Go",
    "Python",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "REST API",
    "MongoDB",
    "SQL",
  ];
  return (
    <section className="py-16 px-4 md:px-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold uppercase tracking-wide">
          {t("about.title")}
        </h2>
        <p className="text-gray-400 mt-2">{t("about.subtitle")}</p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
          className="relative w-64 h-64 md:w-96 md:h-auto rounded-md overflow-hidden shadow-2xl"
        >
          <ShineBorder
            className="absolute inset-0 rounded-md"
            borderWidth={2}
            shineColor={"#f59e0b"}
          />
          <img
            src="/images/IMG_9962.jpg"
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            {t("about.intro_heading")}
          </h3>
          <p className="text-sm md:text-md dark:text-gray-300 leading-relaxed">
            {t("about.intro_description")}
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1hjfLZ-Eoiet9amknfwsOqIXOxsDLu_t3"
              download="Thadthon_Sangkhachon_Resume.pdf"
              className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-500 transition"
            >
              {t("about.download_cv")}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Skill Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h3 className="text-2xl font-bold text-center text-orange-400 mb-6">
          {t("about.skills")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Pointer>
            <div className="text-2xl">👆</div>
          </Pointer>
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
