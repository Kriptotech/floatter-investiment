import { HouseLine } from "phosphor-react";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>
                    <span>4</span>0<span>4</span>
                </h1>
                <p>Opos... Pagina náo encontrada!</p>
                <small>
                    The page you looking for not found may be it not exist or
                    removed.
                </small>
                <a href="/">
                    <HouseLine color="white" size={25} weight="fill" /> Go back
                    home
                </a>
            </div>
        </div>
    );
}
