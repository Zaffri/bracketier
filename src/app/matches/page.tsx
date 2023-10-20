'use client';
import { useEffect, useState } from 'react';
import { getMatches } from '@/app/_data/match';
import PageTitle from "@/components/PageTitle";
import Table from "@/components/Table";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMatches(page)
      .then(data => setMatches(data))
      .catch(e => console.error(e));
  }, [page]);

  const columns = [
    { label: 'Status', key: 'status' },
    { label: 'Player 1', key: 'player1' },
    { label: 'Player 2', key: 'player2' }
  ];

  return (
    <>
      <PageTitle title="Matches" />
      <Table columns={ columns } rows={ matches } />
    </>
  );
}
