import { useEffect } from "react";
import { Box, Divider, Stack } from "@mui/material";
import styled from "styled-components";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

const StyledP = styled.p`
    margin: 2px;
`;

const PlankPage: React.FC = () => {
    useEffect(() => {
        document.title = "Blank | Mira";
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
                <Stack direction="column">
                    <h2 style={{ marginBottom: "2px" }}>Blank</h2>
                    <p style={{ margin: "2px" }}>
                        <Anchor href="https://mira.bootlab.io/">
                            Dashboard
                        </Anchor>
                        /
                        <Anchor href="https://mira.bootlab.io/"> Pages </Anchor>
                        /<span> Blank</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Stack sx={{ p: 3, backgroundColor: "#fff" }}>
                    <StyledP style={{ fontSize: "20px" }}>Empty card</StyledP>
                    <StyledP>Empty card</StyledP>
                </Stack>
            </Box>
        </>
    );
};

export default PlankPage;
