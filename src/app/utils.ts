import type { SetStateAction } from 'react';
import type { ReadonlyURLSearchParams }  from 'next/navigation';

export const updatePage = (searchParams: ReadonlyURLSearchParams, page: number, setPage: SetStateAction<any>) => {
  const rawPageParam = searchParams.get('page');
  const pageParam = rawPageParam !== null ? parseInt(rawPageParam) : 1;
  if (pageParam !== page) setPage(pageParam);
};
