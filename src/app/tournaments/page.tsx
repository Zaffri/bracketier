'use client';
import { getTournaments } from '@/app/_data/tournament';
import PageTitle from "@/components/PageTitle";
import DataTable from "@/components/DataTable";

const COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Winner', key: 'winner' },
  { label: 'No. of players', key: 'numOfPlayers' },
  { label: 'Status', key: 'status' },
];

const callback = (page: number) => getTournaments(page)
  .then(data => data)
  .catch(e => console.error(e));;

export default function Tournaments() {

  return (
    <DataTable columns={COLUMNS} fetchDataCallback={callback}>
      <PageTitle title="Tournaments" />
    </DataTable>
  );
}
