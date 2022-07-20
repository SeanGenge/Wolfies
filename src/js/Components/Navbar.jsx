import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			navHasBackground: false
		};
		
		this.changeNavbarBackground = this.changeNavbarBackground.bind(this);
	}
	
	changeNavbarBackground() {
		if (window.scrollY >= 66) {
			this.setState({
				navHasBackground: true
			});
		}
		else {
			this.setState({
				navHasBackground: false
			});
		}
	}
	
	componentDidMount() {
		this.changeNavbarBackground();
		
		window.addEventListener("scroll", this.changeNavbarBackground)
	}
	
	render() {
		let navClass = "navbar sticky-top " + (this.state.navHasBackground ? "navbar-background" : "");
		
		return (
			<nav className={navClass}>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Wolfies</Link>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					</form>
				</div>
			</nav>
		  );
	}
};

export default Navbar;