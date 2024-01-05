import { PAGE_SIZE } from './constants';

// TODO: look into cursor based pagination
const getOffsetPagination = (page: string | number | undefined) => {
  const pageNum = typeof(page) === 'string' ? parseInt(page) : page;

  if (pageNum === undefined || pageNum <= 1) {
    return { skip: 0, take: PAGE_SIZE };
  }
  return { skip: PAGE_SIZE * (pageNum - 1), take: PAGE_SIZE };
};

// TODO: temporary until db introduced
const getPageSetFromArray = (data: Record<string, any>[], page: string | number | null, pageSize: number = 5) => {
  const pageNum = (typeof(page) === 'string' ? parseInt(page) : page);
  const getPosition = (page: number, size: number) => (page * size) - pageSize;
  const start = pageNum === null || pageNum <= 1 || isNaN(pageNum) ? 0 : getPosition(pageNum, pageSize);
  return data.slice(start, start + pageSize);
};

export { getOffsetPagination, getPageSetFromArray };
