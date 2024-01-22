import React from "react";

import { Header } from "../components/header";
import { Hero } from "../features/contactpage/components/hero";
import { Formulary } from "../features/contactpage/components/form";
import { Footer } from "../components/footer";

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
