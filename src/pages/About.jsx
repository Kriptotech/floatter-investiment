import React from "react";

import { Header } from "../components/header";

import { AboutUs } from "../features/aboutpage/components/about_us";
import { Content } from "../features/aboutpage/components/content";
import { Footer } from "../components/footer";
import { Hero } from "../features/aboutpage/components/hero";

export function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <Content />
            <Footer />
        </div>
    );
}
