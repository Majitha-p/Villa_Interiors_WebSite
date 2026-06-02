import React from "react";
import { Earth } from "lucide-react";

const LanguageButton = ({ language, onToggle, className = "" }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl border border-white/12 bg-white/8
        px-2 py-2 text-xs font-semibold text-white/85
        transition hover:border-primary/50 hover:text-primary
        sm:px-3 sm:text-sm
        whitespace-nowrap
        ${className}
      `}
    >
      <Earth className="h-4 w-4" />
      {language === "AR" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageButton;