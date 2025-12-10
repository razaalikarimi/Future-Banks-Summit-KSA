import React from "react";
import logo from "/logo.png";

const Navbar = () => {
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "Who You’ll Meet", href: "#who" },
    { label: "Why Attend", href: "#why" },
    { label: "Key Themes", href: "#schedule" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur shadow-sm">
      <nav className="w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-4 flex items-center justify-between">
        {/* Logo + title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Future Banks Summit KSA logo"
            className="h-11 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              4th Annual
            </p>
            <p className="text-sm md:text-base font-semibold text-slate-900">
              Future Banks Summit
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-1 py-1 text-slate-600 transition hover:text-primary hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-dark to-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Register Now</span>
              <span className="text-xs">➜</span>
            </a>
          </li>
        </ul>

        {/* Mobile CTA */}
        <a
          href="#cta"
          className="inline-flex md:hidden items-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-dark"
        >
          Register
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
