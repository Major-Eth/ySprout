import {useEffect, useState} from 'react';

const isClient = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
const useScroll = () => {
	const [state, setState] = useState({
		x: isClient ? window.pageXOffset : 0,
		y: isClient ? window.pageYOffset : 0,
	});

	useEffect(() => {
		const handler = () => {
			setState({
				x: window.pageXOffset,
				y: window.pageYOffset,
			});
		};

		window.addEventListener('scroll', handler, {
			capture: false,
			passive: true,
		});

		return () => {
			window.removeEventListener('scroll', handler);
		};
	}, []);

	return state;
};

export default useScroll;
