// src/components/Navbar.jsx
export default function Navbar() {
  const link = (href, label) => (
    <a key={href} href={href} className="mr-4">
      {label}
    </a>
  );

  return (
    <nav className="p-4 bg-gray-100 text-blue-600">
      {link("#home",     "Home")}
      {link("#about",    "About")}
      {link("#projects", "Projects")}
      {link("#skills",   "Skills")}
      {link("#resume",   "Resume")}
      {link("#contact",  "Contact")}
    </nav>
  );
}
