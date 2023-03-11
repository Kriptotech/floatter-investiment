import style from "./styles.module.css";
import { House } from "phosphor-react";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Politica de privacidade</h1>
                <p>
                    <a href="/">
                        <House color="white" size={20} weight="fill" /> Home
                    </a>{" "}
                    // <span>politica de privacidade</span>
                </p>
            </div>
        </div>
    );
}
