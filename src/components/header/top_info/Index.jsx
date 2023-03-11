import {
    ArrowCircleRight,
    Envelope,
    FacebookLogo,
    InstagramLogo,
    MapPin,
    Phone,
    TwitterLogo,
} from "phosphor-react";

import style from "./styles.module.css";

export function TopInfo() {
    return (
        <header className={style.main_header}>
            <nav>
                <ul className={style.links}>
                    <li>
                        <a href="tel:+2588600009000">
                            <Phone size={15} weight="fill" color="#fff" />{" "}
                            +2588600009000
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
                        Nos siga em:
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
                    </li>
                </ul>
            </nav>
        </header>
    );
}
