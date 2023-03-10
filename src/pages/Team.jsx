import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/teampage/components/hero/Index";
import { Footer } from "../components/footer/Index";
import { OurTeam } from "../features/teampage/components/our_team/Index";

export function Teampage() {
    return (
        <div>
            <Header />
            <Hero />
            <OurTeam />
            <Footer />
        </div>
    );
}
