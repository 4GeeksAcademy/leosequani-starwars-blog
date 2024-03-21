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
	
	
	// const funct = () => {
	// 	let charids = context.fav.map(
	// 	elm => fav.char_id
	// );
	// 	let fav_characters = context.stwchar.filter(
	// 		char => charids.includes(char.id)
	// 	) 	
	// 	}
	
	return (
		<nav className="navbar mb-2">
			<div className="col">socials</div>
			<div className="col d-flex justify-content-center">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" className="w-100 h-75" />
			</div>
			{context.fav.length ? <div className="col d-flex justify-content-center">
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<Link to="/">
						<button type="button" className="btn btn-light">Change User</button>
					</Link>
					<ul className="dropdown-menu">
						{
							context.fav.map((fave, ind) => {
								return (
									<li key={ind}>
										<div className="row">
											<div className="col-9">
												<button className="dropdown-item">
													<span className="pe-4">
														{fave.char_name}
													</span>
												</button>
											</div>
											<div className="col-3">
												<i className="fas fa-trash pointer" onClick={() => { deleteFunction(elm.char_id) }}></i>
											</div>
										</div>
									</li>
								)
							})
						}
					</ul>

				</div>
			</div> :
				<div className="spinner-border text-warning" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>}

		</nav>
	);
};
