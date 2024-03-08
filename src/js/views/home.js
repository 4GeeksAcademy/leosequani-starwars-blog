import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../layout";
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
	const context = useContext(AppContext);
	const [stwchar, setStwchar] = useState([]);
	const params = useParams();

	//Variables
	let tempArr = []
	let urlDataBase = [{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://arielhudnall.files.wordpress.com/2015/08/c3p0.png"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"},
	{url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"}]



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
				setStwchar(responseAsJson.results);
			})
			.catch(error => {
				console.log('Looks like there was a problem: \n', error);
			});
	}, [])


	const createFav = (ind) => {
		tempArr = [...context.fav]
		tempArr.push(stwchar[ind]);
		context.setFav(tempArr)

	}

	

	return (

		<div className="container">
			<div className="row">
				<div className="h1 pb-2 mb-4 border-bottom border-light text-light texttheme">
					Meet the Characters
				</div>
			</div>

			<div className="row cards-list dflex-justify-content-evenly" id="style2">
				{stwchar.map((elm, index) => {
					return (
						<div className="col-2 m-2 border border-rounded-4" style={{backgroundImage:"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",borderRadius: "10px"}} key={index}>
								{/* <img src={urlDataBase[index].url} className="img-fluid" alt="..."/> */}
									<div className="card-body">
										<h5 className="card-title text-light">{elm.name}</h5>
										<div className="row d-flex justify-content-between">
										<Link to={`/aboutcharacters/${elm.name}`} state={elm}>
										<button className="btn btn-primary">Find More</button>
										</Link>
										<i class="far fa-heart" style={{color: "white"}}></i>
										</div>
									</div>
						</div>
					)
				})}
			</div>

		</div>


	);
}
