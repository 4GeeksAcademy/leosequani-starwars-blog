import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../layout";

export const Navbar = () => {
	let deletearr= []

	const context = useContext(AppContext);

	const deleteFunction =(elmin)=>{
		deletearr = context.fav.filter(elm => elm != elmin);
		context.setFav(deletearr)
	}

	
	

	return (
		<nav className="navbar mb-2">
			<div className="col">socials</div>
			<div className="col d-flex justify-content-center">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" className="w-100 h-75" />
				</Link>
			</div>
			<div className="col d-flex justify-content-center">
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul className="dropdown-menu">
						{
							context.fav.map((elm,ind) => {
								return (
									<li key={ind}><a className="dropdown-item" href="#"><span className="pe-4">{elm.name}</span><i className="fas fa-trash" onClick={()=>{deleteFunction(elm)}}></i></a></li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
