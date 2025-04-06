import Layout from '../components/Layout';
import { FaWater, FaOilCan, FaTrash, FaSink, FaCloudRain, FaToilet, FaTools, FaTruck } from "react-icons/fa";

import { GiWarpPipe } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

import {  Element } from 'react-scroll';
import useScrollAnimation from "../utils/animations";


export default function Home() {
    useScrollAnimation();


    const servicos = [
        { icon: <FaWater />, title: "LIMPEZA DE TANQUES" },
        { icon: <IoIosWater />, title: "LIMPEZA DE CAIXAS D'ÁGUA" },
        { icon: <FaOilCan />, title: "LIMPEZA DE CAIXAS SEPARADORAS DE ÁGUE E ÓLEO" },
        { icon: <FaSink />, title: "LIMPEZA DE CAIXAS DE GORDURA" },
        { icon: <FaCloudRain />, title: "LIMPEZA DE REDES PLUVIAIS" },
        { icon: <FaToilet />, title: "LIMPEZA DE FOSSAS SÉPTICAS" },
        { icon: <GiWarpPipe />, title: "LIMPEZA E DESOBSTRUÇÃO DE TUBULAÇÕES" },
        { icon: <FaTruck />, title: "TRANSPORTE DE RESÍDUOS PERIGOSOS" },
    ];


    return (
        <Layout>
            <div className='banner'>
                <h1>VACUUMJET</h1>
                <h4>Especialistas em hidrojateamento, sucção e transporte de resíduos.</h4>


            </div>

            <Element name="sobre-nos" className="fade-in-ups quem-somos">
                <h1 className="titulo-servicos">Sobre Nós</h1>

                <div className="quem-somos-texto">
                    <p>
                        A <strong>Vacuum-Jet</strong> é uma empresa que atua no segmento de
                        <strong> hidrojateamento, sucção e transporte de resíduos</strong>,
                        trazendo vasto conhecimento técnico e normativo.
                    </p>
                    <p>
                        Atendemos <strong>postos de combustível, condomínios, residências e redes pluviais</strong>.
                    </p>
                    <p>
                        Nossa missão é proporcionar <strong>soluções customizadas e inovadoras</strong>,
                        focando em <strong>organização, segurança, sustentabilidade e eficiência</strong>,
                        garantindo proteção ao meio ambiente e conformidade com as regulações vigentes.
                    </p>
                    <p>
                        Somos cadastrados e licenciados pelos
                        <strong> órgãos reguladores de controle ambiental e de transporte de resíduos perigosos</strong>.
                    </p>
                </div>
            </Element>



            <Element name="nossos-servicos" >
                <section className="servicos">
                    <h2 className="titulo-servicos fade-in-ups">Nossos Serviços</h2>
                    <div className="card-container">
                        {servicos.map((servico, index) => (
                            <div key={index} className="card-servico fade-in-up">
                                <div className="icon-servico">{servico.icon}</div>
                                <h3 className="card-title">{servico.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </Element>

            <div className='fade-in-ups'>

            </div>

            <div className="trabalhos-executados">
                <h2 className="titulo-servicos">Trabalhos Executados</h2>




                <div className="trabalhos-container ">
                    {[
                        {
                            title: "HIDROJATEAMENTO DE ALTA PRESSÃO",
                            description: "Removemos resíduos incrustados em superfícies industriais e tubulações com eficiência.",
                            image: "foto (4).jpeg"
                        },
                        {
                            title: "DESENTUPIMENTO DE TUBULAÇÕES",
                            description: "Utilizamos tecnologia de hidrojateamento para desobstruir tubulações de diversos tamanhos.",
                            image: "foto (1).jpeg"
                        },
                        {
                            title: "LIMPEZA DE CAIXAS SEPARADORAS",
                            description: "Realizamos a limpeza e manutenção de caixas separadoras de água e óleo.",
                            image: "foto (2).jpeg"
                        },
                        {
                            title: "SUCÇÃO DE RESÍDUOS INDUSTRIAIS",
                            description: "Fazemos a remoção segura de resíduos líquidos e semissólidos em processos industriais.",
                            image: "foto (6).jpeg"
                        },
                        {
                            title: "TRANSPORTE DE RESIDUOS",
                            description: "Realizamos o transporte de residuos até a estação de tratamento.",
                            image: "foto (3).jpeg"
                        }
                    ].map((trabalho, index) => (
                        <div key={index} className={`trabalho ${index % 2 === 0 ? 'invertido' : ''}`}>
                            <div className="texto-trabalho card-title ">
                                <h1>{trabalho.title}</h1>
                                <p>{trabalho.description}</p>
                            </div>
                            <div className="imagem-trabalho">
                                <img src={trabalho.image} alt={trabalho.title} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Element name="contato" className="contato-wrapper">
                {/* Seção de Contato */}
                <div className="contato-containers backgroundcont">
                    <h2 className="titulo-servicos">Entre em Contato</h2>
                    <div></div>
                    <div className="icones-contato">
                        <div className='horizontal'>
                            <a href="https://www.instagram.com/vacuumjetsolucoes/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <p className='contatop'>INSTAGRAM</p>
                        </div>

                        <div className='horizontal'>
                            <a href="mailto:vaccumjetsolucoes@gmail.com">
                                <FaEnvelope />
                            </a>
                            <p className='contatop'>EMAIL</p>
                        </div>

                        <div className='horizontal'>
                            <a href="https://wa.me/5551999756027" className="whatsbutton">
                                <ImWhatsapp />
                            </a>
                            <p className='contatop'>Cristian Brito (51) 99975-6027</p>
                        </div>

                        <div className='horizontal'>
                            <a href="https://wa.me/5551985429293" className="whatsbutton">
                                <ImWhatsapp />
                            </a>
                            <p className='contatop'>Miguel Severo (51) 98542-9293</p>
                        </div>
                        <button
                            className="botao-orcamento"
                            onClick={() => window.open("https://wa.me/5551999756027?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
                        >
                            Solicitar Orçamento
                        </button>

                    </div>

                </div>

                {/* Seção do Mapa */}
                <div className="mapa-container">
                    <h2 className="titulo-servicos">Localização</h2>

                    <h2 className="endereco"> <FaLocationDot /> Rua Ana Nery, 1136. Rio-Branco, Canoas, RS</h2>

                    <div className="iframe-mapa">
                        <iframe
                            title="Mapa VACCUMJET"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7744328197636!2d-51.18261482481278!3d-29.914845326170836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197447c02c0a7b%3A0x5361d517b96e1d80!2sR.%20Ana%20Nery%2C%201136%20-%20Rio%20Branco%2C%20Canoas%20-%20RS%2C%2092404-340!5e0!3m2!1spt-BR!2sbr!4v1710172484373!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Element>





            {/* Seção de Contato */}
            <div className="contato-containers backgroundcont">
                <h2 className="titulo-servicos">Entre em Contato</h2>
                <div></div>
                <div className="icones-contato">
                    <div className='horizontal'>

                        <p className='contatop'>INSTAGRAM : Vaccumjetsoluções </p>
                    </div>

                    <div className='horizontal'>

                        <p className='contatop'>EMAIL : vaccumjetsolucoes@gmail.com </p>
                    </div>

                    <div className='horizontal'>

                        <p className='contatop'>Whatsapp : Cristian Brito (51) 99975-6027</p>
                    </div>

                    <div className='horizontal'>

                        <p className='contatop'>Whatsapp : Miguel Severo (51) 98542-9293</p>
                    </div>
                    <button
                            className="botao-orcamento"
                            onClick={() => window.open("https://wa.me/5551999756027?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
                        >
                            Solicitar Orçamento
                        </button>
                </div>

            </div>


        </Layout>
    );
}