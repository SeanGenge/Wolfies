import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./src/js/pages/LayoutPage.jsx";
import Home from "./src/js/pages/HomePage.jsx";
import Search from "./src/js/pages/SearchPage.jsx";
import NoPage from "./src/js/pages/NoPage.jsx";
// Import css files
import './src/css/movieCarousel.css';
import './src/css/movieCard.css';

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

// The root of the application
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="search" element={<Search />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

root.render(<App />);