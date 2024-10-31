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
    createData("Aurora", "Single License", "React", "12", "1205"),
    createData("Canary", "Single License", "React", "1", "108"),
    createData("Eagle", "Extended License", "Angular", "2", "108"),
    createData("Fireball", "Single License", "React", "3", "360"),
    createData("Omega", "Single License", "Angular", "6", "712"),
    createData("Yoda", "Extended License", "Angular", "15", "1502"),
    createData("Zulu", "Extended License", "Angular", "2", "480"),
];
const Done = styled.div`
    background-color: green;
    color: white;
    padding: 5px;
    width: fit-content;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
`;
const InProgress = styled.div`
    background-color: orange;
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
`;
export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650, height: "425px" }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">License Type</TableCell>
                        <TableCell align="right">Technology</TableCell>
                        <TableCell align="right"> Open Tickets</TableCell>
                        <TableCell align="right">Sales</TableCell>
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
                            <TableCell align="center">
                                {row.element1 === "Eagle" ||
                                row.element1 === "Omega" ? (
                                    <InProgress>{row.element3}</InProgress>
                                ) : (
                                    <Done>{row.element3}</Done>
                                )}
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                {row.element4}
                            </TableCell>
                            <TableCell align="right">{row.element5}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
