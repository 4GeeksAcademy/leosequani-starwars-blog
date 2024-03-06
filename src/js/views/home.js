import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

//1.Fetch Data
//2.Create a state hook to hold the array with characters
//3.Create an individual card component to display character
//4.Map through all characters and call the card component for each one
//5.Click on card button to show more infor


export const Home = () => {
	//StateHooks


	const [stwchar, setStwchar] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch('https://swapi.dev/api/people')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as JSON
				return response.json();
			})
			.then(responseAsJson => {
				// Do stuff with the JSONified response
				setStwchar(responseAsJson.results)
			})
			.catch(error => {
				console.log('Looks like there was a problem: \n', error);
			});
	}, [])


	return (

		<div className="container">
			<div className="row">
				<div className="h4 pb-2 mb-4 border-bottom border-secondary">
					Meet the Characters
				</div>
			</div>
			<div className="row">
				{stwchar.map((elm, index) => {
					return (
						<div className="col-2" key={index}>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WHFzYAzGfvjR3wPUO0Y2MB7AbEqh5KGIAmBluRTopg&s" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{elm.name}</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className="row">
									<Link to={`/aboutcharacters/${elm.name}`} state={elm}>
										<button className="btn btn-primary">Click to find more</button>
									</Link>
								</div>
							</div>
						</div>

					)
				})}


			</div>
		</div>



	);
}
