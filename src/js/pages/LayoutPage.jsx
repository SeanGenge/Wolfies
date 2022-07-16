import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

class Layout extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
            );
    }
};

export default Layout;