import React from "react";
import { useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

import style from "./styles.module.css";

export function Formulary() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setLoading] = useState(false);

    async function sebmitForm(params) {
        params.preventDefault();

        if (name != "" && name != "" && content != "") {
            setLoading(true);

            try {
                let res = await axios.post(`https://talented-shift-bear.cyclic.app/send_email`, {
                    name,
                    message: content,
                    email,
                });

                if (res.data.succes === true) {
                    Swal.fire({
                        title: "SUCESSO!",
                        text: "Email enviado com suceeso",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }else{
                    Swal.fire({
                        title: "Erro!",
                        text: "Falha ao enviar o email",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Erro!",
                    text: "Falha ao enviar o email",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
            
            setLoading(false);
        } else {
            Swal.fire({
                title: "Alerta!",
                text: "preencha todos os campos",
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
    }

    return (
        <div className={style.formulary}>
            <div className={style.formulary_container}>
                <div className={style.formulary_row}>
                    <div className={style.formulary_item} data-aos="fade-right">
                        <form onSubmit={(e) => sebmitForm(e)}>
                            <div className={style.input_container}>
                                <div className={style.input_box}>
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className={style.input_box}>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        required
                                        type="text"
                                        id="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></input>
                                </div>
                            </div>

                            <label htmlFor="desc">Mensagem</label>
                            <textarea
                                id="desc"
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>

                            <button>
                                {isLoading ? (
                                    <PulseLoader color="white" />
                                ) : (
                                    `ENVIAR MENSAGEM`
                                )}
                            </button>
                        </form>
                    </div>

                    <div className={style.formulary_item} data-aos="fade-left">
                        <div className={style.item_box}>
                            <h3>Nos visite</h3>
                            <p>
                                Av. do Trabalho, Rua da Unidade 5003, Grande
                                Bazar
                                <br />
                                Tel:+258 860000001
                            </p>
                        </div>

                        <br />

                        <div className={style.item_box}>
                            <h3>Aberto</h3>
                            <p>Segunda- Sabado {"(7h-19h)"}</p>
                        </div>

                        <br />

                        <div className={style.item_box}>
                            <h3>Fale conosco</h3>
                            <p>Voce pode falar conosco com o email abaixo:</p>
                            <p>E-mail: info@ifloatter.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
