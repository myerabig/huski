import React, { useState } from "react";

import "./App.css";
import TopBar from "./Bars/TopBar";
import SideBar from "./Bars/SideBar";
import Explore from "./Pages/Explore/Explore";
import People from "./Pages/People";
import Classes from "./Pages/Classes";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile/Profile";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
	const [currentPage, setCurrentPage] = useState("Explore");
	const [currentUser, setCurrentUser] = useState({
		name: "Abby Myers",
		year: 4,
		major: "Software Engineering",
		bio: "My favorite videogame is Risk of Rain 2, I think that Birds of Prey was a great DC movie, I buy books and then forget to make the time to read them, and I think that horror movies should be nominated for more Oscars.",
		discord: "Discord#1234",
		snapchat: "snapuser567",
		instagram: "@insta890",
    classes: "PSY4080, HU3120, SAT3812, CS4321",
		clubs: "Theme Park Engineering Group (TPEG)",
	});

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<TopBar setCurrentPage={setCurrentPage} />
					<SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
					<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
						<Toolbar />
						{currentPage === "Explore" ? (
							<Explore />
						) : currentPage === "People" ? (
							<People />
						) : currentPage === "Classes" ? (
							<Classes />
						) : currentPage === "Messages" ? (
							<Messages />
						) : currentPage === "Profile" ? (
							<Profile user={currentUser} />
						) : (
							<span />
						)}
					</Box>
				</Box>
			</ThemeProvider>
		</div>
	);
};

export default App;
