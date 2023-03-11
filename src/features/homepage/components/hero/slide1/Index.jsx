import style from "./styles.module.css";

export function SlideOne() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <span>Floatter Investiment!</span>
                <h1>
                    Investindo na Floatter tens “o melhor negocio para uma vida
                    melhor”
                </h1>
                <p>
                    No entanto, nosso objetivo é aconselhar e oferecer soluções
                    para todas as necessidades de serviços financeiros de nossos
                    clientes.
                </p>

                <div>
                    <a href="/contact">Invista já</a>
                    <a href="/about">Floatter</a>
                </div>
            </div>
        </div>
    );
}
