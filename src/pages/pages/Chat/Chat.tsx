import { useEffect } from "react";
import { Box, Divider, Stack, Avatar, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import Footer from "../../../components/Footer";
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import person4 from "../../../assets/person4.jpg";
import person5 from "../../../assets/person5.jpg";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

const RightChat = styled.div`
    background-color: #4682da;
    padding: 5px;
    border-radius: 5px;
`;
const LeftChat = styled.div`
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 5px;
`;

const RightMessage = styled.div`
    padding: 5px;
    margin: 0px;
    font-size: 12px;
    color: white;
`;
const LeftMessage = styled.div`
    padding: 5px;
    margin: 0px;
    font-size: 12px;
    color: gray;
`;

const Chat: React.FC = () => {
    useEffect(() => {
        document.title = "Chat | Mira";
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
                    <h2 style={{ marginBottom: "2px" }}>Chat</h2>
                    <p style={{ margin: "2px" }}>
                        <Anchor href="https://mira.bootlab.io/">
                            Dashboard
                        </Anchor>
                        /
                        <Anchor href="https://mira.bootlab.io/"> Pages </Anchor>
                        /<span> Chat</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ margin: "20px", bgcolor: "white", p: 1 }}
                >
                    <Stack
                        direction="column"
                        spacing={1}
                        sx={{
                            width: "30%",
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        <TextField
                            id="filled-required"
                            label="Search contacts"
                            variant="outlined"
                            sx={{ width: "100%" }}
                        />
                        <Divider />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                "&:hover": { backgroundColor: "#eaeaea" },
                                cursor: "pointer",
                                p: 1,
                                transition: "0.3s",
                            }}
                        >
                            <Avatar
                                alt="John Doe"
                                src={person1}
                                sx={{ width: 56, height: 56 }}
                            />
                            <div>
                                <p style={{ margin: "2px" }}>John Doe</p>
                                <p style={{ margin: "0px", color: "gray" }}>
                                    Sent a photo
                                </p>
                            </div>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                "&:hover": { backgroundColor: "#eaeaea" },
                                cursor: "pointer",
                                p: 1,
                                transition: "0.3s",
                            }}
                        >
                            <Avatar
                                alt="Abdo"
                                src={person2}
                                sx={{ width: 56, height: 56 }}
                            />
                            <div>
                                <p style={{ margin: "2px" }}>Abdo Nawwar</p>
                                <p style={{ margin: "0px", color: "gray" }}>
                                    Coffee?
                                </p>
                            </div>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                "&:hover": { backgroundColor: "#eaeaea" },
                                cursor: "pointer",
                                p: 1,
                                transition: "0.3s",
                            }}
                        >
                            <Avatar
                                alt="Danial Doe"
                                src={person3}
                                sx={{ width: 56, height: 56 }}
                            />
                            <div>
                                <p style={{ margin: "2px" }}>Danial Doe</p>
                                <p style={{ margin: "0px", color: "gray" }}>
                                    Hello
                                </p>
                            </div>
                        </Stack>
                    </Stack>
                    <Box sx={{ width: "70%" }}>
                        <Box
                            className="forMessages"
                            sx={{
                                height: "400px",
                                overflowY: "scroll",
                            }}
                        >
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{
                                    justifyContent: "start",
                                    margin: "20px 0 ",
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={person4}
                                    sx={{ width: 46, height: 46 }}
                                />
                                <LeftChat>
                                    <p style={{ margin: "2px" }}>Remy Sharp</p>
                                    <LeftMessage>
                                        Sit meis deleniti eu, pri vidit meliore
                                        docendi ut, an eum erat animal commodo.
                                    </LeftMessage>
                                </LeftChat>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{
                                    justifyContent: "end",
                                    margin: "20px 0 ",
                                }}
                            >
                                <Avatar
                                    alt="Me"
                                    src={person5}
                                    sx={{ width: 46, height: 46 }}
                                />
                                <RightChat>
                                    <p
                                        style={{
                                            margin: "2px",
                                            color: "white",
                                        }}
                                    >
                                        Me
                                    </p>
                                    <RightMessage>
                                        Sit meis deleniti eu, pri vidit meliore
                                        docendi ut, an eum erat animal commodo.
                                    </RightMessage>
                                </RightChat>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{
                                    justifyContent: "start",
                                    margin: "20px 0 ",
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={person4}
                                    sx={{ width: 46, height: 46 }}
                                />
                                <LeftChat>
                                    <p style={{ margin: "2px" }}>Remy Sharp</p>
                                    <LeftMessage>
                                        Cum ea graeci tractatos. 😄
                                    </LeftMessage>
                                </LeftChat>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{
                                    justifyContent: "end",
                                    margin: "20px 0 ",
                                }}
                            >
                                <Avatar
                                    alt="Me"
                                    src={person5}
                                    sx={{ width: 46, height: 46 }}
                                />
                                <RightChat>
                                    <p
                                        style={{
                                            margin: "2px",
                                            color: "white",
                                        }}
                                    >
                                        Me
                                    </p>
                                    <RightMessage>
                                        Cras pulvinar, sapien id vehicula
                                        aliquet, diam velit elementum orci. 👍
                                    </RightMessage>
                                </RightChat>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{
                                    justifyContent: "start",
                                    margin: "20px 0 ",
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={person4}
                                    sx={{ width: 46, height: 46 }}
                                />
                                <LeftChat>
                                    <p style={{ margin: "2px" }}>Remy Sharp</p>
                                    <LeftMessage>
                                        Lorem ipsum dolor sit amet, vis erat
                                        denique in, dicunt prodesset te vix.
                                    </LeftMessage>
                                </LeftChat>
                            </Stack>
                        </Box>
                        <Divider />
                        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                            <TextField
                                id="filled-required"
                                label="Type your message"
                                variant="outlined"
                                sx={{ width: "90%" }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "50%",
                                    width: "20px",
                                }}
                            >
                                <SendIcon fontSize="medium" />
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Footer />
        </>
    );
};

export default Chat;
