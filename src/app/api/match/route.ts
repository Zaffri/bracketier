import { NextRequest } from "next/server";

const data = [
  { id: 1, status: 'Ongoing', player1: 'Jane', player2: 'Steven', winner: undefined },
  { id: 2, status: 'Complete', player1: 'Lyn (win)', player2: 'Jack (loss)', winner: 'Lyn' },
  { id: 3, status: 'Complete', player1: 'Andy (win)', player2: 'Liz (loss)', winner: 'Andy' },
  { id: 4, status: 'Complete', player1: 'Steph (win)', player2: 'Damien (loss)', winner: 'Steph' },
];

export async function GET(req: NextRequest) {
  console.log(`GET ${req.nextUrl.hostname}/api/match`);
  console.log(req.nextUrl.searchParams);

  return new Response(JSON.stringify(data), {
    status: 200
  });
};
