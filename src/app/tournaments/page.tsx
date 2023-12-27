import { getTournaments } from '@/app/actions/tournament';
import PageTitle from "@/components/PageTitle";
import DataTable from "@/components/DataTable";

const COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Winner', key: 'winner' },
  { label: 'No. of players', key: 'numOfPlayers' },
  { label: 'Status', key: 'status' },
];

export default async function Tournaments() {
  return (
    <DataTable columns={COLUMNS} serverAction={getTournaments}>
      <PageTitle title="Tournaments" />
    </DataTable>
  );
}
