import Table from "@/components/Table";

export default function Home() {
  const data = [
    { id: 1, player: 'Jane', wins: 100, losses: 2, wlratio: 50.00 },
    { id: 2, player: 'Jack', wins: 10, losses: 1, wlratio: 10.00 },
    { id: 3, player: 'Steven', wins: 10, losses: 2, wlratio: 5.00 },
    { id: 4, player: 'Elaine', wins: 10, losses: 2, wlratio: 5.00 },
    { id: 5, player: 'John', wins: 10, losses: 2, wlratio: 5.00 }
  ];

  const columns = [
    { label: 'Player', key: 'player' },
    { label: 'Wins', key: 'wins' },
    { label: 'Losses', key: 'losses' },
    { label: 'W/L Ratio', key: 'wlratio' }
  ];

  return (
    <>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 text-center">Players</h1>
      <Table columns={ columns } rows={ data } />
    </>
  );
};
