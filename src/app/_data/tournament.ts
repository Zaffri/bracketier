import Provider from './provider';

const API_PATH = ['/tournament'];

const getTournaments = async (page: number | undefined, signal: AbortSignal) => {
  return await Provider({ path: `${API_PATH}?page=${page}`, method: 'GET', signal });
};

export { getTournaments };