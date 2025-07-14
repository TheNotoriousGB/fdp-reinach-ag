import React from "react";

const spendenDaten = [
  { label: "Empfänger", value: "FDP Reinach AG" },
  { label: "IBAN", value: "CH89 8117 0000 0053 1423 8" },
  { label: "Konto-Nr.", value: "53142.38" },
  { label: "Bank", value: "Raiffeisenbank Beromünster" },
  { label: "Bankclearing", value: "81170" },
  { label: "Postkonto", value: "60-5900-6" },
  { label: "SWIFT Code", value: "RAIFCH22B70" },
];

export default function Spenden() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e6f4ff] via-white to-[#cce6ff] py-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#005baa] mb-6 drop-shadow-lg">Spenden</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
          Spenden nehmen wir gerne entgegen. <br />Ihre Unterstützung hilft uns, die liberale Politik in Reinach zu stärken. Herzlichen Dank!
        </p>
        <div className="bg-gradient-to-r from-[#009ee0] to-[#005baa] rounded-xl p-6 md:p-8 text-white shadow-lg mb-6">
          <ul className="space-y-3 text-left">
            {spendenDaten.map((item) => (
              <li key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/20 pb-2 last:border-b-0">
                <span className="font-semibold w-40 inline-block">{item.label}:</span>
                <span className="break-all text-base md:text-lg">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs text-gray-500 mt-4">
          Ihre Spende ist steuerlich abzugsfähig.<br />Für Fragen kontaktieren Sie uns gerne.
        </div>
      </div>
    </div>
  );
} 