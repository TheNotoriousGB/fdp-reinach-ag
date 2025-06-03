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
    <div className="bg-gradient-to-br from-[#e6f4ff] via-white to-[#cce6ff] py-12 px-4 max-w-7xl mx-auto min-h-screen transition-colors duration-700">
      <h1 className="text-4xl font-extrabold text-center text-[#005baa] mb-10 tracking-tight drop-shadow-lg">
        Gemeinderat Reinach AG
      </h1>

      <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {raete.map((rat) => {
          const imageUrl = getImageUrl(rat.bild, 500, 400);

          return (
            <div
              key={rat._id}
              className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-gray-100"
              onClick={() => setSelected(rat)}
            >
              <div className="flex justify-center pt-6">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={rat.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-full text-gray-400 border-4 border-white shadow-md">
                    Kein Bild
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  {rat.name}
                </h2>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  {rat.funktionen?.map((fkt, idx) => (
                    <li key={idx}>{fkt}</li>
                  ))}
                </ul>
              </div>
              {/* Overlay Effekt */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-100 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {selected && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelected(null)}
          className="bg-white w-full max-w-3xl mx-auto mt-10 rounded-lg shadow-xl outline-none p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 transition-opacity duration-500 animate-fadeIn"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-purple-700 text-3xl font-bold focus:outline-none"
            aria-label="Schliessen"
          >
            &times;
          </button>
          <div className="text-center">
            {selected.bild ? (
              <img
                src={getImageUrl(selected.bild, 600, 400)}
                alt={selected.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mx-auto mb-4 bg-white"
                loading="lazy"
              />
            ) : (
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-full mx-auto mb-4 text-gray-400 border-4 border-white shadow-lg">
                Kein Bild
              </div>
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selected.name}</h2>
            <ul className="text-gray-600 mb-4">
              {selected.funktionen?.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            {selected.beschreibung && (
              <div className="text-left mt-6 prose prose-sm prose-gray max-w-none mx-auto">
                <PortableText value={selected.beschreibung} />
              </div>
            )}

            {selected.socialLinks?.length > 0 && (
              <div className="mt-6 flex justify-center space-x-4">
                {selected.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold shadow hover:bg-purple-200 transition-colors duration-200 border border-purple-200"
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
