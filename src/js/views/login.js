import React, { } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export const Login = () => {

    return (
        <form>

            <div className="row mb-3">
                <div className="col-4"></div>
                <div className="col"><label htmlFor="exampleInputEmail1" className="form-label text-light fs-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></div>
                <div className="col-4"></div>
            </div>
            <div className="row mb-3">
                <div className="col-4"></div>
                <div className="col"><label htmlFor="exampleInputPassword1" className="form-label text-light fs-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" /></div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col d-inline-flex justify-content-center">
                    <Link to={"/Home"}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Link>
                </div>
            </div>




        </form>
    )
}


