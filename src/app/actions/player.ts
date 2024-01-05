'use server';

import { getPageSetFromArray } from '@/lib/utils';
import { PAGE_SIZE } from '@/lib/constants';
import NextLogger from '@/lib/next-logger';

const data = [
  { id: 1, player: 'Jane', wins: 100, losses: 2, wlratio: 50.00 },
  { id: 2, player: 'Jack', wins: 10, losses: 1, wlratio: 10.00 },
  { id: 3, player: 'Steven', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 4, player: 'Elaine', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 5, player: 'John', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 6, player: 'Dwayne', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 7, player: 'Dora', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 8, player: 'Jarren', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 9, player: 'Lisa', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 10, player: 'Karl', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 11, player: 'Tracey', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 12, player: 'Jasper', wins: 10, losses: 2, wlratio: 5.00 },
];

export async function getPlayers(page = 1) {
  NextLogger.info(`Fetching players (page ${page})`);

  const results = getPageSetFromArray(data, page); 

  return {
    results,
    count: data.length,
    pageSize: PAGE_SIZE
  };
};
