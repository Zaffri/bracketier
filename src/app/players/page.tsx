import { getPlayers } from '@/app/actions/player';
import DataTable from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";

const COLUMNS = [
  { label: 'Player', key: 'player' },
  { label: 'Wins', key: 'wins' },
  { label: 'Losses', key: 'losses' },
  { label: 'W/L Ratio', key: 'wlratio' }
];

export default async function Home() {
  return (
    <DataTable columns={COLUMNS} serverAction={getPlayers}>
      <PageTitle title="Players" />
    </DataTable>
  );
};
