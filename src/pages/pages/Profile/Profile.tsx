import { useEffect } from "react";
import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Chart from "./chart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BasicTable from "./Table";
import person1 from "../../../assets/person1.jpg";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

const StyledP = styled.p`
    margin: 1px;
`;

const Skill = styled.div`
    background-color: #ebebeb;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 7px;
    margin: 2px;
    font-size: 14px;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    width: 240px;
    height: 140px;
`;

const Bar = styled.div`
    width: 100%;
    background-color: #9bb7de;
    height: 5px;
    border-radius: 5px;
`;

const Profile: React.FC = () => {
    useEffect(() => {
        document.title = "Profile | Mira";
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
                    <h2 style={{ marginBottom: "2px" }}>Profile</h2>
                    <p style={{ margin: "2px" }}>
                        <Anchor href="https://mira.bootlab.io/">
                            Dashboard
                        </Anchor>
                        /
                        <Anchor href="https://mira.bootlab.io/"> Pages </Anchor>
                        /<span> Profile</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Stack direction="row" spacing={2} sx={{ margin: "20px" }}>
                    <Stack direction="column" spacing={2}>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                padding: "10px 20px",
                                marginBottom: "20px",
                            }}
                        >
                            <h3>Profile Details</h3>
                            <Stack
                                direction="column"
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        margin: "0 auto",
                                    }}
                                />
                                <StyledP>Abdo Nawwar</StyledP>
                                <StyledP>Web Developer</StyledP>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained">Follow</Button>
                                    <Button variant="contained">Message</Button>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                padding: "10px 20px",
                                marginBottom: "20px",
                            }}
                        >
                            <h3>Skills</h3>
                            <Stack direction="row">
                                <Skill
                                    style={{
                                        backgroundColor: "#4782d2",
                                        color: "white",
                                    }}
                                >
                                    HTML
                                </Skill>
                                <Skill>JavaScript</Skill>
                                <Skill>Sass</Skill>
                                <Skill>React</Skill>
                            </Stack>
                            <Stack direction="row">
                                <Skill>Redux</Skill>
                                <Skill>Next.js</Skill>
                                <Skill>Material UI</Skill>
                                <Skill>UI</Skill>
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ width: "100%", justifyContent: "center" }}
                            >
                                <Skill>UX</Skill>
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                padding: "10px 20px",
                                marginBottom: "20px",
                            }}
                        >
                            <h3>About</h3>
                            <Stack direction="row" spacing={1}>
                                <HomeIcon fontSize="small" />
                                <span>Lives in </span>
                                <span>
                                    <Anchor href="https://mira.bootlab.io/">
                                        San Francisco,
                                    </Anchor>
                                    <Anchor href="https://mira.bootlab.io/">
                                        SA
                                    </Anchor>
                                </span>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ marginTop: "10px" }}
                            >
                                <WorkIcon fontSize="small" />
                                <span>works at</span>
                                <span>
                                    <Anchor href="https://mira.bootlab.io/">
                                        Material UI
                                    </Anchor>
                                </span>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ marginTop: "10px" }}
                            >
                                <LocationOnIcon fontSize="small" />
                                <span>Lives In</span>
                                <span>
                                    <Anchor href="https://mira.bootlab.io/">
                                        Boston
                                    </Anchor>
                                </span>
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                padding: "10px 20px",
                                marginBottom: "20px",
                            }}
                        >
                            <h3>Elsewhere</h3>
                            <Stack direction="row" spacing={1}>
                                <OpenInNewIcon fontSize="small" />
                                <Anchor href="https://mira.bootlab.io/">
                                    lucylavender.io
                                </Anchor>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <FacebookIcon fontSize="small" />
                                <Anchor href="https://mira.bootlab.io/">
                                    Facebook
                                </Anchor>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <InstagramIcon fontSize="small" />
                                <Anchor href="https://mira.bootlab.io/">
                                    Instagram
                                </Anchor>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <div
                            style={{
                                backgroundColor: "#fff",
                                padding: "10px 20px",
                            }}
                        >
                            <h3> Sales / Revenue </h3>
                            <Chart />
                        </div>

                        <Stack direction="row" spacing={2}>
                            <Card>
                                <Stack
                                    sx={{ justifyContent: "space-between" }}
                                    direction="row"
                                >
                                    <div>
                                        <h1 style={{ margin: "2px" }}>
                                            $ 2.405
                                        </h1>
                                        <StyledP>Total Earnings</StyledP>
                                    </div>
                                    <AttachMoneyIcon
                                        sx={{
                                            fontSize: "50px",
                                            color: "#4782d2",
                                        }}
                                    />
                                </Stack>
                                <Stack sx={{ mt: 2 }}>
                                    <Bar>
                                        <div
                                            style={{
                                                width: "70%",
                                                backgroundColor: "#4782d2",
                                                height: "100%",
                                            }}
                                        ></div>
                                    </Bar>
                                </Stack>
                            </Card>
                            <Card>
                                <Stack
                                    sx={{ justifyContent: "space-between" }}
                                    direction="row"
                                >
                                    <div>
                                        <h1 style={{ margin: "2px" }}>30</h1>
                                        <StyledP>Orders Today</StyledP>
                                    </div>
                                    <LocalMallIcon
                                        sx={{
                                            fontSize: "50px",
                                            color: "#4782d2",
                                        }}
                                    />
                                </Stack>
                                <Stack sx={{ mt: 2 }}>
                                    <Bar>
                                        <div
                                            style={{
                                                width: "30%",
                                                backgroundColor: "#4782d2",
                                                height: "100%",
                                            }}
                                        ></div>
                                    </Bar>
                                </Stack>
                            </Card>
                            <Card>
                                <Stack
                                    sx={{ justifyContent: "space-between" }}
                                    direction="row"
                                >
                                    <div>
                                        <h1 style={{ margin: "2px" }}>
                                            $ 1.224
                                        </h1>
                                        <StyledP>Total Revenue</StyledP>
                                    </div>
                                    <AttachMoneyIcon
                                        sx={{
                                            fontSize: "50px",
                                            color: "#4782d2",
                                        }}
                                    />
                                </Stack>
                                <Stack sx={{ mt: 2 }}>
                                    <Bar>
                                        <div
                                            style={{
                                                width: "50%",
                                                backgroundColor: "#4782d2",
                                                height: "100%",
                                            }}
                                        ></div>
                                    </Bar>
                                </Stack>
                            </Card>
                        </Stack>
                        <BasicTable />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default Profile;
