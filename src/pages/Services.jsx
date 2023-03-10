import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/servicespage/components/hero/Index";
import { OurServices } from "../features/servicespage/components/our_services/Index";
import { Footer } from "../components/footer/Index";

export function Servicespage() {
    return (
        <div>
            <Header />
            <Hero />
            <OurServices />
            <Footer />
        </div>
    );
}
