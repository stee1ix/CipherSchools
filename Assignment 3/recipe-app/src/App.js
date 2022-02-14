import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar.component';
import { RecipeContextProvider } from './contexts/recipe/recipe.context';
import { UserContextProvider } from './contexts/user/user.context';
import AddPage from './pages/add/add.page';
import HomePage from './pages/home/home.page';
import LoginPage from './pages/login/login.page';
import RecipePage from './pages/recipe/recipe.page';

function App() {
	return (
		<>
			<CssBaseline />
			<UserContextProvider>
				<RecipeContextProvider>
					<NavbarComponent />
					<Routes>
						<Route path="/home" element={<HomePage />} />
						<Route path="/" element={<LoginPage />} />
						<Route path="/recipe" element={<RecipePage />} />
						<Route path="/add" element={<AddPage />} />
					</Routes>
				</RecipeContextProvider>
			</UserContextProvider>
		</>
	);
}

export default App;
