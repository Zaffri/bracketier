import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { updatePage } from '@/app/utils';
import Pagination from "@/components/Pagination";
import Table, { TableColumn } from "@/components/Table";

type DataTableProps = {
  children: React.ReactNode;
  columns: TableColumn[];
  fetchDataCallback: Function;
};

type DataResponse = {
  results: Record<string, any>[];
  count: number;
};

export default function DataTable ({ children, columns, fetchDataCallback }: DataTableProps) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<DataResponse['results']>([]);
  const [totalItems, setTotalitems] = useState(0);

  const searchParams = useSearchParams();

  // TODO: add abort?
  useEffect(() => {
    fetchDataCallback(page)
      .then(({ results, count }: DataResponse) => {
        updatePage(searchParams, page, setPage);
        setItems(results);
        setTotalitems(count);
      })
      .catch((err: any) => console.error(err));
  }, [page, fetchDataCallback, searchParams]);

  return (
    <>
      {children}
      <Table columns={columns} rows={items} />
      <Pagination total={totalItems} page={page} setPage={setPage} />
    </>
  );
};