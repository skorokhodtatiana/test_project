import { Suspense } from 'react';
import Loading from '../../components/loading/Loading';
//import Showcase from '../../components/showcase/Showcase';
import { lazy } from 'react';

const Catalog = () => {
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
