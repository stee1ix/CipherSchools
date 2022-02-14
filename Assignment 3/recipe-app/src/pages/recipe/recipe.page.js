import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { RecipeContext } from '../../contexts/recipe/recipe.context';

export default function RecipePage() {
	const { title, body, date } = useContext(RecipeContext);

	return (
		<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
			<Box sx={{ width: '70%' }}>
				<Typography variant="h1" sx={{ marginTop: 6, marginBottom: 4 }}>
					{title}
				</Typography>
				<Typography
					variant="h6"
					sx={{ marginBottom: 4 }}
					color="dimgray">
					{date}
				</Typography>
				<Typography variant="h5" fontWeight="light" lineHeight={2}>
					{body}
				</Typography>
			</Box>
		</Box>
	);
}
