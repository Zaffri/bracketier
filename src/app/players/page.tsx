'use client';
import { useEffect, useState } from 'react';
import { getPlayers } from '@/app/_data/player';
import PageTitle from "@/components/PageTitle";
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
      <PageTitle title="Players" />
      <Table columns={ columns } rows={ players } />
    </>
  );
};
