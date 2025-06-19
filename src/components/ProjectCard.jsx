// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="
        h-screen                   /* full viewport height */
        flex flex-col              /* center content vertically/horizontally */
        justify-center items-center
        bg-gradient-to-br          /* gradient background, top-left to bottom-right */
        from-blue-600 to-indigo-700
        text-white text-center
        px-4
      "
    >
      <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hi, I’m Eshan.</h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl">
        I’m a CS major passionate about full-stack web development and security.
      </p>
      <a
        href="/projects"
        className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        View My Projects
      </a>
    </section>
  );
}
