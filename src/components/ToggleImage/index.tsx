import {CSSProperties} from 'react';

interface Props {
	name: string;
	click: (name: string) => any;
}

const style: CSSProperties = {
	padding: '1rem 2rem',
	fontSize: '1rem',
	backgroundColor: '#99F',
	border: 'none',
	outline: 'none',
	borderRadius: '8px',
	filter: 'drop-shadow(0 0 6px #FFF8)',
};

export const ToggleImage = ({name, click}: Props) => (
	<button style={style} onClick={() => click(name)}>
		Click to show <strong style={{fontSize: '1.25rem'}}>{name}</strong> image
	</button>
);
