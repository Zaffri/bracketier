import { PAGE_SIZE } from './constants';

// TODO: look into cursor based pagination
const getOffsetPagination = (page: number | undefined) => {
  if (page === undefined || page <= 1) {
    return { skip: 0, take: PAGE_SIZE };
  }
  return { skip: PAGE_SIZE * (page - 1), take: PAGE_SIZE };
};

export { getOffsetPagination };
