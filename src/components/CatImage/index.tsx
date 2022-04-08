import React from 'react';
import {getRandomNumber} from '../../utils/random';

const urls = [
	'2014/11/30/14/11/cat-551554_960_720.jpg',
	'2017/07/25/01/22/cat-2536662_960_720.jpg',
	'2017/02/20/18/03/cat-2083492_960_720.jpg',
	'2017/11/09/21/41/cat-2934720_960_720.jpg',
	'2014/04/13/20/49/cat-323262_960_720.jpg',
	'2016/02/10/16/37/cat-1192026_960_720.jpg',
	'2015/11/16/14/43/cat-1045782_960_720.jpg',
	'2021/10/19/10/56/cat-6723256_960_720.jpg',
	'2015/04/23/21/59/tree-736877_960_720.jpg',
	'2015/03/27/13/16/maine-coon-694730_960_720.jpg',
	'2018/10/01/09/21/pets-3715733_960_720.jpg',
	'2021/12/01/18/17/cat-6838844_960_720.jpg',
	'2017/02/15/12/12/cat-2068462_960_720.jpg',
	'2019/11/08/11/56/cat-4611189_960_720.jpg',
	'2016/03/28/12/35/cat-1285634_960_720.png',
	'2017/11/14/13/06/kitty-2948404_960_720.jpg',
	'2018/07/13/10/20/kittens-3535404_960_720.jpg',
	'2016/03/28/10/05/kitten-1285341_960_720.jpg',
	'2016/09/05/21/37/cat-1647775_960_720.jpg',
	'2017/11/13/07/14/cats-eyes-2944820_960_720.jpg',
];

const imageBase = 'https://cdn.pixabay.com/photo/';
const imageId = () => urls.at(getRandomNumber(0, urls.length));

const CatImageComponent = () => <img src={imageBase + imageId()} alt='cat' />;

const CatImage = React.memo(CatImageComponent);

export default CatImage;
