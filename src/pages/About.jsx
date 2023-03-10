import React from "react";

import { Header } from "../components/header/Index";

import { AboutUs } from "../features/aboutpage/components/about_us/Index";
import { SecondRow } from "../features/aboutpage/components/second_row/Index";
import { Footer } from "../components/footer/Index";
import { Hero } from "../features/aboutpage/components/hero/Index";

export function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <SecondRow />
            <Footer />
        </div>
    );
}
