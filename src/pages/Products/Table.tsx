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
import StarIcon from "@mui/icons-material/Star";
import AppleiPadProGray from "../../assets/AppleiPadProGray.png";
import AppleiPadProSilver from "../../assets/AppleiPadProSilver.png";
import AppleMacProBlack from "../../assets/AppleMacProBlack.png";
import AppleMacProSilver from "../../assets/AppleMacProSilver.png";
import iPhoneBlue from "../../assets/iPhoneBlue.png";
import iPhoneNatural from "../../assets/iPhoneNatural.png";
import iPhoneWhite from "../../assets/iPhoneWhite.png";
import watchMidnight from "../../assets/watchMidnight.png";
import watchMidnight2 from "../../assets/watchMidnight2.png";
import watchSilver from "../../assets/watchSilver.png";
import watchStarlight from "../../assets/watchStarlight.png";
import watchStarlight2 from "../../assets/watchStarlight2.png";

interface ProductProps {
    src: string;
    name: string;
    label: string;
}

const Product: React.FC<ProductProps> = ({ src, name, label }) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div>
                <img
                    src={src}
                    alt=""
                    style={{ width: "40px", height: "40px", margin: "0 10px" }}
                />
            </div>
            <div>
                <h3 style={{ margin: "2px" }}>{name}</h3>
                <p style={{ margin: "2px" }}>{label}</p>
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
interface RatingProps {
    n1: number;
    n2: number;
}

const Rating: React.FC<RatingProps> = ({ n1, n2 }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
            }}
        >
            <StarIcon sx={{ color: "#FFD700" }} />
            {n1}{" "}
            <span style={{ color: "#999", marginLeft: "5px" }}>
                {" "}
                of {n2} Reviews
            </span>
        </div>
    );
};

const rows = [
    createData(
        <Product
            src={AppleiPadProSilver}
            name="Apple iPad Pro"
            label="Silver"
        />,
        "$ 1,399.00",
        "48",
        "Tablets",
        <Rating n1={4.6} n2={55} />,
        Action
    ),
    createData(
        <Product
            src={AppleiPadProGray}
            name="Apple iPad Pro"
            label="Space Gray"
        />,
        "$ 1,399.00",
        "48",
        "Tablets",
        <Rating n1={4.3} n2={25} />,
        Action
    ),
    createData(
        <Product
            src={iPhoneBlue}
            name="Apple iPhone 15 Pro Max"
            label="Blue Titanium"
        />,
        "$ 1499.00",
        "38",
        "Smartphones",
        <Rating n1={4.6} n2={40} />,
        Action
    ),
    createData(
        <Product
            src={iPhoneNatural}
            name="Apple iPhone 15 Pro Max"
            label="Natural Titanium"
        />,
        "$ 1499.00",
        "30",
        "Smartphones",
        <Rating n1={4.8} n2={50} />,
        Action
    ),
    createData(
        <Product
            src={iPhoneWhite}
            name="Apple iPhone 15 Pro Max"
            label="White Titanium"
        />,
        "$ 1499.00",
        "45",
        "Smartphones",
        <Rating n1={4.9} n2={60} />,
        Action
    ),
    createData(
        <Product
            src={AppleMacProSilver}
            name="Apple MacBook Pro"
            label="Silver"
        />,
        "$ 1,399.00",
        "55",
        "Notebooks",
        <Rating n1={4.7} n2={45} />,
        Action
    ),
    createData(
        <Product
            src={AppleMacProBlack}
            name="Apple MacBook Pro"
            label="Space Black"
        />,
        "$ 1,399.00",
        "50",
        "Notebooks",
        <Rating n1={4.4} n2={30} />,
        Action
    ),
    createData(
        <Product src={watchMidnight} name="Apple Watch SE" label="Midnight" />,
        "$ 1499.00",
        "49",
        "Smartwatches",
        <Rating n1={4.7} n2={40} />,
        Action
    ),
    createData(
        <Product src={watchSilver} name="Apple Watch SE" label="Silver" />,
        "$ 1499.00",
        "30",
        "Smartwatches",
        <Rating n1={4.7} n2={40} />,
        Action
    ),
    createData(
        <Product src={watchStarlight} name="Apple Watch SE" label="Starlight" />,
        "$ 1499.00",
        "54",
        "Smartwatches",
        <Rating n1={4.5} n2={35} />,
        Action
    ),
    createData(
        <Product src={watchMidnight2} name="Apple Watch Series 9" label="Midnight" />,
        "$ 1499.00",
        "42",
        "Smartwatches",
        <Rating n1={4.2} n2={20} />,
        Action
    ),
    createData(
        <Product src={watchStarlight2} name="Apple Watch Series 9" label="Starlight" />,
        "$ 1499.00",
        "54",
        "Smartwatches",
        <Rating n1={4.5} n2={35} />,
        Action
    ),
];

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
        label: "Item name",
    },
    {
        id: "Element2",
        numeric: true,
        disablePadding: false,
        label: "Price",
    },
    {
        id: "Element3",
        numeric: true,
        disablePadding: false,
        label: "Stock",
    },
    {
        id: "Element4",
        numeric: true,
        disablePadding: false,
        label: "Category",
    },
    {
        id: "Element5",
        numeric: true,
        disablePadding: false,
        label: "Rating",
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
                    Products
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
