import logo from '../assets/bl_fdp-removebg-preview.png';

const footerNavs = [
    {
        href: "/ueber-uns",
        name: "Über uns",
    },
    {
        href: "/kontakt",
        name: "Kontakt",
    },
    {
        href: "https://www.fdp-kulm.ch/",
        name: "FDP Kulm",
    },
    {
        href: "https://www.fdp-ag.ch/",
        name: "FDP Aargau",
    },
    {
        href: "https://www.fdp.ch/",
        name: "FDP Schweiz",
    },
    {
        href: "/spenden",
        name: "Spenden",
    },
];

const Footer = () => {
    return (
        <footer className="w-full text-gray-500 bg-white px-4 py-8 md:px-8 border-t border-gray-100">
            <div className="max-w-lg mx-auto flex flex-col items-center text-center">
                <img
                    src={logo}
                    className="w-28 sm:w-32 mx-auto"
                    alt="FDP Logo"
                />
                <p className="leading-relaxed mt-5 text-[15px] sm:text-base">
                    Die FDP Reinach AG steht für Fortschritt, Freiheit und Verantwortung. Gemeinsam gestalten wir die Zukunft unserer Gemeinde, engagiert, transparent und bürgernah.
                </p>
            </div>
            <ul className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-3 sm:space-y-0 sm:space-x-4">
                {footerNavs.map((item, idx) => (
                    <li className="hover:text-gray-800" key={idx}>
                        <a href={item.href} className="text-base sm:text-[15px] px-2 py-1 block">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-center text-xs sm:text-sm gap-2">
                <div>
                    &copy; 2025 Gabriel Bischof · FDP Reinach AG. All rights reserved.
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    );
};

export default Footer;