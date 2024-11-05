import { useEffect } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import NotesIcon from "@mui/icons-material/Notes";
import Barchart from "./../Default/Barchart";
import Map from "./Map";
import PieChart from "./PieChart";
import LanguageStats from "./Progress";
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

export default function Analytics() {
    useEffect(() => {
        document.title = "Analytics Dashboard | Mira";
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
                        <h2 style={{ marginBottom: "2px" }}>
                            Analytics Dashboard
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
                    sx={{ flexDirection: { xs: "column", sm: "row" } }}
                >
                    <Stack
                        direction="column"
                        sx={{
                            width: { xs: "100%", sm: "40%", flexWrap: "wrap" },
                        }}
                    >
                        <Stack direction="row">
                            <Card
                                style={{
                                    width: "45%",
                                    backgroundColor: "#dfe8f7",
                                    color: "#7aa1ef",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <div>
                                        <h5 style={{ margin: "5px" }}>
                                            Visitors
                                        </h5>
                                        <h2 style={{ margin: "15px 5px" }}>
                                            24.532
                                        </h2>
                                        <GreenSpan>+14%</GreenSpan>
                                        <span style={{ fontSize: "12px" }}>
                                            Since last week
                                        </span>
                                    </div>
                                </Stack>
                            </Card>
                            <Card
                                style={{
                                    width: "45%",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <div>
                                        <h5 style={{ margin: "5px" }}>
                                            Activity
                                        </h5>
                                        <h2 style={{ margin: "15px 5px" }}>
                                            63.200
                                        </h2>
                                        <RedSpan>-12%</RedSpan>
                                        <span style={{ fontSize: "12px" }}>
                                            Since last week
                                        </span>
                                    </div>
                                    <StyledTag>Annual</StyledTag>
                                </Stack>
                            </Card>
                        </Stack>
                        <Stack direction="row">
                            <Card
                                style={{
                                    width: "45%",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <div>
                                        <h5 style={{ margin: "5px" }}>
                                            Real-Time
                                        </h5>
                                        <h2 style={{ margin: "15px 5px" }}>
                                            1.320
                                        </h2>
                                        <RedSpan>-18%</RedSpan>
                                        <span style={{ fontSize: "11px" }}>
                                            Since last week
                                        </span>
                                    </div>
                                    <StyledTag>Monthly</StyledTag>
                                </Stack>
                            </Card>
                            <Card
                                style={{
                                    width: "45%",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <div>
                                        <h5 style={{ margin: "5px" }}>
                                            Bounce
                                        </h5>
                                        <h2 style={{ margin: "15px 5px" }}>
                                            12.364
                                        </h2>
                                        <GreenSpan>+27%</GreenSpan>
                                        <span style={{ fontSize: "12px" }}>
                                            Since last week
                                        </span>
                                    </div>
                                    <StyledTag>Yearly</StyledTag>
                                </Stack>
                            </Card>
                        </Stack>
                    </Stack>
                    <div>
                        <h3 style={{ margin: "10px" }}>Mobile / Desktop</h3>
                        <Barchart width={800} />
                    </div>
                </Stack>
                <Stack
                    direction="row"
                    sx={{ flexDirection: { xs: "column", sm: "row" } }}
                >
                    <Map />
                    <div
                        style={{
                            width: "30%",
                            marginLeft: "20px",
                            backgroundColor: "white",
                            padding: "10px",
                        }}
                    >
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
                    </div>
                </Stack>
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                            marginTop: "20px",
                            justifyContent: "space-between",
                        },
                    }}
                >
                    <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                        <LanguageStats />
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "65%" } }}>
                        <BasicTable />
                    </Box>
                </Stack>
            </Box>
        </>
    );
}
