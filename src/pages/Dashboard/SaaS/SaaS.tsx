import { useEffect } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import NotesIcon from "@mui/icons-material/Notes";
import Map from "./Map";
import Barchart from "./Barchart";
import PieChart from "./PieChart";
import BasicTable from "./Table";

const StyledP = styled.p`
    margin: 2px;
`;
const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 100%;
    height: 170px;
    margin: 10px;
`;

const GreenSpan = styled.span`
    background-color: #4e654e33;
    color: #32d23c;
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
`;

const RedSpan = styled.span`
    background-color: #a0595933;
    color: #ff0000;
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
`;
const StyledTag = styled.div`
    background-color: #4284d8;
    padding: 5px 10px;
    font-size: 10px;
    height: fit-content;
    color: white;
    border-radius: 5px;
`;

export default function SaaS() {
    useEffect(() => {
        document.title = "SaaS Dashboard | Mira";
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
                    <div>
                        <h2 style={{ marginBottom: "2px" }}>SaaS Dashboard</h2>
                        <StyledP>
                            Welcome back, Abdo! We've missed you. 👋
                        </StyledP>
                    </div>
                    <Stack
                        direction="row"
                        spacing={2}
                        style={{ color: "blue" }}
                    >
                        <LoopIcon sx={{ cursor: "pointer" }} />
                        <NotesIcon sx={{ cursor: "pointer" }} />
                        <Button variant="contained">Today April 29</Button>
                    </Stack>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ flexDirection: { xs: "column", sm: "row" } }}
                >
                    <Box sx={{ width: { xs: "100%", sm: "23%" } }}>
                        <Card>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: "space-between" }}
                            >
                                <div>
                                    <h5 style={{ margin: "5px" }}>Income</h5>
                                    <h2 style={{ margin: "15px 5px" }}>
                                        $37.500
                                    </h2>
                                    <GreenSpan>+14%</GreenSpan>
                                    Since last month
                                </div>
                                <StyledTag>Monthly</StyledTag>
                            </Stack>
                        </Card>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "23%" } }}>
                        <Card>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: "space-between" }}
                            >
                                <div>
                                    <h5 style={{ margin: "5px" }}>Visitors</h5>
                                    <h2 style={{ margin: "15px 5px" }}>
                                        150.121
                                    </h2>
                                    <RedSpan>-12%</RedSpan>
                                    Since last month
                                </div>
                                <StyledTag>Annual</StyledTag>
                            </Stack>
                        </Card>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "23%" } }}>
                        <Card>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: "space-between" }}
                            >
                                <div>
                                    <h5 style={{ margin: "5px" }}>
                                        Completed Orders
                                    </h5>
                                    <h2 style={{ margin: "15px 5px" }}>
                                        12.432
                                    </h2>
                                    <GreenSpan>+24%</GreenSpan>
                                    Since last month
                                </div>
                                <StyledTag>Weekly</StyledTag>
                            </Stack>
                        </Card>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "23%" } }}>
                        <Card
                            style={{
                                backgroundColor: "#dfe8f7",
                                color: "#607bac",
                            }}
                        >
                            <Stack
                                direction="row"
                                sx={{ justifyContent: "space-between" }}
                            >
                                <div>
                                    <h5 style={{ margin: "5px" }}>
                                        Pending Orders
                                    </h5>
                                    <h2 style={{ margin: "15px 5px" }}>22 </h2>
                                    <RedSpan>-6%</RedSpan>
                                    Since last month
                                </div>
                            </Stack>
                        </Card>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        flexDirection: { xs: "column", sm: "row" },
                        marginTop: "40px",
                    }}
                >
                    <div style={{ backgroundColor: "white", width: "35%" }}>
                        <h4>Real-Time</h4>
                        <Map />
                    </div>
                    <div>
                        <h3>Sales / Revenue</h3>
                        <Barchart width={800} />
                    </div>
                </Stack>
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                        flexDirection: { xs: "column", sm: "row" },
                        marginTop: "40px",
                    }}
                >
                    <div style={{ backgroundColor: "white", width: "35%" }}>
                        <h3>Weekly Sales</h3>
                        <PieChart />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <p>Source</p>
                            <Stack direction="row" spacing={5}>
                                <p>Revenue</p>
                                <p>Value</p>
                            </Stack>
                        </Stack>
                        <Divider sx={{ margin: "10px 0" }} />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <p>Social</p>
                            <Stack direction="row" spacing={5}>
                                <p>260</p>
                                <p style={{ color: "green" }}>+35%</p>
                            </Stack>
                        </Stack>
                        <Divider sx={{ margin: "10px 0" }} />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <p>Search Engines </p>
                            <Stack direction="row" spacing={5}>
                                <p>125</p>
                                <p style={{ color: "red" }}>-12%</p>
                            </Stack>
                        </Stack>
                        <Divider sx={{ margin: "10px 0" }} />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <p>Direct</p>
                            <Stack direction="row" spacing={5}>
                                <p>54</p>
                                <p style={{ color: "green" }}>+46%</p>
                            </Stack>
                        </Stack>
                        <Divider sx={{ margin: "10px 0" }} />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <p>Other</p>
                            <Stack direction="row" spacing={5}>
                                <p>146</p>
                                <p style={{ color: "green" }}>+24%</p>
                            </Stack>
                        </Stack>
                    </div>
                    <div style={{ width: "65%", backgroundColor: "white" }}>
                        <h3>Latest products</h3>
                        <BasicTable />
                    </div>
                </Stack>
            </Box>
        </>
    );
}
