'use client';
import { useEffect, useState } from 'react';
import { getMatches } from '@/app/_data/match';
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
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 text-center">Matches</h1>
      <Table columns={ columns } rows={ matches } />
    </>
  );
}
