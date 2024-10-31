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

export default function SignInCover() {
    useEffect(() => {
        document.title = "Reset Password | Mira";
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
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100dvh",
                        width: {
                            xs: "100%",
                            lg: "40%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: "20px",
                            marginTop: "70px",
                            width: {
                                xs: "90%",
                                sm: "400px",
                            },
                            textAlign: "center",
                        }}
                    >
                        <h1>Reset Password</h1>
                        <p>Enter your email to reset your password</p>
                        <TextField
                            label="Email address"
                            required
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            fullWidth
                        >
                            Reset Password
                        </Button>
                        <div>
                            <p>
                                Don't have an account?{" "}
                                <StyledLink to="/auth/Sign Up">
                                    Sign Up
                                </StyledLink>
                            </p>
                        </div>
                    </Box>
                </Box>
            </Stack>
        </div>
    );
}
