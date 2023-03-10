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
                    <a href="#">
                        <li>
                            Home
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Sobre
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Paginas
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Serviços
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Termos de serviço
                            <ArrowDown
                                color="black"
                                size={10}
                                weight="duotone"
                            />
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Contactar
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
