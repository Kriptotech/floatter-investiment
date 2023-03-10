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
import Logo from "./logo.png";

export function TopInfo() {
    return (
        <header className={style.main_header}>
            <nav>
                <ul className={style.links}>
                    <li>
                        <a href="tel:+21236547898">
                            <Phone size={15} weight="fill" color="#fff" /> +2
                            123 654 7898
                        </a>
                    </li>
                    <li>
                        <a href="mailto:eufrasiojoao00@gmail.com">
                            <Envelope size={15} weight="fill" color="#fff" />{" "}
                            eufrasiojoao00@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {" "}
                            <MapPin size={15} weight="fill" color="#fff" /> 25/B
                            Milford Road, New York, USA
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
