import React, { } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export const Aboutplanets = () => {

        const location = useLocation()
        const data = location.state;



        return (
                <div className="container">
                        <div className="row">
                                <div className="col m-2 texttheme">
                                        <h1>{data.name}</h1>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col">
                                        <img src="https://cdn.pixabay.com/photo/2023/01/17/05/33/star-wars-7723785_1280.jpg" alt="" />
                                </div>
                                <div className="col">
                                        <table className="table table-bordered texttheme">
                                                <table class="table">
                                                        <thead>
                                                                <tr>
                                                                        <th scope="col">{data.name}</th>
                                                                        <th scope="col"></th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <th scope="row">Rotation Period</th>
                                                                        <td>{data.rotation_period}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Orbital Period</th>
                                                                        <td>{data.orbital_period}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Diameter</th>
                                                                        <td>{data.diameter}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Climate</th>
                                                                        <td>{data.climate}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Gravity</th>
                                                                        <td>{data.gravity}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Terrain</th>
                                                                        <td>{data.terrain}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Surface Water</th>
                                                                        <td>{data.surface_water}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Population</th>
                                                                        <td>{data.population}</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </table>
                                </div>
                        </div>
                </div>

        )

}
