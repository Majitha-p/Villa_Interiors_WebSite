import React from "react";
import avatarSrc from "../assets/avatar.png";

const ChatWidgetButton = ({
  onClick,
  className = "",
  label = "Talk to a designer now",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`
        group fixed bottom-4 right-4 z-50
        flex flex-col items-end gap-2
        outline-none
        sm:bottom-6 sm:right-6 sm:gap-3
        ${className}
      `}
    >
      <span className="relative block h-16 w-16 transition duration-300 group-hover:scale-105">
        <img
          src={avatarSrc}
          alt=""
          className="pointer-events-none absolute left-1/2 -top-2.5 z-10 h-14 w-auto max-w-none -translate-x-1/2 select-none"
        />
      </span>
    </button>
  );
};

export default ChatWidgetButton;
