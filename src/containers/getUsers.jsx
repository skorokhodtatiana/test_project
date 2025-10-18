import { useEffect, useState } from "react";
import Showcase from '../components/showcase/Showcase';

const GetUsers = () => {
	const [res, setRes] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getUsersData = async () => {
			try {
				const response = await fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=20');
				if(!response.ok) {
					throw new Error('Ошибка запроса')
				}
				const data = await response.json();
				setRes(data);
			} catch {
				setError(error);
			}
		}

		getUsersData();
		}, []);

		if (error) {
			return <p>Произошла ошибка: {error.message}</p>;
		}

	return (
		<>
			<Showcase data = {res}></Showcase>
		</>
	)
}

export default GetUsers;
