'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPlayers } from '@/app/_data/player';
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { updatePage } from '../utils';

const COLUMNS = [
  { label: 'Player', key: 'player' },
  { label: 'Wins', key: 'wins' },
  { label: 'Losses', key: 'losses' },
  { label: 'W/L Ratio', key: 'wlratio' }
];

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [page, setPage] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    updatePage(searchParams, page, setPage);
  }, [page, searchParams]);

  // TODO: add AbortController
  useEffect(() => {
    if (page !== 0) {
      getPlayers(page)
        .then(data => {
          const { results, count } = data;
          setPlayers(results);
          setTotalPlayers(count);
        })
        .catch(e => console.error(e));
    }
  }, [page]);

  return (
    <>
      <PageTitle title="Players" />
      <Table columns={ COLUMNS } rows={ players } />
      <Pagination total={totalPlayers} page={page} setPage={setPage} />
    </>
  );
};
