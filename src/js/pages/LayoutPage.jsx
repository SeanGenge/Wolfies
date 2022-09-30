import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/footer.jsx";

class Layout extends React.Component {
    render() {
        return (
            <>
                <Navbar />
				<div className="main-container">
					<Outlet />
				</div>
				<Footer />
            </>
            );
    }
};

export default Layout;