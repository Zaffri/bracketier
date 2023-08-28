import { NextRequest } from "next/server";

const data = [
  { id: 1, name: 'Halloween Pocket #1', winner: '-', numOfPlayers: '16', status: 'Ongoing' },
  { id: 2, name: 'Morriston Battle Royale 1', winner: 'Lyn', numOfPlayers: 6, status: 'Complete' },
  { id: 3, name: 'First tourny', winner: 'Steven', numOfPlayers: 10, status: 'Complete' },
];

export async function GET(req: NextRequest) {
  console.log(`GET ${req.nextUrl.hostname}/api/tournament`);
  console.log(req.nextUrl.searchParams);

  return new Response(JSON.stringify(data), {
    status: 200
  });
};
