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
    element4: string
) {
    return { element1, element2, element3, element4 };
}

const rows = [
    createData("AppStack", "HTML", "Single License", "76"),
    createData("Mira", "React", "Single License	", "38"),
    createData("Milo", "HTML", "Single License", "43"),
    createData("Robust UI Kit", "Angular", "Single License", "27"),
    createData("Spark", "React", "Single License", "12"),
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
const Blue = styled.div`
    background-color: #0082fb;
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
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
            <Table
                sx={{ minWidth: 450, height: "325px" }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell> Name</TableCell>
                        <TableCell align="right">Tech</TableCell>
                        <TableCell align="right">License</TableCell>
                        <TableCell align="right"> Sales</TableCell>
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
                            <TableCell align="right" sx={{display: "flex"}}>
                                {row.element2 == "HTML" ? (
                                    <Blue>{row.element2}</Blue>
                                ) : row.element2 == "React" ? (
                                    <Green>{row.element2}</Green>
                                ) : (
                                    <Red>{row.element2}</Red>
                                )}
                            </TableCell>
                            <TableCell align="right">{row.element3}</TableCell>
                            <TableCell align="right">{row.element4}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
