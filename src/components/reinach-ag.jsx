import React from "react";
import Gemeinderat from "./Gemeinderat"; 
import Blog from "./Blog";

const ReinachAg = () => (
  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#c7d2fe] py-10 sm:py-20 px-1 sm:px-8 max-w-7xl mx-auto rounded-3xl shadow-2xl border border-[#e0e7ff] mb-16 sm:mb-24">
    <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-[#1e293b] mb-8 sm:mb-14 tracking-tight drop-shadow-2xl uppercase letter-spacing-wide">
      Gemeinderat Reinach AG
    </h2>
    <Gemeinderat />
    <Blog />
  </div>
);

export default ReinachAg;