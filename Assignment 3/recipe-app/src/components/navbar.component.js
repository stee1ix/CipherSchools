import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user/user.context';

export default function NavbarComponent() {
	const navigate = useNavigate();

	const { email } = useContext(UserContext);

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h5" sx={{ flexGrow: 1, marginLeft: 6 }}>
					Recipe App
				</Typography>
				{email && (
					<>
						<Button
							sx={{ marginRight: 4 }}
							variant="outlined"
							color="inherit"
							size="large"
							onClick={() => navigate('/add')}>
							Add new Recipe
						</Button>
						<Typography variant="h6" sx={{ marginRight: 6 }}>
							{email}
						</Typography>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}
