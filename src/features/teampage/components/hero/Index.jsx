import style from "./styles.module.css";
import { House } from "phosphor-react";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1 data-aos="fade-down">Nossa equipe</h1>
                <p data-aos="fade-up">
                    <a href="/">
                        <House color="white" size={20} weight="fill" /> Home
                    </a>{" "}
                    // <span>Nossa equipe</span>
                </p>
            </div>
        </div>
    );
}
