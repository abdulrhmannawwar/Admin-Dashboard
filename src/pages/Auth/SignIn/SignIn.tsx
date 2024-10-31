import { Avatar, Box, Button, Stack } from "@mui/material";
import Logo from "../Logo";
import person1 from "../../../assets/person1.jpg";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

export default function SignIn() {
    useEffect(() => {
        document.title = "Sign In | Mira";
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
                    <Avatar
                        alt="Abdo Nawwar"
                        src={person1}
                        sx={{ width: 86, height: 86 }}
                    />
                    <h1 style={{ fontWeight: "600" }}>Welcome back, Abdo!</h1>
                    <p>Sign in to your account to continue</p>
                    <Alert severity="info">
                        Use
                        <span style={{ fontWeight: "bold" }}>
                            {" "}
                            demo@bootlab.io{" "}
                        </span>
                        and
                        <span style={{ fontWeight: "bold" }}>
                            {" "}
                            unsafepassword{" "}
                        </span>
                        to sign in
                    </Alert>
                    <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        defaultValue="demo@bootlab.io"
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        defaultValue="unsafepassword"
                        fullWidth
                    />
                    <div style={{ width: "100%" }}>
                        <StyledLink to="/Reset Password">
                            Forgot password?
                        </StyledLink>
                    </div>
                    <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="Remember me"
                        sx={{ width: "100%" }}
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
                            Sign in
                        </Button>
                    </Link>
                    <div>
                        Don't have an account yet?
                        <StyledLink to="/auth/Sign Up"> Sign up</StyledLink>
                    </div>
                </Stack>
            </Box>
        </div>
    );
}
