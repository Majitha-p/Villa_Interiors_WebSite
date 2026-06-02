import React from "react";
import { Phone } from "lucide-react";

const StartProjectButton = ({ href = "/contact", className = "" }) => {
  return (
    <a
      href={href}
      className={`
        hidden sm:inline-flex items-center gap-2
        rounded-xl bg-primary/90 px-4 py-2.5
        text-sm font-semibold text-[#062f34]
        transition hover:bg-primary
        whitespace-nowrap
        ${className}
      `}
    >
      <Phone className="h-4 w-4" />
      Start Project
    </a>
  );
};

export default StartProjectButton;