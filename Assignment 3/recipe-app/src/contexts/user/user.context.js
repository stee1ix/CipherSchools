import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<UserContext.Provider value={{ name, email, setEmail, setName }}>
			{children}
		</UserContext.Provider>
	);
}
