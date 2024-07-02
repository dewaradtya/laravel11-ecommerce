const Table = ({ columns, rows }) => {
    return (
        <>
            <div className="table-responsive bg-white layered-shadow">
                <table className="my-table ">
                    <TableHead columns={columns} />
                    <TableBody columns={columns} rows={rows} />
                </table>
            </div>
        </>
    );
};

const TableHead = ({ columns }) => {
    const groupColumns = columns.filter((column) => column.groupColumn);

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.label} colSpan={column.colSpan ?? 1} rowSpan={column.rowSpan ?? 1}>
                        {column.label}
                    </th>
                ))}
            </tr>

            {groupColumns.length > 0 && (
                <tr>
                    {groupColumns.map((column) =>
                        column.groupColumn.map((subColumn) => (
                            <th key={subColumn.label} colSpan={subColumn.colSpan ?? 1} rowSpan={subColumn.rowSpan ?? 1}>
                                {subColumn.label}
                            </th>
                        ))
                    )}
                </tr>
            )}
        </thead>
    );
};

const TableBody = ({ columns, rows }) => {
    return (
        <tbody>
            {rows?.length === 0 && (
                <tr>
                    <td colSpan={columns.length} className="fw-bold fs-5">
                        Data tidak ditemukan.
                    </td>
                </tr>
            )}

            {rows?.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => {
                        if (column.groupColumn) {
                            return column.groupColumn.map((subColumn) => (
                                <td key={subColumn.name}>
                                    {subColumn.renderCell?.(row) ?? row[subColumn.name] ?? '-'}
                                </td>
                            ));
                        } else {
                            return (
                                <td key={column.name}>
                                    {column.renderCell?.(row) ?? row[column.name] ?? '-'}
                                </td>
                            );
                        }
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default Table;
