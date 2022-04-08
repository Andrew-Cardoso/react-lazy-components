import {CSSProperties, Suspense} from 'react';

interface Props {
	children: JSX.Element;
	click: () => any;
}

const style: CSSProperties = {
	width: '100%',
	height: '100%',
	display: 'flex',
	placeContent: 'center',
	placeItems: 'center'
}

export const Lazy = ({children, click}: Props) => {
	return <Suspense fallback={<h1>Loading</h1>}><section onClick={click} style={style}>{children}</section></Suspense>;
};
