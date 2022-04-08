import React from 'react';
import {getRandomNumber} from '../../utils/random';

const urls = [
	'2017/10/17/16/10/fantasy-2861107_960_720.jpg',
	'2012/03/01/00/21/bridge-19513_960_720.jpg',
	'2017/02/08/17/24/fantasy-2049567_960_720.jpg',
	'2015/07/27/20/16/book-863418_960_720.jpg',
	'2018/01/12/10/19/fantasy-3077928_960_720.jpg',
	'2018/08/14/13/23/ocean-3605547_960_720.jpg',
	'2017/11/07/00/07/fantasy-2925250_960_720.jpg',
	'2015/06/02/12/59/book-794978_960_720.jpg',
	'2019/02/14/07/28/painting-3995999_960_720.jpg',
	'2017/10/13/14/15/fantasy-2847724_960_720.jpg',
	'2017/09/15/02/22/fantasy-2750995_960_720.jpg',
	'2016/09/29/13/08/planet-1702788_960_720.jpg',
	'2018/05/13/01/39/horse-3395135_960_720.jpg',
	'2020/10/09/13/12/man-5640540_960_720.jpg',
	'2017/02/08/12/46/moon-2048727_960_720.jpg',
	'2015/04/23/12/32/hell-735995_960_720.jpg',
	'2018/12/15/18/02/forest-3877365_960_720.jpg',
	'2018/04/12/16/35/fantasy-3313964_960_720.jpg',
	'2017/07/27/00/46/fantasy-2543658_960_720.jpg',
	'2021/01/05/01/15/home-5889366_960_720.jpg',
	'2018/02/27/20/30/fantasy-3186483_960_720.jpg',
];

const imageBase = 'https://cdn.pixabay.com/photo/';
const imageId = () => urls.at(getRandomNumber(0, urls.length));

const FantasyImageComponent = () => <img src={imageBase + imageId()} alt='fantasy' />;

const FantasyImage = React.memo(FantasyImageComponent);

export default FantasyImage;
