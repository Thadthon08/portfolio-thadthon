import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Pointer } from "../magicui/pointer";

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      key: "hr_onboarding",
      image: "/images/hreb.gif",
      techStack: ["React", "Elysia.js", "OracleDB", "MUI"],
    },
    {
      id: 2,
      key: "portfolio_theme",
      image: "/images/pf.png",
      link: "https://thadthon.vercel.app/",
      techStack: ["React", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
      id: 3,
      key: "sut_attendance",
      image: "/images/sutattendance.png",
      link: "https://sut-online-attendance-system-v1.vercel.app/",
      techStack: ["React", "Express.js", "PostgreSQL", "MUI"],
    },
    {
      id: 4,
      key: "cat_voice",
      image: "/images/catvoice.png",
      link: "https://cat-s-voice-i9uz.vercel.app/",
      techStack: ["Angular", "PrimeNG", "MongoDB", "Express.js"],
    },
    {
      id: 5,
      key: "key_store",
      image: "/images/softwarekey.png",
      link: "#",
      techStack: ["React", "Gin Framework", "MUI", "SQLite"],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">
          {t("portfolio.title")}
        </h2>
        <p className="mt-4 text-gray-400 ">{t("portfolio.subtitle")}</p>
      </motion.div>
      <Pointer className="fill-blue-500" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((item) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            key={item.id}
          >
            <NeonGradientCard className="transition-transform duration-300 hover:scale-[1.03]">
              <div className="space-y-3 ">
                {/* image */}
                <div className="h-56 overflow-hidden rounded-xl relative group">
                  <img
                    src={item.image}
                    alt={t(`projects.${item.key}.title`)}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-500/20 group-hover:ring-2 transition-all"></div>
                </div>

                {/* title */}
                <h3 className="text-2xl font-semibold tracking-tight dark:text-white">
                  {t(`projects.${item.key}.title`)}
                </h3>

                {/* description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t(`projects.${item.key}.description`)}
                </p>

                {/* Tech Stack */}
                {item.techStack && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-orange-500/10 text-orange-300 dark:text-orange-400 px-2.5 py-1 rounded-full text-xs font-medium shadow-sm hover:bg-orange-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* View more */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-none"
                    aria-label={`View project ${t(
                      `projects.${item.key}.title`
                    )}`}
                  >
                    🔗 {t("portfolio.view_project")}
                  </a>
                )}
              </div>
            </NeonGradientCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
