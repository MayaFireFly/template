import { executeRequest } from '../utils/executeRequest';


export const getPhotosList = async () =>
  executeRequest({ url: 'photos' });

export const getPhoto= async (id) =>
  executeRequest({ url: 'photos/' + id });