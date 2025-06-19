// src/ScrollIntoView.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollIntoView() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
