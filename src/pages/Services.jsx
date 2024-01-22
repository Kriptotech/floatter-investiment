import React from "react";

import { Header } from "../components/header";
import { Hero } from "../features/servicespage/components/hero";
import { OurServices } from "../features/servicespage/components/our_services";
import { Footer } from "../components/footer";
import { Content } from "../features/servicespage/components/content";

export function Servicespage() {
    return (
        <div>
            <Header />
            <Hero />
            <OurServices />
            <Content />
            <Footer />
        </div>
    );
}
