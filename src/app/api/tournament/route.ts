import { NextRequest } from "next/server";
import { getPageSetFromArray } from '../utils';
import { PAGE_SIZE } from '../constants';

const data = [
  { id: 1, name: 'Halloween #1', winner: '-', numOfPlayers: '16', status: 'Ongoing' },
  { id: 2, name: 'Morriston Battle Royale 1', winner: 'Lyn', numOfPlayers: 6, status: 'Complete' },
  { id: 3, name: 'First tourny', winner: 'Steven', numOfPlayers: 10, status: 'Complete' },
];

export async function GET(req: NextRequest) {
  console.log(`GET ${req.nextUrl.hostname}/api/tournament`);
  console.log(req.nextUrl.searchParams);
  const page  = req.nextUrl.searchParams.get('page');
  const results = getPageSetFromArray(data, page); 

  return new Response(JSON.stringify({
    results,
    count: data.length,
    pageSize: PAGE_SIZE
  }), {
    status: 200
  });
};
