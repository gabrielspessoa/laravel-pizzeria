import { useMemo } from "react";
import {
    Column,
    useBlockLayout,
    useFlexLayout,
    useGridLayout,
    useResizeColumns,
    useTable,
} from "react-table";

export const Table = ({ columns, data }: { columns: Column[]; data: any }) => {
    const table = useTable({ columns, data }, useResizeColumns, useGridLayout);

    return (
        <div
            className="text-sm text-left text-gray-500"
            {...table.getTableProps()}
        >
            {table.headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column: any) => (
                    <div
                        key={column.id}
                        {...column.getHeaderProps()}
                        className="cell header font-bold text-xs !relative bg-gray-50 text-gray-700 uppercase px-6 py-3"
                    >
                        {column.render("Header")}
                        {column.canResize && (
                            <div
                                {...column.getResizerProps()}
                                className={`resizer absolute w-3 top-0 bg-transparent h-full right-0 translate-x-1/2 z-50 ${
                                    column.isResizing
                                        ? "bg-gray-300"
                                        : "hover:bg-gray-200"
                                }`}
                            />
                        )}
                    </div>
                ))
            )}
            {table.rows.map((row) => {
                table.prepareRow(row);
                return (
                    <div className="contents group">
                        {row.cells.map((cell) => (
                            <div
                                {...cell.getCellProps()}
                                className="flex items-center px-6 py-4 bg-white cell whitespace-nowrap group-hover:bg-gray-50 group hover:z-50"
                            >
                                <span className="hover:bg-gray-50 group-hover:shadow-[0_0_0_4px_theme(colors.gray.50)] group-hover:z-50">
                                    {cell.render("Cell")}
                                </span>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};
