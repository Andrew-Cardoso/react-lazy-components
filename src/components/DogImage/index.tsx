import React from 'react';
import {getRandomNumber} from '../../utils/random';

const urls = [
	'2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',
	'2018/10/01/09/21/pets-3715733_960_720.jpg',
	'2019/08/19/07/45/dog-4415649_960_720.jpg',
	'2016/12/13/05/15/puppy-1903313_960_720.jpg',
	'2018/03/31/06/31/dog-3277416_960_720.jpg',
	'2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg',
	'2016/10/31/14/55/rottweiler-1785760_960_720.jpg',
	'2016/01/05/17/51/maltese-1123016_960_720.jpg',
	'2015/11/17/13/13/bulldog-1047518_960_720.jpg',
	'2015/11/17/13/13/puppy-1047521_960_720.jpg',
	'2017/12/27/14/02/friends-3042751_960_720.jpg',
	'2018/05/07/10/48/husky-3380548_960_720.jpg',
	'2020/10/03/11/08/girl-5623231_960_720.jpg',
	'2014/12/10/05/50/english-bulldog-562723_960_720.jpg',
	'2018/04/23/14/38/adorable-3344414_960_720.jpg',
	'2019/08/07/14/11/dog-4390885_960_720.jpg',
	'2018/01/09/11/04/dog-3071334_960_720.jpg',
	'2016/03/27/21/16/pet-1284307_960_720.jpg',
	'2020/03/31/19/20/dog-4988985_960_720.jpg',
	'2015/07/09/19/32/dog-838281_960_720.jpg',
	'2019/11/18/00/38/dog-4633734_960_720.jpg',
	'2017/09/25/13/14/dog-2785077_960_720.jpg',
	'2021/09/19/12/19/animal-6637774_960_720.jpg',
	'2016/07/15/15/55/dachshund-1519374_960_720.jpg',
	'2016/11/21/00/47/view-1844110_960_720.jpg',
	'2021/08/18/22/42/australian-shepherd-6556697_960_720.jpg',
	'2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg',
	'2017/09/03/17/26/woman-2711279_960_720.jpg',
	'2021/01/30/15/14/akita-5964180_960_720.jpg',
];

const imageBase = 'https://cdn.pixabay.com/photo/';
const imageId = () => urls.at(getRandomNumber(0, urls.length));

const DogImageComponent = () => <img src={imageBase + imageId()} alt='dog' />;

const DogImage = React.memo(DogImageComponent);

export default DogImage;
