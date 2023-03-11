import style from "./styles.module.css";
import IMG from "./01.jpg";
import { ArrowCircleRight } from "phosphor-react";

export function AboutUs() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img src={IMG} alt="" />

                <div className={style.box}>
                    <div>3</div>
                    Anos de Experiencia
                </div>
            </div>

            <div className={style.right}>
                <span>SOBRE NÓS</span>
                <h2>
                    Melhor Investimento <span>Flexivel E Seguro</span> Para Ti
                </h2>
                <p>
                    Na qualidade de gestão de negócios e finanças
                    disponibilizamos uma plataforma para investidores locais e
                    estrangeiros no processo de investimento em Pacotes
                    presentes dentro da plataforma. Dispomos de uma equipa
                    altamente especializada e dotada de integridade e
                    profissionalismo no melhor interesse do cliente. Nossa
                    filosofia de negociação está ancorada na execução precisa e
                    oportuna das solicitações dos clientes, mantendo os mais
                    elevados padrões de transparência, confidencialidade e
                    independência na monitoria da sua carteira dentro da
                    plataforma.
                </p>

                <a href="/about">
                    Saiba mais{" "}
                    <ArrowCircleRight color="white" size={20} weight="fill" />
                </a>
            </div>
        </div>
    );
}
