import { ArrowCircleRight, ArrowDown } from "phosphor-react";
import { TopInfo } from "../top_info/Index.jsx";

import style from "./styles.module.css";
import Logo from "./logo.png";
import { useState } from "react";

export function DesktopHeader() {
    const [isMouseOver, setIsMouseOver] = useState(false);
    return (
        <header className={style.main_header}>
            <TopInfo />
            <nav>
                <a href="/">
                    <img src={Logo} alt="" />
                </a>

                <ul className={style.links}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li
                        onMouseOver={() => {
                            setIsMouseOver(true);
                        }}
                        onMouseOut={() => {
                            setIsMouseOver(false);
                        }}
                    >
                        <span>
                            Mais <ArrowDown />
                        </span>
                        {isMouseOver && (
                            <div className={style.dropped_box}>
                                <div className={style.dropped_box_space}>
                                    <div className={style.dropped_box_list}>
                                        <a href="https://payfloat.co.mz">
                                            PayFloat
                                        </a>
                                        <a href="https://iShare.co.mz">
                                            IShare SMS
                                        </a>
                                        <a>Treinamentos</a>
                                        <a>Consultoria</a>
                                        <a>Fiscalidade</a>
                                        <a>Auditoria</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="/about">Sobre</a>
                    </li>
                    {/* <li>
                        <a href="/team">Equipe</a>
                    </li> */}
                    <li>
                        <a href="/services">Servi??os</a>
                    </li>
                    <li>
                        <a href="/terms">Termos de servi??o</a>
                    </li>
                    <li>
                        <a href="/contact">
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
