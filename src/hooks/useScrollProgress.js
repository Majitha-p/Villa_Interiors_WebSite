import { useEffect, useState } from "react";

export const useScrollProgress = (id) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const p = Math.min(Math.max((vh - rect.top) / rect.height, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return progress;
};