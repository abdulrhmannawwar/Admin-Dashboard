import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import ArchiveIcon from "@mui/icons-material/Archive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar } from "@mui/material";
import styled from "styled-components";

interface CustomerProps {
    name: string;
}
const Customer: React.FC<CustomerProps> = ({ name }) => {
    const [fname, lname] = name.split(" ");
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div>
                <Avatar
                    alt={name}
                    src=""
                    sx={{
                        width: "40px",
                        height: "40px",
                        mr: "5px",
                        backgroundColor: "#4782d2",
                    }}
                />
            </div>
            <div>
                <p style={{ margin: "2px" }}>{name}</p>
                <p style={{ margin: "2px" }}>
                    {fname.toLowerCase()}@{lname.toLowerCase()}.com
                </p>
            </div>
        </div>
    );
};

interface Data {
    Element1: React.ReactNode | string;
    Element2: string;
    Element3: string;
    Element4: string;
    Element5: React.ReactNode | string;
    Element6: React.ReactNode | string;
}

function createData(
    Element1: React.ReactNode | string,
    Element2: string,
    Element3: string,
    Element4: string,
    Element5: React.ReactNode | string,
    Element6: React.ReactNode
): Data {
    return {
        Element1,
        Element2,
        Element3,
        Element4,
        Element5,
        Element6,
    };
}

const Action = (
    <div>
        <span style={{ margin: "20px" }}>
            <ArchiveIcon />
        </span>
        <span>
            <VisibilityIcon />
        </span>
    </div>
);

const Orange = styled.div`
    background-color: #fc7b02;
    color: white;
    padding: 5px 8px;
    margin: 10px 0;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
`;
const Green = styled.div`
    background-color: #4cae4d;
    color: white;
    padding: 5px 8px;
    margin: 10px 0;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
`;
const Void = styled.div`
    background-color: #ebebeb;
    color: #000000;
    padding: 5px 8px;
    margin: 10px 0;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
`;

const rows = [
    createData(
        <Customer name="Anna Walley" />,
        "Sent",
        "#000112",
        "$530,00	",
        "2023-01-02",
        Action
    ),
    createData(
        <Customer name="Doris Fritz" />,
        "Void",
        "#000114",
        "$209,00",
        "2023-02-13",
        Action
    ),
    createData(
        <Customer name="Edward Adkins" />,
        "Paid",
        "#000117",
        "$535,00",
        "2023-03-04",
        Action
    ),
    createData(
        <Customer name="Edwin Baker" />,
        "Paid",
        "#000115",
        "$678,00",
        "2023-02-17",
        Action
    ),
    createData(
        <Customer name="Gordon Workman" />,
        "Sent",
        "#000119",
        "$314,00",
        "2023-03-28",
        Action
    ),
    createData(
        <Customer name="Jo Avery" />,
        "Sent",
        "#000113",
        "$864,00",
        "2023-01-23",
        Action
    ),
    createData(
        <Customer name="Leigha Hyden" />,
        "Paid",
        "#000118",
        "$341,00",
        "2023-03-14",
        Action
    ),

    createData(
        <Customer name="Maureen Gagnon" />,
        "Paid",
        "#000117",
        "$781,00",
        "2023-03-04",
        Action
    ),
    createData(
        <Customer name="Maxine Thompson" />,
        "Sent",
        "#000121",
        "$273,00",
        "2023-05-31",
        Action
    ),
    createData(
        <Customer name="Shawn Waddell" />,
        "Sent",
        "#000120",
        "$713,00",
        "2023-04-25",
        Action
    ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (
        orderBy === "Element1" &&
        typeof aValue === "object" &&
        typeof bValue === "object"
    ) {
        const aName = (aValue as React.ReactElement<CustomerProps>).props.name;
        const bName = (bValue as React.ReactElement<CustomerProps>).props.name;
        return aName.localeCompare(bName);
    }

    if (bValue < aValue) return -1;
    if (bValue > aValue) return 1;
    return 0;
}
type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: "Element1",
        numeric: false,
        disablePadding: true,
        label: "Customer",
    },
    {
        id: "Element2",
        numeric: true,
        disablePadding: false,
        label: "Status",
    },
    {
        id: "Element3",
        numeric: true,
        disablePadding: false,
        label: "ID",
    },
    {
        id: "Element4",
        numeric: true,
        disablePadding: false,
        label: "Amount",
    },
    {
        id: "Element5",
        numeric: true,
        disablePadding: false,
        label: "Issued Date",
    },
    {
        id: "Element6",
        numeric: true,
        disablePadding: false,
        label: "Actions",
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
interface EnhancedTableToolbarProps {
    numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;
    return (
        <Toolbar
            sx={[
                {
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                },
                numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                },
            ]}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Invoices
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}
export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("Element1");
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.Element1);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = selected.includes(index);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) =>
                                            handleClick(event, index)
                                        }
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={index}
                                        selected={isItemSelected}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    "aria-labelledby": labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.Element1}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{ display: "flex" }}
                                        >
                                            {row.Element2 == "Paid" ? (
                                                <Green>{row.Element2}</Green>
                                            ) : row.Element2 == "Sent" ? (
                                                <Orange>{row.Element2}</Orange>
                                            ) : (
                                                <Void>{row.Element2}</Void>
                                            )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element3}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element4}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element5}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element6}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={8} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
