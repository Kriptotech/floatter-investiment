import style from "./styles.module.css";
import {  Calendar, UserCircle } from "phosphor-react";


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
                    <img src='/images/10.jpg' alt="" />
                    <p>
                        <span>
                            <UserCircle
                                color="#4298ef"
                                size={20}
                                weight="fill"
                            />
                        </span>{" "}
                        Workshops: presenciais e online via Zoom-Google Meeting.
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Reuniões: Segundas, Terças, e Sextas.
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Palestras: Segundas, Terças, e Quintas.
                    </p>
                </div>
                <div className={style.box}>
                    <img src='/images/2.jpg' alt="" />
                    <p>
                        <span>
                            <UserCircle
                                color="#4298ef"
                                size={20}
                                weight="fill"
                            />
                        </span>{" "}
                        Workshops: presenciais e online via Zoom-Google Meeting.
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Reuniões: Segundas, Terças, e Sextas.
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Palestras: Segundas, Terças, e Quintas.
                    </p>
                </div>
                <div className={style.box}>
                    <img src='/images/3.jpg' alt="" />
                    <p>
                        <span>
                            <UserCircle
                                color="#4298ef"
                                size={20}
                                weight="fill"
                            />
                        </span>{" "}
                        Workshops: presenciais e online via Zoom-Google Meeting.
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Reuniões: Segundas, Terças, e Sextas.
                    </p>
                    <p>
                        <span>
                            <Calendar color="#4298ef" size={20} weight="fill" />
                        </span>{" "}
                        Palestras: Segundas, Terças, e Quintas.
                    </p>
                </div>
            </div>
        </div>
    );
}
