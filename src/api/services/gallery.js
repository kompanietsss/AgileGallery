import unify from '../unify';
import api from '..';

export const getImages = page => unify(api.get(`/images?page=${page}`));

export const getImageDetails = id => unify(api.get(`/images/${id}`));
