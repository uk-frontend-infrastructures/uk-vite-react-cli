import { createBrowserRouter } from 'react-router-dom';

import HelloWorld from '@/pages/HelloWorld';

const BASE_URL = import.meta.env.BASE_URL;

const router = createBrowserRouter([
	{
		path: `/${BASE_URL}`,
		element: <HelloWorld />
	}
]);

export default router;
