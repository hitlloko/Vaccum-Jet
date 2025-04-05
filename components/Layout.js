import Head from 'next/head';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaInfoCircle, FaCog, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { ImWhatsapp } from "react-icons/im";

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <Head>
                <title>VACCUMJET</title>
            </Head>

            <header>
                <nav>
                    <img src="/vaccumjetlogo.png" alt="VACCUMJET Logo" className="logo" />

                    {/* Botão de Menu */}
                    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Menu Responsivo */}
                    <ul className={`menu ${menuOpen ? "open" : ""}`}>
                        {[
                            { to: "sobre-nos", icon: <FaInfoCircle />, text: "Sobre Nós" },
                            { to: "nossos-servicos", icon: <FaCog />, text: "Serviços" },
                            { to: "contato", icon: <FaEnvelope />, text: "Contato" }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    to={item.to} 
                                    smooth={true} 
                                    duration={500} 
                                    onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
                                >
                                    {item.icon} {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="https://wa.me/5551999756027" className="whatsbutton">
                                <ImWhatsapp /> WHATSAPP
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer>
                <p className="footer-text">&copy; {new Date().getFullYear()} VACCUMJET - Todos os direitos reservados.</p>

                <div className="footer-social">
                    <a href="https://www.instagram.com/vacuumjetsolucoes/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="mailto:vaccumjetsolucoes@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>

                <button className="footer-whatsapp">
                    <ImWhatsapp /> WHATSAPP
                </button>
            </footer>
        </div>
    );
}
