import React from 'react';

let currentRandom = 1;

const RandomImageComponent = () => (
	<img src={`https://picsum.photos/800/600?random=${currentRandom++}`} alt='random' />
);

const RandomImage = React.memo(RandomImageComponent);

export default RandomImage;
