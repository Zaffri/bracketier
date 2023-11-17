import { PAGE_SIZE } from "@/app/api/constants";
import { useEffect, useState } from "react";
import Link from 'next/link';

type PaginationProps = {
  total: number;
  page: number;
  setPage: Function
};

type PageNumberProps = {
  active: boolean;
  page: number;
}

const PageNumber = ({ active, page }: PageNumberProps) => {
  const activeClass = active === true ? 'bg-indigo-600' : 'bg-slate-400';
  return <Link
    className={`px-2 py-1 mr-1 ${activeClass} text-white rounded-md`}
    href={{ query: { page } }}
    key={page}
  >
    {page}
  </Link>;
};

export default function Pagination ({ total, page }: PaginationProps) {
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(total / PAGE_SIZE) || 1);
  }, [total]);

  return (
    <div className="flex justify-center mt-6">
      {[...Array(pages)].map((_, index) => 
        <PageNumber key={index} page={index + 1} active={page === index + 1} />
      )}
    </div>
  );
};
