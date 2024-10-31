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
import styled from "styled-components";

interface Data {
    Element1: string;
    Element2: string;
    Element3: string;
    Element4: string;
    Element5: string;
    Element6: string;
    Element7: React.ReactNode | string;
}

function createData(
    Element1: string,
    Element2: string,
    Element3: string,
    Element4: string,
    Element5: string,
    Element6: string,
    Element7: React.ReactNode
): Data {
    return {
        Element1,
        Element2,
        Element3,
        Element4,
        Element5,
        Element6,
        Element7,
    };
}

const Action = (
    <div>
        <span style={{ marginRight: "20px" }}>
            <ArchiveIcon />
        </span>
        <span>
            <VisibilityIcon />
        </span>
    </div>
);

const rows = [
    createData(
        "#000253",
        "Salt & Pepper Grinder",
        "2023-01-02",
        "$32,00",
        "Shipped",
        "Visa",
        Action
    ),
    createData(
        "#000256",
        "Glass Teapot",
        "2023-01-08",
        "$45,00",
        "Shipped",
        "Visa",
        Action
    ),
    createData(
        "#000259",
        "Hip Flask",
        "2023-01-16",
        "$25,00",
        "Processing",
        "Visa",
        Action
    ),
    createData(
        "#000261",
        "Womens Watch",
        "2023-01-22",
        "$65,00",
        "Cancelled",
        "Visa",
        Action
    ),
    createData(
        "#000254",
        "Backpack",
        "2023-01-04",
        "$130,00",
        "Shipped",
        "PayPal",
        Action
    ),
    createData(
        "#000257",
        "Unbreakable Water Bottle",
        "2023-01-09",
        "$40,00",
        "Shipped",
        "PayPal",
        Action
    ),
    createData(
        "#000260",
        "Woven Slippers",
        "2023-01-22",
        "$20,00",
        "Shipped",
        "PayPal",
        Action
    ),
    createData(
        "#000255",
        "Pocket Speaker",
        "2023-01-04",
        "$80,00",
        "Cancelled",
        "Mastercard",
        Action
    ),
    createData(
        "#000258",
        "Spoon Saver",
        "2023-01-14",
        "$15,00",
        "Shipped",
        "Mastercard",
        Action
    ),
    createData(
        "#000262",
        "Over-Ear Headphones",
        "2023-01-23",
        "$210,00",
        "Shipped",
        "Mastercard",
        Action
    ),
];

const Red = styled.div`
    background-color: red;
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
`;
const Green = styled.div`
    background-color: green;
    color: white;
    padding: 5px;
    width: fit-content;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
`;
const Orange = styled.div`
    background-color: orange;
    color: white;
    padding: 5px;
    width: fit-content;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
`;

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
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
        label: "Order ID",
    },
    {
        id: "Element2",
        numeric: true,
        disablePadding: false,
        label: "Product",
    },
    {
        id: "Element3",
        numeric: true,
        disablePadding: false,
        label: "Date",
    },
    {
        id: "Element4",
        numeric: true,
        disablePadding: false,
        label: "Total",
    },
    {
        id: "Element5",
        numeric: true,
        disablePadding: false,
        label: "Status",
    },
    {
        id: "Element6",
        numeric: true,
        disablePadding: false,
        label: "Payment method",
    },
    {
        id: "Element7",
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
                    Orders
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
            const newSelected = rows.map((n) => n.id);
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
                                        <TableCell align="right">
                                            {row.Element2}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element3}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element4}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{ display: "flex" }}
                                        >
                                            {row.Element5 === "Shipped" ? (
                                                <Green>{row.Element5}</Green>
                                            ) : row.Element5 == "Cancelled" ? (
                                                <Red>{row.Element5}</Red>
                                            ) : (
                                                <Orange>{row.Element5}</Orange>
                                            )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element6}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.Element7}
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
