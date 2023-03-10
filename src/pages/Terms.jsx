import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/termspage/components/hero/Index";
import { Footer } from "../components/footer/Index";
import { Terms } from "../features/termspage/components/terms/Index";

export function Termspage() {
    return (
        <div>
            <Header />
            <Hero />
            <Terms />
            <Footer />
        </div>
    );
}
