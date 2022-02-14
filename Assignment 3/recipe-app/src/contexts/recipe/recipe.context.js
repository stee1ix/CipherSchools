import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export function RecipeContextProvider({ children }) {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [date, setDate] = useState('');

	return (
		<RecipeContext.Provider
			value={{ title, setTitle, body, setBody, date, setDate }}>
			{children}
		</RecipeContext.Provider>
	);
}
