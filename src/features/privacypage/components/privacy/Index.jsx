import style from "./styles.module.css";

export function Privacy() {
    return (
        <div className={style.container}>
            {[1, 2, 1, 1, 1, 1].map((v, i) => {
                return (
                    <div key={i} className={style.box}>
                        <h2>Our Privacy</h2>
                        <p>
                            Sed ac sollicitudin ipsum. Vivamus vulputate, enim
                            sit amet aliquet lacinia, ex mauris aliquam elit,
                            vel pharetra augue arcu ultricies magna. Suspendisse
                            justo erat, dignissim ut imperdiet ut, convallis
                            vitae urna. Vivamus tincidunt lacinia metus sed
                            suscipit. Phasellus luctus rhoncus mauris ut
                            euismod. Aliquam elementum malesuada erat, vitae
                            bibendum ex rutrum eget. Mauris sed nunc mauris.
                            Curabitur semper sed justo a pellentesque. In hac
                            habitasse platea dictumst. Mauris semper volutpat
                            iaculis. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia curae;
                            Curabitur consectetur dignissim nulla id ornare.
                            Praesent placerat dolor vitae tellus lacinia, a
                            malesuada est sodales. Praesent at consectetur sem,
                            sed scelerisque arcu. Maecenas malesuada lorem id
                            sagittis scelerisque. In hac habitasse platea
                            dictumst.
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
