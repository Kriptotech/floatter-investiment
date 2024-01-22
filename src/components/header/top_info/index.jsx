import {
    ArrowCircleRight,
    Envelope,
    FacebookLogo,
    InstagramLogo,
    MapPin,
    Phone,
    TelegramLogo,
    TwitterLogo,
    WhatsappLogo,
} from "phosphor-react";

import style from "./styles.module.css";

export function TopInfo() {
    return (
        <header className={style.main_header}>
            <nav>
                <ul className={style.links}>
                    <li>
                        <a href="tel:+258842201091">
                            <Phone size={15} weight="fill" color="#fff" />{" "}
                            +258842201091
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@ifloatter.com">
                            <Envelope size={15} weight="fill" color="#fff" />{" "}
                            info@ifloatter.com
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {" "}
                            <MapPin size={15} weight="fill" color="#fff" /> Av.
                            do Trabalho, Rua da Unidade 5003, Grande Bazar
                        </a>
                    </li>
                </ul>
                <ul className={style.links}>
                    <li>
                        Redes sociais:
                        <a href="#">
                            <FacebookLogo
                                size={15}
                                weight="fill"
                                color="#fff"
                            />
                        </a>
                        <a href="#">
                            <InstagramLogo
                                size={15}
                                weight="fill"
                                color="#fff"
                            />
                        </a>
                        <a href="#">
                            <TwitterLogo size={15} weight="fill" color="#fff" />
                        </a>
                        <a href="#">
                            <TelegramLogo
                                size={15}
                                weight="fill"
                                color="#fff"
                            />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?1=pt_br&phone=258842201091"
                            className={style.WhatsappLogo_container}
                        >
                            <WhatsappLogo
                                size={15}
                                color="white"
                                weight="fill"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
