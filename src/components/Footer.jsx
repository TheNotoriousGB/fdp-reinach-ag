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
        href: "https://www.fdp-ag.ch/",
        name: "FDP Aargau",
    },
    {
        href: "https://www.fdp.ch/",
        name: "FDP Schweiz",
    },
    {
        href: "https://www.fdp-kulm.ch/",
        name: "FDP Kulm",
    },
];

const Footer = () => {
    return (
        <footer className="w-full text-gray-500 bg-white-800 px-4 py-5 md:px-8">
            <div className="max-w-lg mx-auto sm:text-center">
                <img
                    src={logo}
                    className="w-32 sm:mx-auto"
                    alt="FDP Logo"
                />
                <p className="leading-relaxed mt-5 text-[15px]">
                    Die FDP Reinach AG steht für Fortschritt, Freiheit und Verantwortung. Gemeinsam gestalten wir die Zukunft unserer Gemeinde, engagiert, transparent und bürgernah.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {footerNavs.map((item, idx) => (
                    <li className="hover:text-gray-800" key={idx}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
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