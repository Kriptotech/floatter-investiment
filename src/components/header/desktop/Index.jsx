import { ArrowCircleRight } from "phosphor-react";
import { TopInfo } from "../top_info/Index.jsx";

import style from "./styles.module.css";
import Logo from "./logo.png";

export function DesktopHeader() {
    return (
        <header className={style.main_header}>
            <TopInfo />
            <nav>
                <a href="/">
                    <img src={Logo} alt="" />
                </a>

                <ul className={style.links}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Paginas</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Termos de serviço</a>
                    </li>
                    <li>
                        <a href="#">
                            <button>
                                Contactar{" "}
                                <ArrowCircleRight
                                    color="#fff"
                                    size={20}
                                    weight="fill"
                                />
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
