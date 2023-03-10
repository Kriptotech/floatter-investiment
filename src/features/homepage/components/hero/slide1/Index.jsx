import style from "./styles.module.css";

export function SlideOne() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <span>Floatter Investiment!</span>
                <h1>Gerenciamentos Optimizados</h1>
                <p>
                    Oferecemos um gerenciamento abrangente de portfólio,
                    montamos uma carteira ideal para si, junto a outras contas
                    de investimento e gerenciamos um portfólio projectado para
                    atender às suas necessidades.
                </p>

                <div>
                    <a href="/contact">Invista já</a>
                    <a href="/about">Floatter</a>
                </div>
            </div>
        </div>
    );
}
