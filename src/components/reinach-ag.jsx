import React from "react";
import Gemeinderat from "./Gemeinderat"; 
import Blog from "./Blog";
import EventSchedule from "./EventSchedule";

const ReinachAg = () => (
  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#c7d2fe] py-6 sm:py-10 px-1 sm:px-4 max-w-7xl mx-auto rounded-3xl shadow-2xl border border-[#e0e7ff] mb-10 sm:mb-16">
    <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#1e293b] mb-6 sm:mb-10 tracking-tight drop-shadow-2xl uppercase letter-spacing-wide">
      Gemeinderat Reinach AG
    </h2>
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        <Gemeinderat />
      </div>
    </div>
    <div className="mt-10">
      <section className="w-full bg-gradient-to-br from-[#f8fafc] via-[#e6f4ff] to-[#cce6ff] py-8 px-2 sm:px-6 rounded-2xl shadow-lg border border-[#b3e0ff] max-w-4xl mx-auto">
        <EventSchedule />
      </section>
    </div>
    <div className="mt-10">
      <section className="w-full bg-white py-8 px-2 sm:px-6 rounded-2xl shadow-lg border border-[#e0e7ff] max-w-5xl mx-auto">
        <Blog />
      </section>
    </div>
  </div>
);

export default ReinachAg;