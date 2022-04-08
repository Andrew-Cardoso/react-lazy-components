import React, {Suspense, useState} from 'react';
import './App.css';
import {Lazy} from './components/Lazy';
import {ToggleImage} from './components/ToggleImage';
const CatImage = React.lazy(() => import('./components/CatImage'));
const DogImage = React.lazy(() => import('./components/DogImage'));
const FantasyImage = React.lazy(() => import('./components/FantasyImage'));
const NightSkyImage = React.lazy(() => import('./components/NightSkyImage'));
const PlaceImage = React.lazy(() => import('./components/PlaceImage'));
const RandomImage = React.lazy(() => import('./components/RandomImage'));

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

enum ImageTypes {
	DOG = 'dog',
	CAT = 'cat',
	NIGHT_SKY = 'night sky',
	FANTASY = 'fantasy',
	PLACE = 'beautiful place',
	RANDOM = 'random',
}
type State = Record<ImageTypes, boolean>;
const state: State = {
	dog: false,
	cat: false,
	'night sky': false,
	fantasy: false,
	'beautiful place': false,
	random: false,
};

function App() {
	const [showImage, setShowImage] = useState<State>(state);

	const toggle = (name: string) => {
		console.log(toggle);
		const key = name as keyof State;
		const nextValue = !showImage[key];
		setShowImage({...showImage, [key]: nextValue});
	};

	return (
		<div className='App'>
			{showImage.dog ? (
				<Lazy click={() => toggle('dog')} children={<DogImage />} />
			) : (
				<ToggleImage name='dog' click={toggle} />
			)}
			{showImage.cat ? (
				<Lazy click={() => toggle('cat')} children={<CatImage />} />
			) : (
				<ToggleImage click={toggle} name='cat' />
			)}
			{showImage.random ? (
				<Lazy click={() => toggle('random')} children={<RandomImage />} />
			) : (
				<ToggleImage click={toggle} name='random' />
			)}
			{showImage['night sky'] ? (
				<Lazy click={() => toggle('night sky')} children={<NightSkyImage />} />
			) : (
				<ToggleImage click={toggle} name='night sky' />
			)}
			{showImage['beautiful place'] ? (
				<Lazy click={() => toggle('beautiful place')} children={<PlaceImage />} />
			) : (
				<ToggleImage click={toggle} name='beautiful place' />
			)}
			{showImage.fantasy ? (
				<Lazy click={() => toggle('fantasy')} children={<FantasyImage />} />
			) : (
				<ToggleImage click={toggle} name='fantasy' />
			)}
		</div>
	);
}

export default App;
