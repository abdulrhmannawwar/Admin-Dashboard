import {  Box, Button, Stack } from "@mui/material";
import Logo from "../Logo";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

export default function SignIn() {
    useEffect(() => {
        document.title = "Sign up | Mira";
    }, []);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "100dvh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Box
                sx={{
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        margin: "10px 0 40px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Logo color="#3c87d3" />
                </div>
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{ bgcolor: "white", p: 5, alignItems: "center" }}
                >
                    <h1 style={{ fontWeight: "600" }}>Get started</h1>
                    <p>
                        Start creating the best possible user experience for you
                        customers
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
        </div>
    );
}
