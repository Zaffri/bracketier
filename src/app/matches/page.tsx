import Table from "@/components/Table";

export default function Matches() {
  const data = [
    { id: 1, status: 'Ongoing', player1: 'Jane', player2: 'Steven', winner: undefined },
    { id: 2, status: 'Complete', player1: 'Lyn (win)', player2: 'Jack (loss)', winner: 'Lyn' },
    { id: 3, status: 'Complete', player1: 'Andy (win)', player2: 'Liz (loss)', winner: 'Andy' },
    { id: 4, status: 'Complete', player1: 'Steph (win)', player2: 'Damien (loss)', winner: 'Steph' },
  ];

  const columns = [
    { label: 'Status', key: 'status' },
    { label: 'Player 1', key: 'player1' },
    { label: 'Player 2', key: 'player2' }
  ];

  return (
    <>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 text-center">Matches</h1>
      <Table columns={ columns } rows={ data } />
    </>
  );
}
