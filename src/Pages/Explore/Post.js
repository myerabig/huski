import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

const Post = (props) => {
	return (
		<div className='Post'>
			<Paper elevation={3} sx={{ marginTop: 3, paddingTop: 2, paddingBottom: 3, border: 4, borderColor: stringToColor(props.name) }}>
				<Grid container spacing={1} alignItems='center'>
					<Grid item xs={1}>
						<Box display='flex' justifyContent='center'>
							<Avatar alt={props.name} src='./bad' sx={{ height: 50, width: 50, bgcolor:stringToColor(props.name) }} />
						</Box>
					</Grid>
					<Grid item xs={11}>
						<Typography variant='h6' color='primary'>
							{props.name}
						</Typography>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<Typography variant='p' color='primary'>
							{props.message}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Post;
