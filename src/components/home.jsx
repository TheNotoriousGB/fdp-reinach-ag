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

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-6 w-full max-w-md mx-auto">
          <a
            className="bg-[#009ee0] w-full sm:w-[200px] rounded-xl font-semibold py-4 text-white hover:bg-[#005fa3] transition flex items-center justify-center text-center text-lg shadow-md"
            href="/ueber-uns"
          >
            Mehr erfahren
          </a>
          <a
            className="bg-white text-[#002f6c] w-full sm:w-[200px] rounded-xl font-semibold py-4 hover:bg-gray-100 transition border border-[#002f6c] flex items-center justify-center text-center text-lg shadow-md"
            href="https://www.fdp-ag.ch/mitglied-werden"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt Mitglied werden
          </a>
          <a
            className="bg-pink-500 w-full sm:w-[200px] rounded-xl font-semibold py-4 text-white hover:bg-pink-600 transition flex items-center justify-center text-center text-lg shadow-md"
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
