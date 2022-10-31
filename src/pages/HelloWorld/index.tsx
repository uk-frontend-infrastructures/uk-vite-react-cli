import { useEffect } from 'react';
import './index.less';

import { useRecoilValue } from 'recoil';
import { userState } from '@/store';

import ApiObj from '@/api';

const { CommonApi } = ApiObj;
const { getDics } = CommonApi;

const HelloWorld = () => {
	const user = useRecoilValue(userState);

	useEffect(() => {
		getDics({ code: 'test' }).then((res: any) => {
			console.log('res=========', res);
		});
	}, []);

	return (
		<div className='hello-world'>
			<h1>Hello {user.name} ! This is your React App</h1>
			<div>
				<img src={`${window._GlobalConfig._ROOT_URL}/images/react.svg`} />+<div className='vite-bg'></div>
			</div>
		</div>
	);
};

export default HelloWorld;
