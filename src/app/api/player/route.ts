import { NextRequest } from "next/server";

const data = [
  { id: 1, player: 'Jane', wins: 100, losses: 2, wlratio: 50.00 },
  { id: 2, player: 'Jack', wins: 10, losses: 1, wlratio: 10.00 },
  { id: 3, player: 'Steven', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 4, player: 'Elaine', wins: 10, losses: 2, wlratio: 5.00 },
  { id: 5, player: 'John', wins: 10, losses: 2, wlratio: 5.00 }
];

export async function GET(req: NextRequest) {
  console.log(`GET ${req.nextUrl.hostname}/api/player`);
  console.log(req.nextUrl.searchParams);

  return new Response(JSON.stringify(data), {
    status: 200
  });
};
