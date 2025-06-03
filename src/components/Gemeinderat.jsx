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
    <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#c7d2fe] py-10 sm:py-16 px-1 sm:px-8 max-w-7xl mx-auto min-h-screen rounded-3xl shadow-2xl border border-[#e0e7ff] transition-colors duration-700">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-[#1e293b] mb-8 sm:mb-14 tracking-tight drop-shadow-2xl uppercase letter-spacing-wide">
        Gemeinderat Reinach AG
      </h1>

      <div className="grid gap-4 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {raete.map((rat) => {
          const imageUrl = getImageUrl(rat.bild, 500, 400);

          return (
            <div
              key={rat._id}
              className="relative group bg-white/80 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-102 sm:hover:scale-105 overflow-hidden border border-[#c7d2fe] hover:border-[#818cf8] backdrop-blur-sm"
              onClick={() => setSelected(rat)}
            >
              <div className="flex justify-center pt-6 sm:pt-8">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={rat.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 flex items-center justify-center rounded-full text-gray-400 border-4 border-white shadow-md">
                    Kein Bild
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                  {rat.name}
                </h2>
                <ul className="text-xs sm:text-sm text-gray-600 mt-2 space-y-1">
                  {rat.funktionen?.map((fkt, idx) => (
                    <li key={idx}>{fkt}</li>
                  ))}
                </ul>
              </div>
              {/* Overlay Effekt */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-100 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {selected && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelected(null)}
          className="bg-white w-full max-w-[98vw] sm:max-w-3xl mx-auto mt-4 sm:mt-10 rounded-2xl sm:rounded-3xl shadow-2xl outline-none p-2 sm:p-10 relative max-h-[95vh] overflow-y-auto animate-fadeIn border border-[#c7d2fe]"
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
                src={getImageUrl(selected.bild, 600, 400)}
                alt={selected.name}
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-white shadow-xl mx-auto mb-4 bg-white"
                loading="lazy"
              />
            ) : (
              <div className="w-28 h-28 sm:w-40 sm:h-40 bg-gray-200 flex items-center justify-center rounded-full mx-auto mb-4 text-gray-400 border-4 border-white shadow-lg">
                Kein Bild
              </div>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{selected.name}</h2>
            <ul className="text-gray-600 mb-4 text-sm sm:text-base">
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
