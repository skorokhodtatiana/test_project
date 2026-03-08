// import {  useMemo } from 'react';

const SidebarAuthors = ({arrDataPictures, chooseauthor, handleClickAuthor, className}) => {

	const showAuthor = () => {
		const uniqueAuthors = new Set();
		arrDataPictures.map(obj => {
			if (obj.author) {
				uniqueAuthors.add(obj.author);
			}
		});
		return Array.from(uniqueAuthors);
	};

	const authors = showAuthor();

		// const authors = useMemo(() => {
		// 	const uniqueAuthors = new Set();
		// 	arrDataPictures.map(obj => {
		// 		if (obj.author) {
		// 			uniqueAuthors.add(obj.author);
		// 		}
		// 	});
		// 	return Array.from(uniqueAuthors);
		// }, [arrDataPictures]);

	return (
		<>
			{!authors.length ? <h3>Loading...</h3> : authors.map((el, index) => (
				<li className={className} style={{ backgroundColor: chooseauthor === index ? 'gray' : 'white'}} onClick={() => handleClickAuthor(el, index)} key={index}>{el}</li>
			))}
		</>
	)
}

export default SidebarAuthors;
