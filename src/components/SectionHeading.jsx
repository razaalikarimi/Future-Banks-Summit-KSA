import React from "react";

const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="max-w-3xl text-sm text-slate-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
