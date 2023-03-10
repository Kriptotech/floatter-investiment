import style from "./styles.module.css";
import { House } from "phosphor-react";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Nossos serviços</h1>
                <p>
                    <a href="/">
                        <House color="white" size={20} weight="fill" /> Home
                    </a>{" "}
                    // <span>Nossos serviços</span>
                </p>
            </div>
        </div>
    );
}
