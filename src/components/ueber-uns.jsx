import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const werte = [
  {
    icon: "🗽",
    title: "Freiheit",
    text: "Wir setzen uns für die individuelle Freiheit und Selbstbestimmung der Menschen in Reinach ein. Jede und jeder soll die eigenen Lebensentwürfe verwirklichen können.",
  },
  {
    icon: "🤝",
    title: "Gemeinsinn",
    text: "Zusammenhalt und Verantwortung für die Gemeinschaft sind uns wichtig. Wir fördern ein aktives Miteinander in Reinach und stärken das lokale Vereinsleben.",
  },
  {
    icon: "🚀",
    title: "Fortschritt",
    text: "Wir stehen für Innovation und eine zukunftsorientierte Entwicklung unserer Gemeinde, sei es bei Infrastruktur, Bildung oder Digitalisierung.",
  },
  {
    icon: "🌱",
    title: "Nachhaltigkeit",
    text: "Wir engagieren uns für nachhaltige Lösungen, die Reinach langfristig lebenswert machen, ökologisch, wirtschaftlich und sozial.",
  },
  {
    icon: "💡",
    title: "Chancen",
    text: "Wir schaffen Rahmenbedingungen, damit alle in Reinach ihre Chancen nutzen und sich entfalten können, unabhängig von Herkunft oder Alter.",
  },
  {
    icon: "⚖️",
    title: "Verantwortung",
    text: "Wir übernehmen Verantwortung für unser Handeln und setzen uns für eine faire, transparente Politik in Reinach ein.",
  },
];

const typewriterWords = [
  'Freiheit',
  'Gemeinsinn',
  'Fortschritt',
  'Nachhaltigkeit',
  'Chancen',
  'Verantwortung',
];

const UeberUns = () => {
  const [text] = useTypewriter({
    words: typewriterWords,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 140,
    delaySpeed: 1500,
  });

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 py-10 bg-white rounded-2xl shadow-xl pt-28 md:pt-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-0" style={{pointerEvents: 'none'}}>
        <svg viewBox="0 0 800 120" width="100%" height="80" preserveAspectRatio="none" className="block">
          <defs>
            <linearGradient id="topGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="80%" stopColor="#e6f4ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e6f4ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0,120 Q400,0 800,120 L800,0 L0,0 Z" fill="url(#topGradient)" />
        </svg>
      </div>
      <header className="relative z-10">
        <h1 className="text-[#005baa] text-5xl md:text-6xl font-extrabold mb-4 text-center tracking-wide mt-4 drop-shadow-lg">Über uns</h1>
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-xl md:text-2xl text-[#009ee0] font-semibold text-center flex items-center gap-2">
            <svg className="w-7 h-7 text-[#009ee0] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20.5C7.305 20.5 3.5 16.695 3.5 12S7.305 3.5 12 3.5 20.5 7.305 20.5 12 16.695 20.5 12 20.5z" /></svg>
            Wir stehen für
          </span>
          <span className="text-3xl md:text-4xl font-bold text-[#005baa] mt-2 h-12 flex items-center justify-center px-4 rounded-lg bg-gradient-to-r from-[#e6f4ff] via-white to-[#e6f4ff] shadow-inner">
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </div>
      </header>
      <div className="flex justify-center my-6 relative z-10">
        <span className="inline-block w-24 h-1 bg-gradient-to-r from-[#009ee0] via-[#005baa] to-[#009ee0] rounded-full" />
      </div>
      <h2 className="text-[#005baa] text-3xl md:text-4xl font-extrabold mb-4 text-center tracking-wide relative z-10">FDP Reinach AG</h2>
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 text-center max-w-2xl mx-auto relative z-10">
        Die FDP Reinach AG ist die liberale Kraft in unserer Gemeinde. Wir stehen für Freiheit, Verantwortung und Fortschritt, und gestalten Reinach aktiv sowie nachhaltig mit. Unsere Politik orientiert sich an den Werten der FDP Schweiz und ist fest in Reinach verwurzelt.
      </p>
      <h2 className="text-[#009ee0] text-xl md:text-2xl font-semibold text-center mb-2 tracking-wide uppercase relative z-10">Unsere Werte</h2>
      {/* Werte-Karten */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 my-8 relative z-10">
        {werte.map((wert) => (
          <div
            key={wert.title}
            className="bg-gradient-to-br from-[#e6f4ff] via-white to-[#cce6ff] rounded-xl shadow-md p-5 md:p-7 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:from-[#d0eaff] hover:to-[#b3e0ff] group cursor-pointer hover:-translate-y-2 hover:scale-105 border border-[#e0eaff]"
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:text-[#009ee0] drop-shadow-lg">
              {wert.icon}
            </div>
            <h3 className="text-[#005baa] font-bold text-base md:text-lg mb-1 md:mb-2 tracking-wide transition-colors duration-300 group-hover:text-[#009ee0]">
              {wert.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-[#005baa]">
              {wert.text}
            </p>
          </div>
        ))}
      </div>
      {/* Abschnittstrenner */}
      <div className="flex justify-center my-6 relative z-10">
        <span className="inline-block w-16 h-1 bg-gradient-to-r from-[#005baa] via-[#009ee0] to-[#005baa] rounded-full" />
      </div>
      <div className="text-center mt-8 relative z-10">
        <p className="text-xl text-[#005baa] font-semibold mb-2">Gestalten Sie mit uns die Zukunft von Reinach AG!</p>
        <a href="https://www.fdp-ag.ch/mitglied-werden" target="_blank" rel="noopener noreferrer">
          <button className="mt-2 mb-5 px-7 py-3 bg-gradient-to-r from-[#009ee0] to-[#005baa] text-white font-bold rounded-full shadow-lg hover:from-[#005baa] hover:to-[#009ee0] transition-all duration-300 text-lg">
            Jetzt Mitglied werden
          </button>
        </a>
        <p className="text-base text-gray-700 mt-4">Werden Sie Teil einer starken, offenen und innovativen Gemeinde, gemeinsam mit der FDP Reinach AG.</p>
      </div>
    </div>
  );
};

export default UeberUns;
