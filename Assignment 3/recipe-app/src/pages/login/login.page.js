import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user/user.context';

export default function LoginPage() {
	const navigate = useNavigate();

	const [loginEmail, setLoginEmail] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');

	const { setEmail } = useContext(UserContext);

	const onLogin = () => {
		if (loginEmail === '') {
			alert('Enter your email');
			return;
		}
		setEmail(loginEmail);
		navigate('/home', { replace: true });
	};

	const onRegister = () => {
		if (registerEmail === '') {
			alert('Enter your email');
			return;
		}

		setEmail(registerEmail);
		navigate('/home', { replace: true });
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Paper
				elevation={5}
				sx={{
					marginTop: 12,
					height: 'fit-content',
					width: 'fit-content',
					display: 'flex',
					flexDirection: 'column',
					padding: 4,
					alignItems: 'center',
					marginRight: 8,
				}}>
				<Typography sx={{ marginBottom: 4 }} variant="h4">
					Login
				</Typography>
				<TextField
					value={loginEmail}
					onChange={e => setLoginEmail(e.target.value)}
					sx={{ marginBottom: 2 }}
					label="Email"
				/>
				<TextField sx={{ marginBottom: 4 }} label="Password" />
				<Button variant="contained" onClick={onLogin}>
					Login
				</Button>
			</Paper>
			<Typography sx={{ marginRight: 8 }} variant="h5">
				Or
			</Typography>
			<Paper
				elevation={5}
				sx={{
					marginTop: 12,
					height: 'fit-content',
					width: 'fit-content',
					display: 'flex',
					flexDirection: 'column',
					padding: 4,
					alignItems: 'center',
				}}>
				<Typography sx={{ marginBottom: 4 }} variant="h4">
					Create Account
				</Typography>
				<TextField sx={{ marginBottom: 2 }} label="Name" />
				<TextField
					value={registerEmail}
					onChange={e => setRegisterEmail(e.target.value)}
					sx={{ marginBottom: 2 }}
					label="Email"
				/>
				<TextField sx={{ marginBottom: 4 }} label="Password" />
				<Button variant="contained" onClick={onRegister}>
					Register
				</Button>
			</Paper>
		</Box>
	);
}
