import { Link } from "react-router-dom";
import logo from "../assets/reinach-fdp.svg";

function Navbar() {
    return (
        <header className="header bg-white shadow-md flex items-center justify-between px-4 md:px-8 py-4 md:py-6" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
            <h1 className="w-44 md:w-64 flex-shrink-0">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 md:h-20 w-auto hover:opacity-80 transition-opacity duration-200"
                    />
                </Link>
            </h1>

            <nav className="nav font-semibold text-lg md:text-xl flex items-center">
                <a
                    href="https://www.fdp-ag.ch/mitglied-werden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Mitglied werden!
                </a>
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
        </header>
    );
}
 
export default Navbar;
