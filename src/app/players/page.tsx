'use client';
import { getPlayers } from '@/app/_data/player';
import DataTable from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";

const COLUMNS = [
  { label: 'Player', key: 'player' },
  { label: 'Wins', key: 'wins' },
  { label: 'Losses', key: 'losses' },
  { label: 'W/L Ratio', key: 'wlratio' }
];

const callback = (page: number) => getPlayers(page)
  .then(data => data)
  .catch(e => console.error(e));

export default function Home() {
  return (
    <DataTable columns={COLUMNS} fetchDataCallback={callback}>
      <PageTitle title="Players" />
    </DataTable>
  );
};
