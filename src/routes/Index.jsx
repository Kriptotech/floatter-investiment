import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Homepage } from "../pages/Homepage";
import { Contactpage } from "../pages/Contact";
import { Aboutpage } from "../pages/About";
import { Servicespage } from "../pages/Services";
import { Teampage } from "../pages/Team";
import { Termspage } from "../pages/Terms";
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
                    <Route path="/team" element={<Teampage />} />
                    <Route path="/terms" element={<Termspage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
