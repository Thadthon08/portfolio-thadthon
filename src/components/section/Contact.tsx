import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl font-extrabold uppercase tracking-wide">
          {t("contact.title")}
        </h2>
        <p
          className="
              mt-4
              text-gray-400
              max-w-2xl mx-auto
            "
        >
          {t("contact.description")}
        </p>
      </motion.div>
      <ContactForm />
    </section>
  );
}
