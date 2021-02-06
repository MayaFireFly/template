import { executeRequest } from '../utils/executeRequest';


export const getAlbumsList = async () =>
  executeRequest({ url: 'albums' });

export const getAlbum = async (id) =>
  executeRequest({ url: 'albums/' + id });