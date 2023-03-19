import React, { useState } from "react";

import Post from "./Post";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Explore = () => {
	const [posts, setPosts] = useState([
		{
			name: "Math Student",
			message: "Anyone have a calculator I can borrow?",
		},
		{
			name: "Thief",
			message: "Lol the husky statue is in my living room",
		},
		{
			name: "Concerned Citizen",
			message: "Who stole the husky statue???",
		},
		{
			name: "MUBBoard",
			message: "Don't forget to register for the MUBBoard March Madness bracket! Signup closes in a few days!",
		},
		{
			name: "Screenwriter",
			message: `FADE IN:
          
          
			1 EXT. RAIN FOREST, OLYMPIC NATIONAL PARK, WASHINGTON - DAWN 
			
			Moss-draped. Shadow-drenched. Tortured tree trunks twist 
			upward, reaching for rare sunlight. 
			
			
			BELLA (V.O.)
			I'd never given much thought to how I would die..
			
			Suddenly, every creature in the forest is deadly silent. Neither 
			bird, beast nor insect make a noise. A predator is near. 
			
			Then, in the distance, hear a tiny SNICK - a twig snapping. 
			Abruptly, we're on the move. Fast.
			
			
			UNKNOWN POV - MOVING
			
			Trees start whipping past us at a dizzying speed, branches 
			are dodged with preternatural agility. And we're speeding
			up, chasing something. It's exhilarating. Terrifying. 
			Finally, up ahead, we get the first glimpse of our prey -
			-
			
			
			A DEER
			
			
			-- running for its life as it darts through this maze of 
			a forest. It sprints forward, but we gain on it. Beyond the deer, 
			SEE the forest's edge ahead, white sunlight glowing against the
			trees. The buck races for the light. We're just behind it, 
			about to emerge from the shadowy darkness -
			-
			
			
			The deer LEAPS into the light in a high arc, hovering (suddenly 
			SLOW MOTION) against the WHITE GLARE of the sun... then BAM! 
			
			
			The deer abruptly plummets out of frame at an unnatural angle, 
			leaving the WHITE GLARE to fill the screen. HOLD ON WHITENESS 
			-`,
		},
	]);
	const [postContent, setPostContent] = useState("");

	return (
		<div className='Explore'>
			<Card variant='outlined' sx={{ backgroundColor: "dark" }}>
				<CardContent>
					<Container>
						<Grid container spacing={1}>
							<Grid item xs={1}>
								<Avatar src={require("../../Media/avatar.jpg")} sx={{ height: 70, width: 70 }} />
							</Grid>
							<Grid item xs={10}>
								<TextField
									id='outlined-multiline-flexible'
									placeholder='Share something with campus...'
									multiline
									fullWidth
									rows={4}
									color='primary'
									value={postContent}
									onChange={(e) => setPostContent(e.target.value)}
									sx={{
										["& .MuiOutlinedInput-root"]: {
											["& fieldset"]: {
												borderColor: "dark",
											},
											color: "dark",
											backgroundColor: "light",
										},
									}}
								/>
							</Grid>
							<Grid item xs={1}>
								<Stack direction='column' justifyContent='center' alignItems='center' spacing={1}>
									<p></p>
									<Button
										variant='contained'
										color='warning'
										onClick={() => {
											setPosts([{ name: "Current User", message: postContent }, ...posts]);
											setPostContent("");
										}}
									>
										POST
									</Button>
									<p></p>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</CardContent>
			</Card>
			{posts.map((post) => (
				<Post name={post.name} message={post.message} />
			))}
		</div>
	);
};

export default Explore;
