import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/contactpage/components/hero/Index";
import { Formulary } from "../features/contactpage/components/form/Index";
import { Footer } from "../components/footer/Index";

export function Contactpage() {
    return (
        <div>
            <Header />
            <Hero />
            <Formulary />
            <Footer />
        </div>
    );
}
