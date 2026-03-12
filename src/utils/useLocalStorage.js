import { useEffect, useState } from "react";

const useLocalStorage = (key, initialvalue) => {
	const[value, setValue] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialvalue
		} catch (error) {
			console.log('error', error)
			return initialvalue
		}
	})

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.log('error', error)
		}
		
	}, [key, value])

	return [value, setValue]
}

export default useLocalStorage;
