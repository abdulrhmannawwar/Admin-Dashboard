import { useEffect } from "react";
import { Box, Divider, Stack, Button } from "@mui/material";
import styled from "styled-components";
import MyCalendar from "./CalendarComponent";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;
const Calendar: React.FC = () => {
    useEffect(() => {
        document.title = "Calendar | Mira";
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
                        <h2 style={{ marginBottom: "2px" }}>Calendar</h2>
                        <p style={{ margin: "2px" }}>
                            <Anchor href="https://mira.bootlab.io/">
                                Dashboard
                            </Anchor>
                            /
                            <Anchor href="https://mira.bootlab.io/">
                                Pages
                            </Anchor>
                            /<span> Calendar</span>
                        </p>
                    </Stack>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <div style={{ margin: "20px" }}>
                    <MyCalendar />
                </div>
            </Box>
        </>
    );
};

export default Calendar;
