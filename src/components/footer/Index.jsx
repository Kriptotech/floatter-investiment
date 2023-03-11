import style from "./style.module.css";
import Logo from "./logo.png";
import { Anchor, Clock, Envelope, MapPin, Phone } from "phosphor-react";

export function Footer() {
    return (
        <div className={style.container}>
            <div className={style.box} data-aos="fade-up">
                <div className={style.item}>
                    <img src={Logo} alt="" />

                    <p>
                        Oferecemos um gerenciamento abrangente de portfólio,
                        montamos uma carteira ideal para si, junto a outras
                        contas de investimento e gerenciamos um portfólio
                        projectado para atender às suas necessidades.
                    </p>
                </div>

                <div className={style.item}>
                    <h2>Nossos Contactos</h2>
                    <a href="mailto:email: info@ifloatter.com">
                        <Envelope size={15} weight="fill" color="#6bb5ff" />{" "}
                        email: info@ifloatter.com
                    </a>
                    <a>
                        {" "}
                        <MapPin size={15} weight="fill" color="#6bb5ff" /> Av.
                        do Trabalho, Rua da Unidade 5003, Grande Bazar
                    </a>
                    <a>
                        <Clock size={15} weight="fill" color="#6bb5ff" />{" "}
                        Segunda- Sabado {"(7h- 19h)"}
                    </a>
                </div>

                <div className={style.item}>
                    <h2>Atalhos Rapidos</h2>

                    <a href="/about">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> Sobre
                    </a>
                    <a href="/">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> Home
                    </a>
                    <a>
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> FAQ'S
                    </a>
                </div>
                <div className={style.item}>
                    <h2>Outros Links</h2>

                    <a href="/services">
                        <Anchor size={15} weight="fill" color="#6bb5ff" />{" "}
                        Serviços
                    </a>
                    <a href="/terms">
                        <Anchor size={15} weight="fill" color="#6bb5ff" />{" "}
                        Termos de serviço
                    </a>
                    <a href="/privacy">
                        <Anchor size={15} weight="fill" color="#6bb5ff" />{" "}
                        Politica de privacidade
                    </a>
                </div>
            </div>

            <div className={style.rights}>
                <p>
                    © Copyright 2023 <span>Floatter Investiment</span> All
                    Rights Reserved.
                </p>
                <p>
                    Developed & Powered by{" "}
                    <a target="_blank" href="https://kriptotech.netlify.app">
                        Kriptotech
                    </a>
                </p>
            </div>
        </div>
    );
}
