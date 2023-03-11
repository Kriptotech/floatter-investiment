import React from "react";
import { useState } from "react";
import axios from "axios";
// import { PulseLoader } from "react-spinners";
// import Swal from "sweetalert2";

import style from "./styles.module.css";

export function Formulary() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    async function sebmitForm(params) {
        params.preventDefault();
        setMessage("");
        // console.log(name, email, content);

        if (name != "" && email != "" && content != "") {
            setLoading(true);
            let res = await axios.post(
                `https://${process.env.REACT_APP_ENDPOINT}web_email_support.php?email=${email}&name=${name}&message=${content}`
            );
            setLoading(false);
            // Swal.fire({
            //     title: "SUCESSO!",
            //     text: "Email enviado com suceeso",
            //     icon: "success",
            //     confirmButtonText: "OK",
            // });

            console.log(res.data);
        } else {
            setMessage("preencha todos campos");
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
                                        required
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
                                required
                                id="desc"
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            {message && (
                                <>
                                    <br />
                                    <p style={{ color: "tomato" }}>{message}</p>
                                </>
                            )}
                            <button>
                                {isLoading
                                    ? `ENVIAR MENSAGEM`
                                    : // <PulseLoader color="white" />
                                      `ENVIAR MENSAGEM`}
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
