import React, { useState } from "react";

import "./App.css";
import TopBar from "./Bars/TopBar";
import SideBar from "./Bars/SideBar";
import Explore from "./Pages/Explore";
import People from "./Pages/People";
import Classes from "./Pages/Classes";
import Messages from "./Pages/Messages";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
	const [currentPage, setCurrentPage] = useState("Explore");

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<TopBar />
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
