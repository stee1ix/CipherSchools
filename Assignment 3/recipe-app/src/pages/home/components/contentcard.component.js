import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../../contexts/recipe/recipe.context';

export default function ContentCard({ title, body, date }) {
	const newBody = body.substring(0, 100) + '...';

	const navigate = useNavigate();

	const { setTitle, setBody, setDate } = useContext(RecipeContext);

	const onReadClick = () => {
		setTitle(title);
		setBody(body);
		setDate(date);

		navigate('/recipe');
	};

	return (
		<Card sx={{ width: 275 }} elevation={5}>
			<CardContent>
				<Typography
					variant="h5"
					sx={{ marginBottom: 2 }}
					fontWeight="bold">
					{title}
				</Typography>
				<Typography variant="body1" sx={{ marginBottom: 2 }}>
					{newBody}
				</Typography>
				<Typography
					variant="body2"
					sx={{ marginBottom: 4 }}
					color="dimgray">
					{date}
				</Typography>
				<Button variant="contained" onClick={onReadClick}>
					Read
				</Button>
			</CardContent>
		</Card>
	);
}
