import "./App.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<TopBar />
					<SideBar />
					<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
						stuff
					</Box>
				</Box>
			</ThemeProvider>
		</div>
	);
};

export default App;
