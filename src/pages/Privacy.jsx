import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/privacypage/components/hero/Index";
import { Footer } from "../components/footer/Index";
import { Privacy } from "../features/privacypage/components/privacy/Index";

export function Privacypage() {
    return (
        <div>
            <Header />
            <Hero />
            <Privacy />
            <Footer />
        </div>
    );
}
