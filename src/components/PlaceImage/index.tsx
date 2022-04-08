import React from 'react';
import {getRandomNumber} from '../../utils/random';

const urls = [
	'2021/10/23/03/35/mountain-6734031_960_720.jpg',
	'2021/11/12/04/50/donkey-6787990_960_720.jpg',
	'2019/10/01/21/40/caravansary-4519435_960_720.jpg',
	'2017/08/08/14/44/belfry-2611573_960_720.jpg',
	'2017/07/11/18/52/landscape-2494650_960_720.jpg',
	'2019/09/30/19/20/caravansary-4516601_960_720.jpg',
	'2019/08/23/23/15/jungle-4426749_960_720.jpg',
	'2017/05/09/03/46/bc-2297205_960_720.jpg',
	'2019/12/17/02/18/red-lotus-sea-4700563_960_720.jpg',
	'2019/07/16/07/06/beautiful-japan-4341210_960_720.jpg',
	'2017/08/05/10/14/lake-2582653_960_720.jpg',
	'2017/12/07/21/11/havana-3004582_960_720.jpg',
	'2017/09/06/23/55/bank-2723551_960_720.jpg',
	'2018/01/23/06/06/travel-3100741_960_720.jpg',
	'2016/10/13/04/49/castle-1736779_960_720.jpg',
	'2017/07/23/11/45/schleiheim-2531185_960_720.jpg',
	'2021/10/22/10/42/ali-qapu-palace-6732253_960_720.jpg',
	'2013/12/12/20/29/resting-place-227387_960_720.jpg',
	'2016/10/24/15/25/sunset-1766418_960_720.jpg',
	'2019/12/28/15/51/castle-4725000_960_720.jpg',
	'2020/07/09/17/21/austria-5388101_960_720.jpg',
	'2021/12/22/10/33/attraction-6887227_960_720.jpg',
	'2020/03/30/09/39/pamukkale-4983650_960_720.jpg',
	'2019/10/05/22/16/caravansary-4528921_960_720.jpg',
	'2017/06/13/23/52/middle-rhine-valley-2400587_960_720.jpg',
	'2019/12/11/20/41/homestead-4689250_960_720.jpg',
];

const imageBase = 'https://cdn.pixabay.com/photo/';
const imageId = () => urls.at(getRandomNumber(0, urls.length));

const PlaceImageComponent = () => <img src={imageBase + imageId()} alt='place' />;

const PlaceImage = React.memo(PlaceImageComponent);

export default PlaceImage;
