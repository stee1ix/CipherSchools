import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockdata } from '../../recipes-mock-data';

export default function AddPage() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const navigate = useNavigate();

	const onSubmit = () => {
		if (title === '' || body === '') {
			alert('Enter your recipe details');
			return;
		}

		const date = new Date().toUTCString();
		const newRecipe = {
			title,
			body,
			date,
		};

		mockdata.unshift(newRecipe);
		navigate('/home');
	};

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<Box
				sx={{
					width: '50%',
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Typography
					variant="h1"
					sx={{ marginTop: 4, alignSelf: 'center', marginBottom: 6 }}>
					Add a new recipe
				</Typography>
				<TextField
					label="Title"
					value={title}
					onChange={e => setTitle(e.target.value)}
					sx={{ marginBottom: 4 }}
					placeholder="Enter the title"
				/>
				<TextField
					label="Body"
					value={body}
					onChange={e => setBody(e.target.value)}
					multiline
					rows={12}
					placeholder="Write your delicious recipe"
					sx={{ marginBottom: 6 }}
				/>
				<Button
					size="large"
					variant="contained"
					sx={{ alignSelf: 'center' }}
					onClick={onSubmit}>
					Submit
				</Button>
			</Box>
		</Box>
	);
}
