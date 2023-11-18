'use client';
import { getMatches } from '@/app/_data/match';
import PageTitle from "@/components/PageTitle";
import DataTable from "@/components/DataTable";

const COLUMNS = [
  { label: 'Status', key: 'status' },
  { label: 'Player 1', key: 'player1' },
  { label: 'Player 2', key: 'player2' }
];

const callback = (page: number) => getMatches(page)
  .then(data => data)
  .catch(e => console.error(e));

export default function Matches() {
  return (
    <DataTable columns={COLUMNS} fetchDataCallback={callback}>
      <PageTitle title="Matches" />
    </DataTable>
  );
}
