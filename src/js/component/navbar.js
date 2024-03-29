import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../layout";

export const Navbar = () => {
	let deletearr = []
	const context = useContext(AppContext);


	const deleteFunction = (deleteid) => {
		let deletearr = context.fav.filter((elm) => elm.id != deleteid);
		console.log(deletearr);
		fetch(`https://organic-adventure-977rjvgv9p6437jxp-3000.app.github.dev/deletefavorite/${deleteid}`, { method: 'DELETE' })
				.then(() => context.setFav(deletearr))
				.then(() => context.setToggle(!context.toggle))
				.then(() => console.log('Delete successful'));

	}
	
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
														{fave.char_name?fave.char_name:fave.planet_name}
													</span>
												</button>
											</div>
											<div className="col-3">
												<i className="fas fa-trash pointer" onClick={() => { deleteFunction(fave.id) }}></i>
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
