import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const TopBar = () => {
	return (
		<AppBar className="TopBar" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<PetsIcon color="warning" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h5"
						color="yellow"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							letterSpacing: ".3rem",
							textDecoration: "none",
							flexGrow: 1,
						}}
					>
						Huski
					</Typography>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="My Profile">
							<IconButton sx={{ p: 0 }}>
								<Avatar src={require("./avatar.jpg")} />
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default TopBar;
