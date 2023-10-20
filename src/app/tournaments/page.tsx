'use client';
import { useEffect, useState } from 'react';
import { getTournaments } from '@/app/_data/tournament';
import PageTitle from "@/components/PageTitle";
import Table from "@/components/Table";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTournaments(page)
      .then(data => setTournaments(data))
      .catch(e => console.error(e));
  }, [page]);

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Winner', key: 'winner' },
    { label: 'No. of players', key: 'numOfPlayers' },
    { label: 'Status', key: 'status' },
  ];

  return (
    <>
      <PageTitle title="Tournaments" />
      <Table columns={ columns } rows={ tournaments } />
    </>
  );
}
