import style from "./styles.module.css";
import { House } from "phosphor-react";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1 data-aos="fade-down">Contacte-nos</h1>
                <p data-aos="fade-up">
                    <a href="/">
                        <House color="white" size={20} weight="fill" /> Pagina
                        inicial
                    </a>{" "}
                    // <span>Contacte-nos</span>
                </p>
            </div>
        </div>
    );
}
