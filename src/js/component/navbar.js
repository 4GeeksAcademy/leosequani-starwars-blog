import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 p-4">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="logo-thumbnail position-absolute top-50 start-50 translate-middle" />
			</Link>
			<div className="ml-auto">
				<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
