import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="
        h-screen flex flex-col justify-center items-center
        bg-gradient-to-br from-blue-600 to-indigo-700
        text-white text-center px-4
      "
    >
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Eshan.
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I’m a CS major passionate about full-stack web development and security.
      </motion.p>

      <motion.a
        href="/projects"
        className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        View My Projects
      </motion.a>
    </section>
  );
}
