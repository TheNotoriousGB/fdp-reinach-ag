import React from "react";
import Gemeinderat from "./Gemeinderat"; 
import Blog from "./Blog";

const ReinachAg = () => (
  <div className="bg-gray-50 py-12 px-4 max-w-7xl mx-auto rounded-lg shadow-lg mb-24">
    <h2 className="text-4xl font-bold text-center text-[#005baa] mb-10">
      Gemeinderat Reinach AG
    </h2>

  
    <Gemeinderat />
    <Blog />
  </div>
);

export default ReinachAg;