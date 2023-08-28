'use client';
import { useEffect, useState } from 'react';
import { getPlayers } from '@/app/_data/player';
import Table from "@/components/Table";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPlayers(page)
      .then(data => setPlayers(data))
      .catch(e => console.error(e));
  }, [page]);

  const columns = [
    { label: 'Player', key: 'player' },
    { label: 'Wins', key: 'wins' },
    { label: 'Losses', key: 'losses' },
    { label: 'W/L Ratio', key: 'wlratio' }
  ];

  return (
    <>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 text-center">Players</h1>
      <Table columns={ columns } rows={ players } />
    </>
  );
};
