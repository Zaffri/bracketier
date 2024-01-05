'use server';

import { getPageSetFromArray } from '@/lib/utils';
import { PAGE_SIZE } from '@/lib/constants';
import NextLogger from '@/lib/next-logger';

const data = [
  { id: 1, name: 'Halloween #1', winner: '-', numOfPlayers: '16', status: 'Ongoing' },
  { id: 2, name: 'Morriston Battle Royale 1', winner: 'Lyn', numOfPlayers: 6, status: 'Complete' },
  { id: 3, name: 'First tourny', winner: 'Steven', numOfPlayers: 10, status: 'Complete' },
];

export async function getTournaments(page = 1) {
  NextLogger.info(`Fetching tournaments (page ${page})`);
  const results = getPageSetFromArray(data, page); 

  return {
    results,
    count: data.length,
    pageSize: PAGE_SIZE
  };
};
