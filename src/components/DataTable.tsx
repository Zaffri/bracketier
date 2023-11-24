import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const [items, setItems] = useState<DataResponse['results']>([]);
  const [totalItems, setTotalitems] = useState(0);

  const searchParams = useSearchParams();
  const page = searchParams.get("page") || '1';

  useEffect(() => {
    const controller = new AbortController();

    fetchDataCallback(page, controller.signal)
      .then((data: DataResponse) => {
        if (!data) throw Error('No data returned', data);
        const { results, count } = data;

        setItems(results);
        setTotalitems(count);
      })
      .catch((err: any) => console.error(err));
    
    return () => controller.abort();
  }, [page, fetchDataCallback]);

  return (
    <>
      {children}
      <Table columns={columns} rows={items} />
      <Pagination total={totalItems} page={page} />
    </>
  );
};