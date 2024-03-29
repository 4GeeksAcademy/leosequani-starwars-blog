import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Login } from "./views/login";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Aboutcharacters } from "./views/aboutcharacters";
import { Aboutplanets } from "./views/aboutplanets";
export const AppContext = React.createContext();



//create your first component
const Layout = () => {

	const [fav, setFav] = useState([]);
	const [user, setUser] = useState("");
	const [stwPlan, setPlan] = useState([]);
	const [stwchar, setStwchar] = useState([]);
	const [toggle, setToggle] = useState(false)

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<AppContext.Provider value={{ fav, setFav,user,setUser,stwchar,setStwchar,stwPlan,setPlan,toggle,setToggle }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/Home" element={<Home />} />
							<Route path="/aboutcharacters/:ind" element={<Aboutcharacters />} />
							<Route path="/aboutplanets/:ind" element={<Aboutplanets />}/>
							<Route path="/demo" element={<Demo />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
