import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PetsIcon from "@mui/icons-material/Pets";

const SideBar = () => {
	return (
		<Drawer
			className="SideBar"
			variant="permanent"
			sx={{
				width: 240,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", backgroundColor: "lightdark" },
			}}
		>
			<Toolbar />
			<Box sx={{ overflow: "auto" }}>
				<List>
					{["Explore", "People", "Classes", "Messages"].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<PetsIcon color="warning" />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default SideBar;
