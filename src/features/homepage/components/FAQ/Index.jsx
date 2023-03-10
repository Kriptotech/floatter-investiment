import style from "./styles.module.css";
import { ArrowCircleDown, ArrowCircleRight, Question } from "phosphor-react";
import { useState } from "react";

export function FAQ() {
    const [droppedFirst, setDroppedFirst] = useState(false);
    const [droppedSecond, setDroppedSecond] = useState(false);
    const [droppedThird, setDroppedThird] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.left}>
                <span>FAQ'S</span>
                <h2>
                    General <span>Frequently Asked</span> Questions
                </h2>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even. It is a long established fact that a reader will
                    be distracted by the readable content of a page when looking
                    at its layout.
                </p>

                <a href="#">
                    Ask a question{" "}
                    <ArrowCircleRight color="white" size={20} weight="fill" />
                </a>
            </div>

            <div className={style.right}>
                <div className={style.row}>
                    <div
                        className={style.row_header}
                        onClick={() => {
                            setDroppedSecond(false);
                            setDroppedThird(false);
                            setDroppedFirst(true);
                        }}
                    >
                        <div>
                            <span>
                                <Question
                                    size={30}
                                    weight="fill"
                                    color="white"
                                />
                            </span>
                            We denounce with righteous indignation
                        </div>
                        <ArrowCircleDown size={25} weight="fill" color="#555" />
                    </div>
                    {droppedFirst && (
                        <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the
                            charms of pleasure of the moment, so blinded by
                            desire.
                        </p>
                    )}
                </div>
                <div className={style.row}>
                    <div
                        className={style.row_header}
                        onClick={() => {
                            setDroppedFirst(false);
                            setDroppedThird(false);
                            setDroppedSecond(true);
                        }}
                    >
                        <div>
                            <span>
                                <Question
                                    size={30}
                                    weight="fill"
                                    color="white"
                                />
                            </span>
                            We denounce with righteous indignation
                        </div>
                        <ArrowCircleDown size={25} weight="fill" color="#555" />
                    </div>
                    {droppedSecond && (
                        <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the
                            charms of pleasure of the moment, so blinded by
                            desire.
                        </p>
                    )}
                </div>
                <div className={style.row}>
                    <div
                        className={style.row_header}
                        onClick={() => {
                            setDroppedFirst(false);
                            setDroppedSecond(false);
                            setDroppedThird(true);
                        }}
                    >
                        <div>
                            <span>
                                <Question
                                    size={30}
                                    weight="fill"
                                    color="white"
                                />
                            </span>
                            We denounce with righteous indignation
                        </div>
                        <ArrowCircleDown size={25} weight="fill" color="#555" />
                    </div>
                    {droppedThird && (
                        <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the
                            charms of pleasure of the moment, so blinded by
                            desire.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
