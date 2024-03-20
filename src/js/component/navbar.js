import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../layout";

export const Navbar = () => {
	let deletearr = []
	const context = useContext(AppContext);


	const deleteFunction = (elmin) => {
		deletearr = context.fav.filter(elm => elm != elmin);
		context.setFav(deletearr)
	}




	return (
		<nav className="navbar mb-2">
			<div className="col">socials</div>
			<div className="col d-flex justify-content-center">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" className="w-100 h-75" />

			</div>
			<div className="col d-flex justify-content-center">
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<Link to="/">
						<button type="button" className="btn btn-light">Change User</button>
					</Link>
					<ul className="dropdown-menu">
						{
							context.fav.map((elm, ind) => {
								return (
									<li key={ind}>
										<div className="row">
											<div className="col-9">
												<Link to={`/aboutcharacters/${elm}`} state={elm}>
													<button className="dropdown-item">
														<span className="pe-4">{elm}</span></button>
												</Link>
											</div>
											<div className="col-3">
												<i className="fas fa-trash pointer" onClick={() => { deleteFunction(elm) }}></i>
											</div>
										</div>
									</li>
								)
							})
						}
					</ul>

				</div>
			</div>
		</nav>
	);
};
