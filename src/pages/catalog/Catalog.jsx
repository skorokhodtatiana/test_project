import { Suspense } from 'react';
import Loading from '../../components/loading/Loading';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/itemsSlice';
import { useEffect } from "react";

const Catalog = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const promise = dispatch(fetchProducts('https://api.artic.edu/api/v1/artworks?page=2&limit=100'));
		return () => {
			promise.abort()
		}
	}, [dispatch])

	const LazyCatalog = lazy(() => import('../../components/showcase/Showcase'));

	return (
		<>
			<div>
				<Suspense fallback={<Loading/>}>
					<LazyCatalog></LazyCatalog>
				</Suspense>
			</div>
		</>
	)
}

export default Catalog;
