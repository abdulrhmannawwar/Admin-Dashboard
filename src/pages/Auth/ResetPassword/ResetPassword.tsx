import { Box, Button } from "@mui/material";
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

export default function ResetPassword() {
    useEffect(() => {
        document.title = "Reset Password | Mira";
    });
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100dvh",
                bgcolor: "#f5f5f5",
            }}
        >
            <div>
                <Logo color="#4782d2" />
            </div>
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
                        <StyledLink to="/auth/Sign Up">Sign Up</StyledLink>
                    </p>
                </div>
            </Box>
        </Box>
    );
}
