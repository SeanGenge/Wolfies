import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import NoPage from "./pages/NoPage.jsx";

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