import React, { useEffect } from "react";
import { Router } from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    return (
            <div className="app">
                <Router />
            </div>
    );
}

export default App;
