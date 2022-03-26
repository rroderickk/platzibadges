import 	 React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@containers/Layout";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { About } from "@pages/About";
import { BadgeList } from "@pages/BadgeList";
import { Navbar } from "../components/Navbar";
import { GlobalStyle } from "../GlobalStyle"

const App =()=> { return (

<BrowserRouter basename="/platzibadges">
	<Layout>
	 <GlobalStyle/><Navbar/>
		<Routes>
			<Route exact path="/" element={<About />} />
			<Route exact path="/home" element={<Home />} />
			<Route exact path="/badgelist" element={<BadgeList />} />
			<Route exact path="/404" element={<NotFound />} />

			<Route exact path="*" element={<NotFound />} />
		</Routes>
	</Layout>
</BrowserRouter>

) }; export { App };