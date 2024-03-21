import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const Login = () => {

    const { user, setUser, setStwchar, setPlan, setFav } = useContext(AppContext)
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
                setStwchar(responseAsJson.results);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
        fetch('https://swapi.dev/api/planets')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as JSON
                return response.json();
            })
            .then(responseAsJson => {
                // Do stuff with the JSONified response
                setPlan(responseAsJson.results);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
    }, [])


    const postNewUser = () => {
        fetch(`https://organic-adventure-977rjvgv9p6437jxp-3000.app.github.dev/adduser`, {
            method: 'POST',
            body: JSON.stringify({
                "emailName": user,
            }), // data can be a 'string' or an {object} which comes from somewhere further above in our application
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then(response => {
                console.log('Success:', response)
                setCurrentUser()
            })
            .catch(error => console.error(error));
    }

    const setCurrentUser = () => {
        fetch(`https://organic-adventure-977rjvgv9p6437jxp-3000.app.github.dev/user/${user}`)
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
            <div className="row">
                <div className="col d-inline-flex justify-content-center">
                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Create User
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create User</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" value={user.email} id="exampleInputEmail1" aria-describedby="emailHelp" onKeyUp={(e) => setUser(e.target.value)} />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setUser("")} data-bs-dismiss="modal">Cancel</button>
                                    <Link to={"/Home"}>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => postNewUser()}>Save changes</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/Home"}>
                        <button type="submit" className="btn btn-primary" onClick={() => { setCurrentUser() }}>Submit</button>
                    </Link>
                </div>
            </div>




        </form>
    )
}


