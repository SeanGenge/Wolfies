import React from "react";

class Navigation extends React.Component {
	render() {
		return (
			<nav class="navbar bg-light">
				<div class="container-fluid">
					<a href="./index.html" class="navbar-brand">Wolfies</a>
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					</form>
				</div>
			</nav>
		  );
	}
};

export default Navigation;