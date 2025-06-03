import React, { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";
import Modal from "react-modal";
import { PortableText } from "@portabletext/react";

Modal.setAppElement("#root");

const Gemeinderat = () => {
  const [raete, setRaete] = useState([]);
  const [selected, setSelected] = useState(null);

  // Daten laden
  useEffect(() => {
    const query = `*[_type == "gemeinderat"] | order(name asc) {
      _id,
      name,
      funktionen,
      bild{
        asset->{
          _id,
          url
        }
      },
      beschreibung,
      socialLinks
    }`;

    client
      .fetch(query)
      .then(setRaete)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Bild-URL sicher generieren
  const getImageUrl = (bild, width = 400, height = 300) => {
    if (!bild || !bild.asset) return "";
    if (bild.asset._ref) {
      return urlFor(bild).width(width).height(height).url();
    }
    if (bild.asset.url) {
      return `${bild.asset.url}?w=${width}&h=${height}&auto=format`;
    }
    return "";
  };

  return (
    <div className="bg-white/80 rounded-2xl shadow-xl border border-[#e0e7ff] px-2 sm:px-6 py-6 sm:py-8 w-full">
      <h1 className="text-xl sm:text-2xl font-extrabold text-center text-[#1e293b] mb-6 tracking-tight drop-shadow-xl uppercase letter-spacing-wide">
        Gemeinderat
      </h1>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {raete.map((rat) => {
          const imageUrl = getImageUrl(rat.bild, 400, 300);
          return (
            <div
              key={rat._id}
              className="relative group bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-103 overflow-hidden border border-[#c7d2fe] hover:border-[#818cf8] backdrop-blur-sm"
              onClick={() => setSelected(rat)}
            >
              <div className="flex justify-center pt-3">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={rat.name}
                    className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-white shadow group-hover:scale-105 transition-transform duration-300 bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 flex items-center justify-center rounded-full text-gray-400 border-4 border-white shadow">
                    Kein Bild
                  </div>
                )}
              </div>
              <div className="p-2 sm:p-4 text-center">
                <h2 className="text-sm sm:text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                  {rat.name}
                </h2>
                <ul className="text-xs sm:text-sm text-gray-600 mt-1 space-y-1">
                  {rat.funktionen?.map((fkt, idx) => (
                    <li key={idx}>{fkt}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-100 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
      {selected && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelected(null)}
          className="bg-white w-full max-w-[98vw] sm:max-w-2xl mx-auto mt-2 sm:mt-4 rounded-2xl shadow-2xl outline-none p-2 sm:p-8 relative max-h-[95vh] overflow-y-auto animate-fadeIn border border-[#c7d2fe]"
          overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 transition-opacity duration-500 animate-fadeIn"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-indigo-700 text-2xl sm:text-3xl font-bold focus:outline-none bg-white/80 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow hover:scale-110 transition-all duration-200 border border-[#e0e7ff]"
            aria-label="Schliessen"
          >
            &times;
          </button>
          <div className="text-center">
            {selected.bild ? (
              <img
                src={getImageUrl(selected.bild, 400, 300)}
                alt={selected.name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-xl mx-auto mb-4 bg-white"
                loading="lazy"
              />
            ) : (
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 flex items-center justify-center rounded-full mx-auto mb-4 text-gray-400 border-4 border-white shadow-lg">
                Kein Bild
              </div>
            )}
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{selected.name}</h2>
            <ul className="text-gray-600 mb-4 text-xs sm:text-base">
              {selected.funktionen?.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            {selected.beschreibung && (
              <div className="text-left mt-4 sm:mt-6 prose prose-sm prose-gray max-w-none mx-auto bg-gray-50 rounded-xl p-2 sm:p-4 border border-[#e0e7ff]">
                <PortableText value={selected.beschreibung} />
              </div>
            )}
            {selected.socialLinks?.length > 0 && (
              <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
                {selected.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold shadow hover:bg-indigo-200 transition-colors duration-200 border border-indigo-200 hover:scale-105 text-xs sm:text-base"
                    title={link.plattform}
                  >
                    {link.plattform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gemeinderat;
