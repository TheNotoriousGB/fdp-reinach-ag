import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Slideshow from './Slideshow';
import EventSchedule from './EventSchedule';
import Blog from './Blog';

function Home() {
  const [text] = useTypewriter({
    words: ['Innovation', 'Freiheit', 'Fortschritt'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 140,
    delaySpeed: 1500,
  });

  return (
    <div className="bg-[#002f6c] text-white flex flex-col min-h-screen">
      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center px-4 min-h-screen">
        <p className="text-white font-extrabold text-4xl md:text-5xl p-4 tracking-wide mt-[80px]">
          FDP Reinach AG
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#002f6c] bg-white rounded-md py-2">
          Gemeinsam für eine starke Gemeinde.
        </h1>
        <div className="flex justify-center items-center flex-wrap text-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#009ee0]">
            Wir stehen für&nbsp;
          </p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#b3e0ff] px-4 max-w-xl mx-auto">
          Für eine innovative, freie und zukunftsorientierte Gemeinde Reinach, die Chancen nutzt und Verantwortung übernimmt.
        </p>

        <div className="flex flex-col gap-3 my-6 w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              className="bg-gradient-to-r from-[#009ee0] to-[#005fa3] w-full sm:w-1/2 md:w-[320px] rounded-2xl font-semibold py-5 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center text-center text-lg sm:text-xl backdrop-blur-md bg-opacity-90 border border-[#009ee0]/30 focus:outline-none focus:ring-2 focus:ring-[#009ee0] focus:ring-offset-2"
              href="/ueber-uns"
            >
              Mehr erfahren
            </a>
            <a
              className="bg-white/80 text-[#002f6c] w-full sm:w-1/2 md:w-[320px] rounded-2xl font-semibold py-5 hover:bg-gray-100 hover:scale-105 transition-all duration-200 border border-[#002f6c]/30 flex items-center justify-center text-center text-lg sm:text-xl shadow-xl hover:shadow-2xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#002f6c] focus:ring-offset-2"
              href="https://www.fdp-ag.ch/mitglied-werden"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jetzt Mitglied werden
            </a>
          </div>
          <a
            className="bg-gradient-to-r from-pink-500 to-pink-600 w-full md:w-[320px] rounded-2xl font-semibold py-5 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center text-center text-lg sm:text-xl backdrop-blur-md bg-opacity-90 border border-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mx-auto"
            href="/spenden"
          >
            Spenden
          </a>
        </div>
      </div>

      <div className="bg-white mt-20 mb-32 py-6 w-full max-w-[1200px] mx-auto rounded-lg shadow-lg">
        <Slideshow />
      </div>
      <EventSchedule />
      <Blog />
    </div>
  );
}

export default Home;
