'use client';
import { getMatches } from '@/app/actions/match';
import PageTitle from "@/components/PageTitle";
import DataTable from "@/components/DataTable";

const COLUMNS = [
  { label: 'Status', key: 'status' },
  { label: 'Player 1', key: 'player1' },
  { label: 'Player 2', key: 'player2' }
];

export default function Matches() {
  return (
    <DataTable columns={COLUMNS} serverAction={getMatches}>
      <PageTitle title="Matches" />
    </DataTable>
  );
}
