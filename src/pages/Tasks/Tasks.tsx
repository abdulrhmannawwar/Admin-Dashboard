import { useEffect } from "react";
import { Box, Divider, Stack, Avatar, Button } from "@mui/material";
import styled from "styled-components";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AddIcon from "@mui/icons-material/Add";
const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

const StyledP = styled.p`
    margin: 1px;
    font-size: 13px;
`;
const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid #3e3d3d5f;
    width: 90%;
    padding: 20px 20px 30px 20px;
    margin: 10px auto;
    position: relative;
`;
const Bar = styled.div`
    height: 10px;
    width: 50px;
    border-radius: 5px;
`;
const Tasks: React.FC = () => {
    useEffect(() => {
        document.title = "Tasks | Mira";
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
                    <h2 style={{ marginBottom: "2px" }}>Tasks</h2>
                    <p style={{ margin: "2px" }}>
                        <Anchor href="https://mira.bootlab.io/">
                            Dashboard
                        </Anchor>
                        /
                        <Anchor href="https://mira.bootlab.io/"> Pages </Anchor>
                        /<span> Tasks</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        flexDirection: { xs: "column", sm: "row" },
                        width: "100%",
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{
                            width: "30%",
                            bgcolor: "#ffff",
                            padding: "20px",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <StyledP style={{ fontSize: "18px" }}>
                                Backlog
                            </StyledP>
                            <StyledP>
                                Nam pretium turpis et arcu. Duis arcu.
                            </StyledP>
                        </div>
                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#41a045" }} />

                                <Bar style={{ backgroundColor: "#fd8b00" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Redesign the whole homepage
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person2}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                                <Avatar
                                    alt="+2"
                                    src=""
                                    sx={{ width: 44, height: 44 }}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ position: "absolute", right: "10px" }}
                            >
                                <StyledP>2</StyledP>
                                <ChatBubbleIcon />
                            </Stack>
                        </Card>
                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#41a045" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Upgrade dependencies to latest versions
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ position: "absolute", right: "10px" }}
                            >
                                <StyledP>1</StyledP>
                                <ChatBubbleIcon />
                            </Stack>
                        </Card>
                        <Card>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Google Adowrds best practices
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person2}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                            </Stack>
                        </Card>
                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#41a045" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Improve site speed
                            </StyledP>
                            <Stack
                                direction="row"
                                sx={{ position: "absolute", right: "10px" }}
                            >
                                <StyledP>1</StyledP>
                                <ChatBubbleIcon />
                            </Stack>
                        </Card>
                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#2088e1" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Stripe payment integration
                            </StyledP>
                        </Card>
                        <Button variant="contained" sx={{ width: "100%" }}>
                            <AddIcon />
                            Add new task
                        </Button>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{
                            width: "30%",
                            bgcolor: "#ffff",
                            padding: "20px",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <StyledP style={{ fontSize: "18px" }}>
                                In Progress
                            </StyledP>
                            <StyledP>
                                Curabitur ligula sapien, tincidunt non.
                            </StyledP>
                        </div>
                        <Card>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Google Adowrds best practices
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person2}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                            </Stack>
                        </Card>
                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#2088e1" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Stripe payment integration
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                            </Stack>
                        </Card>
                        <Button variant="contained" sx={{ width: "100%" }}>
                            <AddIcon />
                            Add new task
                        </Button>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{
                            width: "30%",
                            bgcolor: "#ffff",
                            padding: "20px",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <StyledP style={{ fontSize: "18px" }}>
                                Completed
                            </StyledP>
                            <StyledP>
                                Aenean posuere, tortor sed cursus feugiat.{" "}
                            </StyledP>
                        </div>
                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#41a045" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Improve site speed
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person2}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ position: "absolute", right: "10px" }}
                            >
                                <StyledP>3</StyledP>
                                <ChatBubbleIcon />
                            </Stack>
                        </Card>
                        <Card>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Google Adowrds best practices
                            </StyledP>
                            <Stack direction="row" sx={{ marginTop: "10px" }}>
                                <Avatar
                                    alt="Abdo Nawwar"
                                    src={person1}
                                    sx={{ width: 44, height: 44, mr: "-10px" }}
                                />
                            </Stack>
                        </Card>

                        <Card>
                            <Stack direction="row" spacing={1}>
                                <Bar style={{ backgroundColor: "#41a045" }} />
                                <Bar style={{ backgroundColor: "#fd8b00" }} />
                            </Stack>
                            <StyledP
                                style={{ marginTop: "5px", fontSize: "16px" }}
                            >
                                Redesign the homepage
                            </StyledP>
                            <Stack
                                direction="row"
                                sx={{ position: "absolute", right: "10px" }}
                            >
                                <StyledP>2</StyledP>
                                <ChatBubbleIcon />
                            </Stack>
                        </Card>
                        <Button variant="contained" sx={{ width: "100%" }}>
                            <AddIcon />
                            Add new task
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default Tasks;
