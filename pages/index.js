import Layout from '../components/Layout';
import { FaWater, FaOilCan, FaTrash, FaSink, FaCloudRain, FaToilet, FaTools, FaTruck } from "react-icons/fa";
import { GiWarpPipe } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

import { Element } from 'react-scroll';
import useScrollAnimation from "../utils/animations";

import { useEffect, useRef, useState } from "react";

function useInView(options) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [options]);

    return [ref, isVisible];
}

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
                <h4>Soluções eficientes em hidrojateamento, sucção e transporte de resíduos.</h4>
            </div>

            

            <Element name="sobre-nos" className="fade-in-ups quem-somos">
                <h1 className="titulo-servicos">Sobre Nós</h1>
                <div className="quem-somos-texto">
                    <p>
                        A <strong>VacuumJet</strong> é especialista em <strong>hidrojateamento, sucção e transporte de resíduos</strong>, oferecendo soluções rápidas, seguras e eficazes para limpeza e desobstrução. Nosso trabalho combina <strong>tecnologia de ponta</strong> e <strong>expertise técnica</strong>, garantindo excelência em cada serviço prestado.
                    </p>
                    <p>
                        Atendemos <strong>postos de combustível, condomínios, indústrias, residências e obras civis</strong>, sempre com agilidade e respeito às normas ambientais. <strong>Precisando de limpeza técnica com eficiência? Conte com a VacuumJet.</strong>
                    </p>
                    <p>
                        Nossa missão é <strong>resolver problemas com eficiência e segurança</strong>, oferecendo serviços sob medida, com foco em <strong>sustentabilidade, agilidade e conformidade ambiental</strong>.
                    </p>
                    <p>
                        Atuamos com <strong>todas as licenças exigidas</strong>, garantindo que cada serviço siga rigorosamente as normas ambientais e de transporte de resíduos perigosos. <strong>Segurança e credibilidade para sua empresa.</strong>
                    </p>

                    
                </div>
            </Element>

            <Element name="nossos-servicos">
                <section className="servicos">
                    <h2 className="titulo-servicos fade-in-ups">Nossos Serviços</h2>
                    <p className="descricao-servicos fade-in-ups quem-somos-texto">Solução ideal para sua empresa, condomínio ou residência.</p>
                    <p className="descricao-servicos fade-in-ups quem-somos-texto"><strong>Garantimos agilidade, qualidade e preço justo.</strong></p>
                    <div className="card-container">
                        {servicos.map((servico, index) => (
                            <div key={index} className="card-servico fade-in-up">
                                <div className="icon-servico">{servico.icon}</div>
                                <h3 className="card-title">{servico.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button
                            className="botao-orcamento"
                            onClick={() => window.open("https://wa.me/5551999756027?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
                        >
                            Solicitar Orçamento
                        </button>
                </section>
            </Element>

            <div className='fade-in-ups'>

            </div>


            <div className="trabalhos-executados">
                <h2 className="titulo-servicos">Trabalhos Executados</h2>


                <div className="trabalhos-container ">
                    {[{
                        title: "HIDROJATEAMENTO DE ALTA PRESSÃO",
                        description: "Executamos limpeza técnica com jatos de água em alta pressão para remoção de incrustações, óxidos, tintas e outros resíduos em superfícies industriais, estruturas metálicas e tubulações, garantindo eficiência e preservação dos materiais.",
                        image: "foto (4).jpeg"
                    },
                    {
                        title: "DESENTUPIMENTO DE TUBULAÇÕES",
                        description: "Desobstruímos tubulações de esgoto, águas pluviais e industriais utilizando equipamentos modernos de hidrojateamento, assegurando fluxo contínuo e prevenção de danos estruturais.",
                        image: "foto (1).jpeg"
                    },
                    {
                        title: "LIMPEZA DE CAIXAS SEPARADORAS",
                        description: "Fazemos a limpeza completa de caixas separadoras de água e óleo, garantindo seu funcionamento eficiente e a conformidade com normas ambientais, prevenindo contaminações e entupimentos.",
                        image: "foto (2).jpeg"
                    },
                    {
                        title: "SUCÇÃO DE RESÍDUOS INDUSTRIAIS",
                        description: "Realizamos a sucção e remoção segura de resíduos líquidos, pastosos e semissólidos provenientes de processos industriais, utilizando equipamentos a vácuo de alta potência e obedecendo às normas ambientais vigentes.",
                        image: "foto (6).jpeg"
                    },
                    {
                        title: "TRANSPORTE DE RESÍDUOS",
                        description: "Efetuamos o transporte adequado de resíduos industriais e perigosos até estações licenciadas de tratamento e destinação final, com veículos certificados e profissionais capacitados.",
                        image: "foto (3).jpeg"
                    },
                    {
                        title: "LIMPEZA DE TANQUES",
                        description: "Executamos a limpeza interna de tanques de armazenamento de combustíveis, água, produtos químicos e efluentes, utilizando técnicas seguras e equipamentos de hidrojateamento e sucção, assegurando descontaminação e prolongando a vida útil dos recipientes.",
                        image: "foto (8).jpeg"
                    },
                    {
                        title: "LIMPEZA DE CAIXAS D'ÁGUA",
                        description: "Realizamos a higienização completa de caixas d'água residenciais, comerciais e industriais, assegurando a eliminação de sedimentos e impurezas, promovendo saúde e qualidade da água consumida.",
                        image: "foto (7).jpeg"
                    }



                    ].map((trabalho, index) => {
                        const [ref, isVisible] = useInView({ threshold: 0.2 });
                        return (
                            <div
                                ref={ref}
                                key={index}
                                className={`trabalho ${index % 2 === 0 ? 'invertido' : ''} ${isVisible ? 'animar' : ''}`}
                            >
                                <div className="texto-trabalho card-title">
                                    <h1>{trabalho.title}</h1>
                                    <p>{trabalho.description}</p>
                                </div>
                                <div className="imagem-trabalho">
                                    <img src={trabalho.image} alt={trabalho.title} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Element name="contato" className="contato-wrapper">
  <div className="contato-container-novo">
    <h2 className="titulo-con">Entre em Contato</h2>
    <p className="solic pad">Solicite seu orçamento <strong>sem compromisso</strong>! Atendimento <strong>rápido e profissional</strong>.</p>

    <div className="icones-contato-novo">
      <a href="https://www.instagram.com/vacuumjetsolucoes/" target="_blank" rel="noopener noreferrer" className="contato-item">
        <FaInstagram className="icone" />
        <span>@vacuumjetsolucoes</span>
      </a>

      <a href="mailto:vaccumjetsolucoes@gmail.com" className="contato-item">
        <FaEnvelope className="icone" />
        <span>Email: vaccumjetsolucoes@gmail.com</span>
      </a>

      <a href="https://wa.me/5551999756027" target="_blank" rel="noopener noreferrer" className="contato-item">
        <ImWhatsapp className="icone" />
        <span>Cristian: (51) 99975-6027</span>
      </a>

      <a href="https://wa.me/5551985429293" target="_blank" rel="noopener noreferrer" className="contato-item">
        <ImWhatsapp className="icone" />
        <span>Miguel: (51) 98542-9293</span>
      </a>
    </div>

    <button
      className="botao-orcamento-novo"
      onClick={() => window.open("https://wa.me/5551999756027?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
    >
      Solicitar Orçamento
    </button>
  </div>


                

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
        </Layout>
    );
}
