import Link from 'next/link';
import { getPlayers } from '@/app/actions/player';
import DataTable from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import Button from '@/components/Button';

const COLUMNS = [
  { label: 'Player', key: 'player' },
  { label: 'Wins', key: 'wins' },
  { label: 'Losses', key: 'losses' },
  { label: 'W/L Ratio', key: 'wlratio' }
];

export default async function PlayersPage() {
  return (
    <DataTable columns={COLUMNS} serverAction={getPlayers}>
      <PageTitle title='Players' />
      <Link href="/players/create">
        <Button label="Add player" classes='mb-2 px-4 py-2'/>
      </Link>
    </DataTable>
  );
};
