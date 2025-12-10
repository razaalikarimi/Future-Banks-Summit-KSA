import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050F23] text-slate-300">
      <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-7 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-[13px]">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Future Banks Summit &amp; Awards | KSA.
          All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="#top" className="hover:text-white transition">
            Back to top
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
