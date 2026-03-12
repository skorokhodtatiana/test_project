import Card from '../card/Card';
import Loading from '../loading/Loading';

const RandomBlock = ({arrDataPictures, dataSelectedAuthor, listInCart, handleClick}) => {

	const getRandomPhotos = (arr, count) => {
		const newArr = [...arr];

		for (let i = newArr.length - 1; i > 0; i--) {
			let j = Number(Math.floor(Math.random() * (i + 1)));
			[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
		}
		return arr.slice(0, count);
	};

	const randomData = getRandomPhotos(arrDataPictures, 6);

	console.log('RandomBlock render')
	if (!randomData.length) {
		return <Loading />
	}

	return (
		<>
			{ !dataSelectedAuthor.length && randomData.map(el => (
				<Card key={el.id} id={el.id} author={el.author} download_url={el.download_url} isInCart={listInCart.length && listInCart.includes(el.id) ? true : false} handleClick={() => handleClick(el) }></Card>
			))}
		</>
	)
}

export default RandomBlock;
