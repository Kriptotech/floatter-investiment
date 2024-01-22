import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "../pages/Homepage";
import { Contactpage } from "../pages/Contact";
import { Aboutpage } from "../pages/About";
import { Servicespage } from "../pages/Services";
import { PageNotFound } from "../pages/PageNotFound";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/contact" element={<Contactpage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/services" element={<Servicespage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
