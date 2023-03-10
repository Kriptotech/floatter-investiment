import style from "./styles.module.css";
import { ArrowCircleRight } from "phosphor-react";

import ImgOne from "./01.jpg";
import ImgTwo from "./02.jpg";
import ImgThree from "./03.jpg";
import ImgFour from "./04.jpg";
import ImgFive from "./05.jpg";
import ImgSix from "./06.jpg";

export function OurServices() {
    return (
        <div className={style.main_container}>
            <div className={style.header}>
                <span>NOSSOS SERVIÇOS</span>
                <h1>
                    O Que <span>Oferecemos</span>
                </h1>
                {/* <p>
                    Alto grau de sofisticação de seus investimentos, acesso a
                    fundos exclusivos e resiliência necessária frente a
                    volatilidade do mercado. Algoritmo que monitora até 13.000
                    combinações possíveis, para montar a carteira personalizada
                    para você.
                </p> */}
            </div>

            <div className={style.container}>
                <div className={style.box}>
                    <img src={ImgOne} alt="" />
                    <h3>Liberdade Financeira</h3>
                    <p>
                        Uma carteira diversificada tem chances maiores e mais
                        probabilidade de alcançar objetivos.
                    </p>
                    <a href="#">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <img src={ImgTwo} alt="" />
                    <h3>Consultoria de Negocios</h3>
                    <p>
                        Alto grau de sofisticação de seus investimentos, acesso
                        a fundos exclusivos e resiliência necessária frente a
                        volatilidade do mercado.
                    </p>
                    <a href="#">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <img src={ImgThree} alt="" />
                    <h3>Negocio Flexivel e Seguro</h3>
                    <p>
                        A Floatter cuida dos seus investimentos e seus negócios,
                        multiplicando os seus ganhos ate 3X do valor investido.
                    </p>
                    <a href="#">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <img src={ImgFour} alt="" />
                    <h3>Administração de Investimentos</h3>
                    <p>
                        Monitoramos o mercado, fazemos o rebalanceamento
                        periódico da sua carteira e você acompanha tudo pela
                        plataforma, enquanto faz o que ninguém pode fazer por
                        você: aproveitar a vida.
                    </p>
                    <a href="#">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <img src={ImgFive} alt="" />
                    <h3>Tecnologia de Ponta e Especialistas de Mercado</h3>
                    <p>
                        Nosso algoritmo faz cálculos humanamente impossíveis
                        para otimizar sua carteira. As análises de mercado,
                        feitas pelos nossos especialistas, completam este dueto
                        virtuoso. O app é intuitivo e prático, você acompanha
                        tudo em tempo real.
                    </p>
                    <a href="#">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <img src={ImgSix} alt="" />
                    <h3>Melhor Modelo de Negócio</h3>
                    <p>
                        Taxa única e transparente para fazer a gestão da sua
                        carteira e buscar ótimos retornos. Sem conflito de
                        interesses, devolução de 300% do valor investido e com o
                        melhor custo benefício em 540 dias, no total de 18
                        Meses.
                    </p>
                    <a href="#">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
            </div>
        </div>
    );
}
