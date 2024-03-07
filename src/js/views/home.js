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
		fetch('https://swapi.tech/api/people')
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
				<div className="h1 pb-2 mb-4 border-bottom border-light text-light texttheme">
					Meet the Characters
				</div>
			</div>

			<div className="row cards-list dflex-justify-content-between" id="style2">
				{stwchar.map((elm, index) => {
					return (
						<div className="col-2 my-1" key={index}>
							<Link to={`/aboutcharacters/${elm.name}`} state={elm}>
								<div className="card 1 ">
									<div className="card_image"> <img src="https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*" /> </div>
									<div className="card_title title-white">
										<span>{elm.name}</span>
									</div>
								</div>
							</Link>
						</div>
					)
				})}
			</div>

		</div>


	);
}
