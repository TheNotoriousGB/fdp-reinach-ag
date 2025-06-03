import React from "react";
import Gemeinderat from "./Gemeinderat"; 
import Blog from "./Blog";
import EventSchedule from "./EventSchedule";

const sectionClass = "w-full max-w-7xl mx-auto mb-10";

const ReinachAg = () => (
  <div className="bg-white py-6 sm:py-10 px-1 sm:px-4 min-h-screen">
    <section className={sectionClass + " mt-16 sm:mt-24"}>
      <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-center text-[#002f6c]">
        Gemeinderat Reinach AG
      </h2>
      <Gemeinderat />
    </section>
    <section className={sectionClass}>
      <EventSchedule />
    </section>
    <section className={sectionClass}>
      <Blog />
    </section>
  </div>
);

export default ReinachAg;