'use server';

import { getPageSetFromArray } from '../../lib/utils';
import { PAGE_SIZE } from '../../lib/constants';

const data = [
  { id: 1, status: 'Ongoing', player1: 'Jane', player2: 'Steven', winner: undefined },
  { id: 2, status: 'Complete', player1: 'Lyn (win)', player2: 'Jack (loss)', winner: 'Lyn' },
  { id: 3, status: 'Complete', player1: 'Andy (win)', player2: 'Liz (loss)', winner: 'Andy' },
  { id: 4, status: 'Complete', player1: 'Steph (win)', player2: 'Damien (loss)', winner: 'Steph' },
];

export async function getMatches(page = 1) {
  console.log(`Fetching matches (page ${page})`);
  const results = getPageSetFromArray(data, page); 

  return {
    results,
    count: data.length,
    pageSize: PAGE_SIZE
  };
};
