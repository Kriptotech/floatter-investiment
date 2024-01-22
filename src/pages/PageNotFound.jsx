import React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Main } from "../features/page_not_found/components/main";

export function PageNotFound() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
