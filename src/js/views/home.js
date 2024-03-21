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
	const { stwchar, setStwchar, setFav, fav, stwPlan, setPlan, user } = useContext(AppContext);
	const params = useParams();
	const [toggle,setToggle]=useState(false)
	//Variables
	let tempArr = []

	useEffect(() => {
		fetch(`https://organic-adventure-977rjvgv9p6437jxp-3000.app.github.dev/favorites/${user[0].id}`)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(responseAsJson => {
				setFav(responseAsJson)
			})
			.catch(error => {
				console.log('Looks like there was a problem: \n', error);
			});
	}, [user]);


	const createFav = (ind, char, click) => {
		let newArray2 = fav.find((element) => element == char)
		if (!newArray2) {
			tempArr = [...fav]
			tempArr.push(char);
			setFav(tempArr)
			fetch(`https://organic-adventure-977rjvgv9p6437jxp-3000.app.github.dev/addfavorites`, {
			method: 'POST',
			body: JSON.stringify({
				"user_id": user[0].id,
				"homeworld_id": null,
				"char_Name": char.name

			}), // data can be a 'string' or an {object} which comes from somewhere further above in our application
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response =>{ 
				console.log('Success:', response)
				
			})
			.catch(error => console.error(error));
			fetch(`https://organic-adventure-977rjvgv9p6437jxp-3000.app.github.dev/favorites/${user[0].id}`)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(responseAsJson => {
				setFav(responseAsJson)
				
			})
			.catch(error => {
				console.log('Looks like there was a problem: \n', error);
			});

			
		} else {
			let deletearr = fav.filter((element) => element != char);
			setFav(deletearr);
		}
		
		setToggle(!toggle)
	}



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
						<div className="col-2 m-2 card p-0" style={{ backgroundColor: "lightgrey" }} key={index}>
							<img src="https://ew.com/thmb/qeJjQEgbFJCsTYR4KaaHUB6fgnc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EW_StarWars_100-1-3e44e87aa604405eac533ba3b8cc85c2.jpg" className="img-fluid rounded" alt="..." />
							<div className="card-body p-3">
								<h5 className="card-title text-light">{elm.name}</h5>
								<div className="row d-flex justify-content-evenly">
									<div className="col">
										<Link to={`/aboutcharacters/${elm.name}`} state={elm}>
											<button className="btn btn-warning">More</button>
										</Link>
									</div>
									<i className="col fas fa-heart pt-2 pointer" style={fav.some( fav => fav['char_name'] == elm.name )? { color: "red", fontSize: "1.5em" } : { color: "white", fontSize: "1.5em" }} onClick={(e) => { createFav(index, elm, e) }}></i>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className="row">
				<div className="h1 pb-2 mb-4 border-bottom border-light text-light texttheme">
					Go to the Planets
				</div>
			</div>

			<div className="row cards-list dflex-justify-content-between" id="style2">
				{stwPlan.map((elm, index) => {
					return (
						<div className="col-2 m-2 card p-0" style={{ backgroundColor: "lightgrey" }} key={index}>
							<img src="https://cdn.pixabay.com/photo/2023/01/17/05/33/star-wars-7723785_1280.jpg" className="img-fluid rounded" alt="..." />
							<div className="card-body p-3">
								<h5 className="card-title text-light">{elm.name}</h5>
								<div className="row d-flex justify-content-evenly">
									<div className="col">
										<Link to={`/aboutplanets/${elm.name}`} state={elm}>
											<button className="btn btn-warning">More</button>
										</Link>
									</div>
									<i className="col fas fa-heart pt-2 pointer" style={fav.includes(elm) ? { color: "red", fontSize: "1.5em" } : { color: "white", fontSize: "1.5em" }} onClick={(e) => { createFav(index, elm, e) }}></i>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>


	);
}
