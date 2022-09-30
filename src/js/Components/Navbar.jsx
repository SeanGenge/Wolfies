import React from "react";
import { Link, Navigate } from "react-router-dom";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			navHasBackground: false
		};
		
		this.changeNavbarBackground = this.changeNavbarBackground.bind(this);
		this.search = this.search.bind(this);
	}
	
	changeNavbarBackground(e) {
		if (window.scrollY >= 25) {
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
	
	search(e) {
		if (e.key === "Enter") {
			// Prevent page refresh when pressing enter
			e.preventDefault();
			let searchTerm = e.target.value;
			
			window.location = `/search/${searchTerm}`;
		}
	}
	
	componentDidMount() {
		this.changeNavbarBackground();
		
		window.addEventListener("scroll", this.changeNavbarBackground);
		document.getElementById("search").addEventListener("keypress", this.search);
	}
	
	render() {
		let navClass = "navbar sticky-top " + (this.state.navHasBackground ? "navbar-background" : "");
		let { searchTerm } = this.state;
		
		return (
			<nav className={navClass}>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Wolfies</Link>
					<form className="d-flex" role="search">
						<input id="search" className="form-control me-2" type="text" placeholder="Search" />
					</form>
				</div>
			</nav>
		  );
	}
};

export default Navbar;