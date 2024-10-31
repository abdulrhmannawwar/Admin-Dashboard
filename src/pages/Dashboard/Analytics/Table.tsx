import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

function createData(
    element1: string,
    element2: string,
    element3: string,
    element4: string,
    element5: string
) {
    return { element1, element2, element3, element4, element5 };
}

const rows = [
    createData("Google", "1023", "1265", "30%", "00:06:25"),
    createData("Direct", "872", "1077", "63%", "00:09:18"),
    createData("X", "812", "1003", "28%", "00:05:56"),
    createData("GitHub", "713", "881", "22%", "00:06:19"),
    createData("uckDuckGo", "693", "856", "56%", "00:09:12"),
    createData("Facebook", "623", "770", "20%", "00:04:42"),
];
const Green = styled.div`
    background-color: green;
    color: white;
    padding: 5px;
    width: fit-content;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
`;
const Red = styled.div`
    background-color: red;
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
`;
export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <h3>Traffic sources</h3>
            <Table
                sx={{
                    minWidth: 650,
                    height: "425px",
                    backgroundColor: "white",
                    padding: "10px",
                    margin: "10px",
                }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Source</TableCell>
                        <TableCell align="right">Users</TableCell>
                        <TableCell align="right">Sessions</TableCell>
                        <TableCell align="right">Bounce Rate </TableCell>
                        <TableCell align="right">
                            Avg. Session Duration
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.element1}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.element1}
                            </TableCell>
                            <TableCell align="right">{row.element2}</TableCell>
                            <TableCell align="right">{row.element3}</TableCell>
                            <TableCell
                                align="left"
                                style={{
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {row.element4 === "63%" ||
                                row.element4 === "56%" ? (
                                    <Red>{row.element4}</Red>
                                ) : (
                                    <Green>{row.element4}</Green>
                                )}
                            </TableCell>
                            <TableCell align="right">{row.element5}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
