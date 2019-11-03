import { STATIC_PATH } from '../config/constants';

export const getImgPath = ({ id, type }) => `../../${STATIC_PATH}/images/interiors/${type}/${id}.png`;
