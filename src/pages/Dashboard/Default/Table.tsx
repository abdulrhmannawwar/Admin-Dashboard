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
    createData(
        "Project Aurora",
        "01/01/2023",
        "31/06/2023",
        "Done",
        "James Dalton"
    ),
    createData(
        "Project Eagle",
        "01/01/2023",
        "31/06/2023",
        "In Progress",
        "Tracy Mack"
    ),
    createData(
        "Project Fireball",
        "01/01/2023",
        "31/06/2023",
        "Done",
        "Sallie Love"
    ),
    createData(
        "Project Omega",
        "01/01/2023",
        "31/06/2023",
        "Cancelled",
        "Glenda Jang"
    ),
    createData(
        "Project Yoda",
        "01/01/2023",
        "31/06/2023",
        "Done",
        "Raymond Ennis"
    ),
    createData(
        "Project Zulu",
        "01/01/2023",
        "31/06/2023",
        "Done",
        "Matthew Winters"
    ),
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
const Cancelled = styled.div`
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
            <Table
                sx={{ minWidth: 650, height: "425px" }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Start Date </TableCell>
                        <TableCell align="right">End Date</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">Assignee</TableCell>
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
                            <TableCell align="center" style={{display: "flex", justifyContent: "center"}}>
                                {row.element4 === "Done" ? (
                                    <Done>{row.element4}</Done>
                                ) : row.element4 === "In Progress" ? (
                                    <InProgress>{row.element4}</InProgress>
                                ) : row.element4 === "Cancelled" ? (
                                    <Cancelled>{row.element4}</Cancelled>
                                ) : (
                                    row.element4
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
