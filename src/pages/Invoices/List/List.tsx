import { useEffect } from "react";
import { Box, Divider, Stack, Button } from "@mui/material";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import EnhancedTable from "./Table";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    margin: "0 10px";
    &:hover {
        text-decoration: underline;
    }
`;
const List: React.FC = () => {
    useEffect(() => {
        document.title = "Invoices | Mira";
    }, []);
    return (
        <>
            <Box
                sx={{
                    width: "75vw",
                    margin: "0 20px",
                    padding: "10px",
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <Stack direction="column">
                        <h2 style={{ marginBottom: "2px" }}>Invoices</h2>
                        <p style={{ margin: "2px" }}>
                            <Anchor href="https://mira.bootlab.io/">
                                Dashboard
                            </Anchor>
                            /
                            <Anchor href="https://mira.bootlab.io/">
                                Pages
                            </Anchor>
                            /<span> Invoices</span>
                        </p>
                    </Stack>
                    <Button variant="contained" sx={{ height: "fit-content" }}>
                        <AddIcon />
                        New Invoice
                    </Button>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <div style={{ margin: "20px" }}>
                    <EnhancedTable />
                </div>
            </Box>
            <Footer />
        </>
    );
};

export default List;
