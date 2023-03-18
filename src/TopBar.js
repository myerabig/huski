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
		<div className="TopBar">
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<PetsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
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
		</div>
	);
};

export default TopBar;
