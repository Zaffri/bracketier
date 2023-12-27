'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Pagination from "@/components/Pagination";
import Table, { TableColumn } from "@/components/Table";

type DataResponse = {
  results: Record<string, any>[];
  count: number;
};

type DataTableProps = {
  children: React.ReactNode;
  columns: TableColumn[];
  serverAction: Function;
};

export default function DataTable ({ children, columns, serverAction }: DataTableProps) {
  const searchParams = useSearchParams();
  const [data, setData] = useState<DataResponse>({ results: [], count: 0 });
  const [page, setPage] = useState(0);

  useEffect(() => {
    const currentPage = parseInt(searchParams.get("page") || '1');
    if (currentPage !== page) {
      serverAction(currentPage)
        .then((actionResults: DataResponse) => {
          console.log('results =', actionResults);
          setData(actionResults);
          setPage(currentPage);
        })
        .catch((err: Error) => console.error(err));
    }
  }, [page, searchParams, serverAction]);


  return (
    <>
      {children}
      <Table columns={columns} rows={data.results} />
      <Pagination total={data.count} page={page} />
    </>
  );
};