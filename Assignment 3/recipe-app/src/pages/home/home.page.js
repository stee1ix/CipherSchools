import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { mockdata } from '../../recipes-mock-data';
import ContentCard from './components/contentcard.component';

export default function HomePage() {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<Typography variant="h2" sx={{ marginTop: 4 }}>
				Browse Recipes
			</Typography>
			<Grid container sx={{ width: '50%', marginTop: 2 }} spacing={8}>
				{mockdata.map(recipe => {
					const { title, body, date } = recipe;
					return (
						<Grid item xs={4} key={title}>
							<ContentCard
								title={title}
								body={body}
								date={date}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}
