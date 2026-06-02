import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

import LanguageButton from "../components/LanguageButton";
import StartProjectButton from "../components/StartProjectButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("AR");

  const navLinks = [
    { href: "/#", label: "Our Service" },
    { href: "/#", label: "Our Projects" },
    { href: "/#", label: "About Us" },
    { href: "/#", label: "Contact Us" },
  ];

  const toggleLanguage = () =>
    setLanguage((p) => (p === "AR" ? "EN" : "AR"));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGO */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={logo} className="h-9 w-auto object-contain" />
        </a>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          <LanguageButton
            language={language}
            onToggle={toggleLanguage}
          />

          <StartProjectButton />

        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/95 p-5 lg:hidden">

          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-[#062f34]"
            >
              Start Project
            </a>

            <LanguageButton
              language={language}
              onToggle={toggleLanguage}
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;