import React from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./Navigation.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Navigation />);