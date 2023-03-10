import style from "./style.module.css";
import Logo from "./logo.png";
import { Anchor, Envelope, MapPin, Phone } from "phosphor-react";

export function Footer() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.item}>
                    <img src={Logo} alt="" />

                    <p>
                        We are many variations of passages available but the
                        majority have suffered alteration in some form by
                        injected humour words which don't look even slightly
                        believable.
                    </p>
                </div>

                <div className={style.item}>
                    <h2>Contact Us</h2>
                    <a href="tel:+21236547898">
                        <Phone size={15} weight="fill" color="#6bb5ff" /> +2 123
                        654 7898
                    </a>
                    <a href="mailto:eufrasiojoao00@gmail.com">
                        <Envelope size={15} weight="fill" color="#6bb5ff" />{" "}
                        eufrasiojoao00@gmail.com
                    </a>
                    <a href="#">
                        {" "}
                        <MapPin size={15} weight="fill" color="#6bb5ff" /> 25/B
                        Milford Road, New York, USA
                    </a>
                </div>

                <div className={style.item}>
                    <h2>Quick Links</h2>

                    <a href="#">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> About
                    </a>
                    <a href="#">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> Home
                    </a>
                    <a href="#">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> FAQ'S
                    </a>
                </div>
                <div className={style.item}>
                    <h2>Other Links</h2>

                    <a href="#">
                        <Anchor size={15} weight="fill" color="#6bb5ff" />{" "}
                        Serviços
                    </a>
                    <a href="#">
                        <Anchor size={15} weight="fill" color="#6bb5ff" />{" "}
                        Termos de serviço
                    </a>
                </div>
            </div>

            <div className={style.rights}>
                <p>
                    © Copyright 2023 <span>insurox</span> All Rights Reserved.
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
