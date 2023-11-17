import { NextRequest } from "next/server";
import { getPageSetFromArray } from '../utils';

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

export async function GET(req: NextRequest) {
  console.log(`GET ${req.nextUrl.hostname}/api/player`);
  console.log(req.nextUrl.searchParams);
  const page  = req.nextUrl.searchParams.get('page');
  const results = getPageSetFromArray(data, page); 

  return new Response(JSON.stringify({
    results,
    count: data.length,
    pageSize: 5
  }), {
    status: 200
  });
};
