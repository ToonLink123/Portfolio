import { NavLink } from "react-router-dom";

const link = (to, label) => (
  <NavLink key={to} to={to} className="mr-4">
    {label}
  </NavLink>
);

{link("/",        "Home")}
{link("/about",   "About")}
{link("/projects","Projects")}
{link("/skills",  "Skills")}
{link("/resume",  "Resume")}
{link("/contact", "Contact")}
