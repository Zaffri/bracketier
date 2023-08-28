import Provider from './provider';

const API_PATH = ['/match'];

const getMatches = async (page: number | undefined) => {
  return await Provider({ path: `${API_PATH}?page=${page}`, method: 'GET' });
};

export { getMatches };