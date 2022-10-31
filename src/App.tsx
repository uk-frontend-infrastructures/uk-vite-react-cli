import { Suspense } from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';

import RouterConfig from '@/routes';
import { getToken } from '@/tools/localStorage';

function App() {
	return (
		<Suspense fallback={<span>正在加载...</span>}>
			<div className='App'>
				<RecoilRoot>
					<RouterConfig token={getToken()} />
				</RecoilRoot>
			</div>
		</Suspense>
	);
}

export default App;
