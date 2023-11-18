export type TableColumn = {
  label: string;
  key: string;
};

export type TableRow = Record<string, any>;

type TableHeadingProps = {
  column: TableColumn;
  columnIndex: number;
  columnLength: number;
};

type TableRowProps = {
  columns: TableColumn[];
  row: TableRow
};

type TableProps = {
  columns: TableColumn[];
  rows: TableRow[];
};

const getCellBorderRadius = (columnLength: number, columnIndex: number) => {
  if (columnIndex === 0) {
    return ' rounded-l-lg';
  } else if (columnIndex + 1 === columnLength) {
    return ' rounded-r-lg';
  }
  return '';
};

function TableHeading ({ column, columnIndex, columnLength }: TableHeadingProps) {
  return (
    <>
      <th className={`px-4 py-3 text-center title-font tracking-wider font-medium text-white text-sm bg-sky-500${getCellBorderRadius(columnLength, columnIndex)}`}>
        { column.label }
      </th>
    </>
  );
};

function TableRow ({ columns, row }: TableRowProps) {
  return (
    <tr>
      {columns && columns.map(c => {
        return (
          <td className="px-4 py-3 text-center" key={`${row.id}-${c.key}`}>
            { row[c.key as keyof typeof row] }
          </td>
        );
      })}
    </tr>
  );
};

export default function Table ({ columns, rows } : TableProps) {
  return (
    <>
      <div className="flex flex-col text-center w-full mb-8">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Some supporting text here...
        </p>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              { columns && columns.map((c, index, originalArr) => {
                return <TableHeading key={c.key} column={c} columnIndex={index} columnLength={originalArr.length} />;
              })}
            </tr>
          </thead>
          <tbody>
            { rows && rows.map(r => {
              return (
                <TableRow key={r.id} columns={columns} row={r} />
              );
            }) }

            { rows.length === 0 && 
              <tr>
                <td className="px-4 py-3 text-center" colSpan={ columns.length + 1 }>
                  No data available.
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};