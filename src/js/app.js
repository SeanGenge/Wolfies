import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap';
import Layout from "./pages/LayoutPage.jsx";
import Home from "./pages/HomePage.jsx";
import Search from "./pages/SearchPage.jsx";
import NoPage from "./pages/NoPage.jsx";
// Import css files
import '../css/main.scss';

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
                        <Route path="search/:searchTerm" element={<Search />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

root.render(<App />);