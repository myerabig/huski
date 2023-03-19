import React from "react";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Profile = (props) => {
	return (
		<div className='Profile' sx={{ width: "100%" }}>
			<Grid container spacing={2} direction='column' alignItems='center' justifyContent='center'>
				<Grid item xs={12}>
					<Avatar src={require("../../Media/avatar.jpg")} sx={{ height: 200, width: 200 }} />
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h3' color='primary' sx={{marginBottom: 2}}>
						{props.user.name}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ width: "100%", margin: "auto", marginBottom: 2 }}>
						<Divider textAlign='left' sx={{ color: "dark", marginBottom: 1 }}>
							<b>SOCIAL MEDIA</b>
						</Divider>
						<Typography variant='p' color='primary'>
							<b>Discord: </b> {props.user.discord}
							<br />
							<b>Snapchat: </b> {props.user.snapchat}
							<br />
							<b>Instagram: </b> {props.user.instagram}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ width: "80%", margin: "auto", marginBottom: 3 }}>
						<Divider textAlign='left' sx={{ color: "dark", marginBottom: 1 }}>
							<b>ABOUT ME</b>
						</Divider>
						<Typography variant='p' color='primary'>
							<b>Year: </b> {props.user.year}
							<br />
							<b>Major: </b> {props.user.major}
							<br />
							<b>Current Classes: </b> {props.user.classes}
							<br />
							<b>Clubs: </b> {props.user.clubs}
							<br /> <br />
							{props.user.bio}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
