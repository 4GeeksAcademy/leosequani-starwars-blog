import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const Login = () => {

    const { user, setUser } = useContext(AppContext)
   
    const setCurrentUser = () => {
        fetch(`https://refactored-pancake-g44j79v94xq4cvg6g-3000.app.github.dev/user/${user}`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(responseAsJson => {
                setUser(responseAsJson);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
    }



    return (
        <form>

            <div className="row mb-3">
                <div className="col-4"></div>
                <div className="col"><label htmlFor="exampleInputEmail1" className="form-label text-light fs-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} onChange={(e) => { setUser(e.target.value) }} /></div>
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
                        <button type="submit" className="btn btn-primary" onClick={() => { setCurrentUser() }}>Submit</button>
                    </Link>
                </div>
            </div>




        </form>
    )
}


