import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      await emailjs.send(
        "service_0tjrdqw",
        "template_4z31ex6",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "PuLtUxp_OcBHSLnl0"
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-0">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Name Field */}
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Full Name
          </label>
          <div className="relative">
            <input
              {...register("name", { required: "Your name is required" })}
              className="w-full bg-white/70 dark:bg-black/30 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 transition-all duration-300 shadow-sm hover:border-orange-300 dark:hover:border-orange-500"
              placeholder="Enter your full name"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.name && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-2  flex items-center gap-1"
            >
              <span>⚠️</span>
              {errors.name.message}
            </motion.span>
          )}
        </div>

        {/* Email Field */}
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full bg-white/70 dark:bg-black/30 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 transition-all duration-300 shadow-sm hover:border-orange-300 dark:hover:border-orange-500"
              placeholder="your.email@example.com"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.email && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-2 flex items-center gap-1"
            >
              <span>⚠️</span>
              {errors.email.message}
            </motion.span>
          )}
        </div>

        {/* Message Field */}
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Message
          </label>
          <div className="relative">
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              })}
              rows={5}
              className="w-full bg-white/70 dark:bg-black/30 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 transition-all duration-300 shadow-sm resize-none hover:border-orange-300 dark:hover:border-orange-500"
              placeholder="Tell me about your project or just say hello..."
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.message && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-2 flex items-center gap-1"
            >
              <span>⚠️</span>
              {errors.message.message}
            </motion.span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">
              {isSubmitting ? <>Sending...</> : <>Send Message</>}
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl" />
      </motion.form>
    </div>
  );
};

export default ContactForm;
