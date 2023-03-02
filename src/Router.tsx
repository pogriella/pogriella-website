import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

const Router = (): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
                <Route index element={ <Home /> } />
                <Route path="contact" element={ <Contact /> } />
                <Route path="projects" element={ <Projects /> } />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;