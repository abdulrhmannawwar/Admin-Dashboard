import { Box, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import person from "../../../assets/personInNature.jpg";
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

export default function SignUpCover() {
    useEffect(() => {
        document.title = "Sign In | Mira";
    }, []);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "100dvh",
            }}
        >
            <Stack direction="row" spacing={2}>
                <Box
                    sx={{
                        width: "60%",
                        display: { xs: "none", lg: "block" },
                        margin: "10px",
                        height: "95%",
                        position: "relative",
                    }}
                >
                    <img
                        src={person}
                        alt=""
                        width="100%"
                        height="100%"
                        style={{ marginTop: "20px", borderRadius: "30px" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "30px",
                            color: "white",
                        }}
                    >
                        <Logo color="white" />
                    </div>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: {
                            xs: "100%",
                            lg: "40%",
                        },
                    }}
                >
                    <div
                        style={{
                            margin: "10px 0 40px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    ></div>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ bgcolor: "white", p: 5, alignItems: "center" }}
                    >
                        <h1 style={{ fontWeight: "600" }}>Get started</h1>
                        <p>
                            Start creating the best possible user experience for
                            you customers
                        </p>
                        <TextField
                            id="outlined-basic"
                            label="First name"
                            variant="outlined"
                            required
                            fullWidth
                            sx={{ margin: "20px 0" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Last name"
                            variant="outlined"
                            required
                            fullWidth
                            sx={{ margin: "20px 0" }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Email address"
                            variant="outlined"
                            required
                            fullWidth
                            sx={{ margin: "20px 0" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            required
                            fullWidth
                            sx={{ margin: "20px 0" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Confirm password"
                            variant="outlined"
                            type="password"
                            required
                            fullWidth
                            sx={{ margin: "20px 0" }}
                        />
                        <Link
                            to="/Dashboard/Default"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                width: "100%",
                            }}
                        >
                            <Button variant="contained" fullWidth>
                                Sign up
                            </Button>
                        </Link>
                        <div>
                            Already have an account?
                            <StyledLink to="/auth/Sign In"> Log in</StyledLink>
                        </div>
                    </Stack>
                </Box>
            </Stack>
        </div>
    );
}
