import React from "react";
import { Globe, MapPin, Navigation, Mail, Phone } from "lucide-react";
import FooterBg from '../assets/footerBg.jpg'
import Logo from "../assets/idealFactory.png";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Team",
    "Testimonials",
    "Projects",
    "Gallery",
  ];

  const exploreLinks = [
    "Walk in Closet",
    "Wardrobe Closet",
    "U-Shape Kitchen",
    "Pantry Kitchen",
    "Doors",
  ];

  const contactInfo = [
    {
      icon: Globe,
      text: "idealhomeuae.com",
    },
    {
      icon: MapPin,
      text: "ICAD I, Abu Dhabi Industrial City",
    },
    {
      icon: Navigation,
      text: "8GG4+W8F",
      link: "#",
    },
    {
      icon: Mail,
      text: "info@idealhomeuae.com",
    },
    {
      icon: Phone,
      text: "+971 50 312 2300",
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#555252] text-white">
      <img
        src={FooterBg}
        alt="Footer Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <img
              src={Logo}
              alt="Ideal Factory"
              className="h-10 w-auto object-contain "
            />

            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Our kitchens may not be able to whisk you away to sun kissed foreign shores,
              but our collection boasts all the quality craftsmanship and style.
            </p>
          </div>
          <div>
            <h4 className="mb-5 text-base font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/75">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-base font-semibold uppercase tracking-wider text-primary">
              Explore
            </h4>

            <ul className="space-y-3 text-sm text-white/75">
              {exploreLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-base font-semibold uppercase tracking-wider text-primary">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-white/75">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">

                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">

          <p>Copyright © 2026 Ideal Factory. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;