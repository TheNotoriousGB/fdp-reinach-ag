import { Link } from "react-router-dom";
import logo from "../assets/reinach-fdp.svg";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header bg-white shadow-md flex items-center justify-between px-4 md:px-8 py-4 md:py-6 fixed top-0 left-0 right-0 z-50">
            <h1 className="w-44 md:w-64 flex-shrink-0">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 md:h-20 w-auto hover:opacity-80 transition-opacity duration-200"
                    />
                </Link>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex font-semibold text-lg md:text-xl items-center">
                <a
                    href="https://www.fdp-ag.ch/mitglied-werden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Mitglied werden!
                </a>
                <Link
                    to="/spenden"
                    className="mr-4 focus:outline-none text-white bg-[#009ee0] hover:bg-[#005fa3] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    style={{ textDecoration: 'none' }}
                >
                    Spenden
                </Link>
                <ul className="flex items-center flex-wrap">
                    <li className="p-2 md:p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-blue-900 duration-200 cursor-pointer active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 md:p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-blue-900 duration-200 cursor-pointer">
                        <Link to="/reinach-ag">Reinach AG</Link>
                    </li>
                    <li className="p-2 md:p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-blue-900 duration-200 cursor-pointer">
                        <Link to="/ueber-uns">Über uns</Link>
                    </li>
                    <li className="p-2 md:p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-blue-900 duration-200 cursor-pointer">
                        <Link to="/kontakt">Kontakt</Link>
                    </li>
                </ul>
            </nav>

            {/* Hamburger Icon für Mobile */}
            <button
                className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
                {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>
                )}
            </button>

            {/* Mobile Menü */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 md:hidden animate-fadeIn z-40">
                    <a
                        href="https://www.fdp-ag.ch/mitglied-werden"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-6 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-11/12 text-center"
                    >
                        Mitglied werden!
                    </a>
                    <ul className="flex flex-col items-center w-full">
                        <li className="py-3 w-full text-center border-b border-gray-200">
                            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="py-3 w-full text-center border-b border-gray-200">
                            <Link to="/reinach-ag" onClick={() => setMenuOpen(false)}>Reinach AG</Link>
                        </li>
                        <li className="py-3 w-full text-center border-b border-gray-200">
                            <Link to="/ueber-uns" onClick={() => setMenuOpen(false)}>Über uns</Link>
                        </li>
                        <li className="py-3 w-full text-center">
                            <Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
                        </li>
                        <li className="py-3 w-full text-center border-b border-gray-200">
                            <Link to="/spenden" onClick={() => setMenuOpen(false)}>Spenden</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
 
export default Navbar;
