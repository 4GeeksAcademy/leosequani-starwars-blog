import React, { } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export const Aboutcharacters = () => {

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
                                        <img src="https://static.tvtropes.org/pmwiki/pub/images/luke_the_hero_small.png" alt="" />
                                </div>
                                <div className="col">
                                        <table className="table table-bordered texttheme">
                                        
                                                        <thead>
                                                                <tr>
                                                                        <th scope="col">{data.name}</th>
                                                                        <th scope="col"></th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <th scope="row">Height</th>
                                                                        <td>{data.height}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Mass</th>
                                                                        <td>{data.mass}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Hair Color</th>
                                                                        <td>{data.hair_color}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Skin Color</th>
                                                                        <td>{data.skin_color}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Eye Color</th>
                                                                        <td>{data.eye_color}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Birth Year</th>
                                                                        <td>{data.birth_year}</td>
                                                                </tr>
                                                                <tr>
                                                                        <th scope="row">Gender</th>
                                                                        <td>{data.gender}</td>
                                                                </tr>
                                                        </tbody>
                                        </table>
                                </div>
                        </div>
                </div>

        )
}


