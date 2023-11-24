import Provider from './provider';

const API_PATH = ['/player'];

// TODO: providers maybe uncessary - leave for now
const getPlayers = async (page: number | undefined, signal: AbortSignal) => {
  return await Provider({ path: `${API_PATH}?page=${page}`, method: 'GET', signal });
};

export { getPlayers };