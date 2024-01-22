import { ArrowDown, List, X } from "phosphor-react";

import style from "./styles.module.css";
import Logo from "./logo.png";
import { useState } from "react";

export function MobileHeader() {
    const [droppedDown, setDroppedDown] = useState(false);
    return (
        <header className={style.main_header}>
            <nav>
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
                {!droppedDown ? (
                    <button onClick={() => setDroppedDown(true)}>
                        <List color="#000000" size={30} weight="fill" />
                    </button>
                ) : (
                    <button onClick={() => setDroppedDown(false)}>
                        <X color="#000000" size={30} weight="fill" />
                    </button>
                )}
            </nav>

            {droppedDown && (
                <ul className={style.links}>
                    <a href="/">
                        <li>
                            Pagina inicial
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="/about">
                        <li>
                            Sobre
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    {/* <a href="/team">
                        <li>
                            Equipe
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a> */}
                    <a href="/services">
                        <li>
                            Serviços
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="/contact">
                        <li>
                            Contactar
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="https://payfloat.co.mz">
                        <li>
                            PayFloat
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="https://iShare.co.mz">
                        <li>
                            IShare SMS
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                </ul>
            )}
        </header>
    );
}
