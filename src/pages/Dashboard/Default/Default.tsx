import React from "react";
import { useEffect } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import NotesIcon from "@mui/icons-material/Notes";
import RevenueChart from "./LineChart";
import PieChart from "./PieChart";
import Barchart from "./Barchart";
import BasicTable from "./Table";
import Footer from "../../../components/Footer";

const StyledP = styled.p`
    margin: 2px;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: 170px;
    width: 100%;
`;

const StyledTag = styled.div`
    background-color: #4284d8;
    padding: 5px 10px;
    font-size: 10px;
    color: white;
    height: fit-content;
    border-radius: 5px;
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

const Default: React.FC = () => {
    useEffect(() => {
        document.title = "Default Dashboard | Mira";
    }, []);

    return (
        <div
            style={{
                width: "75vw",
                margin: "0 20px",
            }}
        >
            <Box
                sx={{
                    padding: "10px",
                    maxWidth: "100%",
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
                        <h2 style={{ marginBottom: "2px" }}>
                            Default Dashboard
                        </h2>
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
                                    <h5 style={{ margin: "5px" }}>
                                        Sales Today
                                    </h5>
                                    <h2 style={{ margin: "15px 5px" }}>
                                        2.532
                                    </h2>
                                    <GreenSpan>+26%</GreenSpan>
                                    Since last month
                                </div>
                                <StyledTag>Today</StyledTag>
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
                                        170.212
                                    </h2>
                                    <RedSpan>-14%</RedSpan>
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
                                        Total Earnings
                                    </h5>
                                    <h2 style={{ margin: "15px 5px" }}>
                                        $ 24.300
                                    </h2>
                                    <GreenSpan>+18%</GreenSpan>
                                    Since last month
                                </div>
                                <StyledTag>Monthly</StyledTag>
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
                                    <h2 style={{ margin: "15px 5px" }}>45 </h2>
                                    <RedSpan>-9%</RedSpan>
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
                        margin: "20px 0",
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <div
                        style={{
                            width: "60%",
                            backgroundColor: "#ffffff",
                            height: "fit-content",
                        }}
                    >
                        <h3 style={{ margin: "10px", maxWidth: "100%" }}>
                            Total Revenue
                        </h3>
                        <RevenueChart />
                    </div>
                    <div
                        style={{
                            backgroundColor: "#ffffff",
                            marginLeft: "40px",
                            padding: "10px",
                            height: "fit-content",
                        }}
                    >
                        <h3 style={{ margin: "10px" }}>Weekly Sales</h3>
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
                        <Divider sx={{ margin: "10px 0" }} />
                    </div>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        margin: "20px 0 60px",
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#ffffff",
                            padding: "10px",
                            height: "fit-content",
                        }}
                    >
                        <h3 style={{ margin: "10px" }}>Mobile / Desktop</h3>
                        <Barchart width={500} />
                    </div>
                    <div>
                        <BasicTable />
                    </div>
                </Stack>
                <Footer />
            </Box>
        </div>
    );
};

export default Default;
