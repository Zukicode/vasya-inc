import { useEffect, useRef } from 'react';

import './Snowfall.scss';

export const Snowfall = () => {
	const snowRef = useRef(null);

	useEffect(() => {
		const snowfallContainer = document.querySelector('.snowfall');

		for (let i = 0; i < 50; i++) {
			createSnowflake();
		}

		function createSnowflake() {
			const snowflake = document.createElement('div');
			snowflake.className = 'snowflake';
			snowflake.style.left = Math.random() * 100 + 'vw';
			snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
			snowflake.innerHTML = '.';
			snowfallContainer.appendChild(snowflake);
		}
	}, []);

	return <div className={'snowfall'} ref={snowRef}></div>;
};
