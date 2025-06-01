import React from "react";

type Props = {
  columns: {
    header: string;
    key: string;
    className?: string;
  }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
};

const Table = ({ columns, renderRow, data }: Props) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th className={col.className} key={col.key}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
