import React from "react";
import Gemeinderat from "./Gemeinderat"; 
import Blog from "./Blog";
import EventSchedule from "./EventSchedule";

const sectionClass = "w-full max-w-7xl mx-auto mb-10";

const ReinachAg = () => (
  <div className="bg-white py-6 sm:py-10 px-1 sm:px-4 min-h-screen">
    <section className={sectionClass + " mt-16 sm:mt-24"}>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#1e293b] mb-6 sm:mb-10 tracking-tight drop-shadow-2xl uppercase letter-spacing-wide">
        Gemeinderat Reinach AG
      </h2>
      <Gemeinderat />
    </section>
    <section className={sectionClass}>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#1e293b] mb-6 sm:mb-10 tracking-tight drop-shadow-2xl uppercase letter-spacing-wide">
        Veranstaltungsplan
      </h2>
      <EventSchedule />
    </section>
    <section className={sectionClass}>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#1e293b] mb-6 sm:mb-10 tracking-tight drop-shadow-2xl uppercase letter-spacing-wide">
        Blog & Aktuelles
      </h2>
      <Blog />
    </section>
  </div>
);

export default ReinachAg;