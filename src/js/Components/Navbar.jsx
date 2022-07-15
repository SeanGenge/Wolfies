import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar bg-light">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Wolfies</Link>
					<Link to="/search">Wolfies</Link>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					</form>
				</div>
			</nav>
		  );
	}
};

export default Navbar;