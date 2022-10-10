import { getRandomInteger } from './util.js';

const OBJECT_COUNT = 25;

const createPictureObject = () => ({
  id: getRandomInteger(1,25),
  url: `photos/${getRandomInteger(1,25)}.jpg`,
  description:'Photo with love',
  likes:getRandomInteger(15,200),
  comments:getRandomInteger(0,200),
});

const getArrayPictures = Array.from({length: OBJECT_COUNT}, createPictureObject);

export {getArrayPictures};
