import { executeRequest } from '../utils/executeRequest';


export const getUsersList = async () =>
  executeRequest({ url: 'users' });

export const getUser = async (id) =>
  executeRequest({ url: 'users/' + id });