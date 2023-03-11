import style from "./styles.module.css";
import { ArrowCircleRight, Calendar, UserCircle } from "phosphor-react";

import ImgOne from "./01.jpg";
import ImgTwo from "./02.jpg";
import ImgThree from "./03.jpg";

export function OurMeetings() {
    return (
        <div className={style.main_container}>
            <div className={style.header}>
                <span>NOSSAS PLATAFORMAS DIGITAIS</span>
                <h1>
                    Reuniões & <span>Palestras / Workshops</span>
                </h1>
                <p>
                    De modo a garantir que os nossos clientes fiquem
                    informado,optamos em calendarizar as nossas actividades,
                    palestras, Workshops e Reuniões.
                </p>
            </div>

            <div className={style.container}>
                <div className={style.box}>
                    <img src={ImgOne} alt="" />
                    <p>
                        <span>
                            <UserCircle
                                color="#4298ef"
                                size={20}
                                weight="fill"
                            />
                        </span>{" "}
                        Oradores: Daniela Juma/Martins Helder
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Todas Segundas-feiras 21h no Whatsap pelo contacto{" "}
                        {"(8412345678)"}
                    </p>
                </div>
                <div className={style.box}>
                    <img src={ImgTwo} alt="" />
                    <p>
                        <span>
                            <UserCircle
                                color="#4298ef"
                                size={20}
                                weight="fill"
                            />
                        </span>{" "}
                        Oradores: Daniela Juma/Martins Helder
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Todas Segundas-feiras 21h no Whatsap pelo contacto{" "}
                        {"(8412345678)"}
                    </p>
                </div>
                <div className={style.box}>
                    <img src={ImgThree} alt="" />
                    <p>
                        <span>
                            <UserCircle
                                color="#4298ef"
                                size={20}
                                weight="fill"
                            />
                        </span>{" "}
                        Oradores: Daniela Juma/Martins Helder
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Todas Segundas-feiras 21h no Whatsap pelo contacto{" "}
                        {"(8412345678)"}
                    </p>
                </div>
            </div>
        </div>
    );
}
