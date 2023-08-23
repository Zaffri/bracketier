import Table from "@/components/Table";

export default function Tournaments() {
  const data = [
    { id: 1, name: 'Halloween Pocket #1', winner: '-', numOfPlayers: '16', status: 'Ongoing' },
    { id: 2, name: 'Morriston Battle Royale 1', winner: 'Lyn', numOfPlayers: 6, status: 'Complete' },
    { id: 3, name: 'First tourny', winner: 'Steven', numOfPlayers: 10, status: 'Complete' },
  ];

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Winner', key: 'winner' },
    { label: 'No. of players', key: 'numOfPlayers' },
    { label: 'Status', key: 'status' },
  ];

  return (
    <>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 text-center">Tournaments</h1>
      <Table columns={ columns } rows={ data } />
    </>
  );
}
