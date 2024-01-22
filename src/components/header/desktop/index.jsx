import { ArrowCircleRight, ArrowDown } from "phosphor-react";
import { TopInfo } from "../top_info/index.jsx";

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
                        <a href="/">Pagina inicial</a>
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
                            Produtos <ArrowDown />
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
                        <a href="/services">Serviços</a>
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
