import React from "react";

const Button = ({
  children,
  href,
  className = "",
  icon: Icon,
  iconPosition = "left",
  ...props
}) => {
  const baseClass = `inline-flex h-10 items-center justify-center gap-2 rounded-xl 
     bg-primary px-4 text-sm font-semibold text-[#062f34] 
     shadow-lg transition hover:bg-primary/80 ${className}`;

  const Content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {Content}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {Content}
    </button>
  );
};

export default Button;
