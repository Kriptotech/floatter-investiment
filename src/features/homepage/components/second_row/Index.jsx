import style from "./styles.module.css";

export function SecondRow() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h2>1500</h2>
                <p>+ Projects Done</p>
            </div>
            <div className={style.box}>
                <h2>250</h2>
                <p>+ Happy Clients</p>
            </div>

            <div className={style.box}>
                <h2>120</h2>
                <p>+ Active Experts</p>
            </div>

            <div className={style.box}>
                <h2>50</h2>
                <p>+ Win Awards</p>
            </div>
        </div>
    );
}
