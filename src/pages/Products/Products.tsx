import { useEffect } from "react";
import { Box, Divider, Stack, Button } from "@mui/material";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import EnhancedTable from "./Table";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;
const Products: React.FC = () => {
    useEffect(() => {
        document.title = "Products | Mira";
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
                        <h2 style={{ marginBottom: "2px" }}>Products</h2>
                        <p style={{ margin: "2px" }}>
                            <Anchor href="https://mira.bootlab.io/">
                                Dashboard
                            </Anchor>
                            /
                            <Anchor href="https://mira.bootlab.io/">
                                Pages
                            </Anchor>
                            /<span> Products</span>
                        </p>
                    </Stack>
                    <Button variant="contained" sx={{ height: "fit-content" }}>
                        <AddIcon />
                        New Product
                    </Button>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <div style={{ margin: "20px" }}>
                    <EnhancedTable />
                </div>
            </Box>
        </>
    );
};

export default Products;
