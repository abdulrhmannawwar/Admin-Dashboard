import { Avatar, Box, Button, Stack } from "@mui/material";
import person1 from "../../../assets/person1.jpg";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import Logo from "../Logo";
import FormControlLabel from "@mui/material/FormControlLabel";
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
                        sx={{ p: 5, alignItems: "center" }}
                    >
                        <Avatar
                            alt="Abdo Nawwar"
                            src={person1}
                            sx={{ width: 86, height: 86 }}
                        />
                        <h1 style={{ fontWeight: "600" }}>
                            Welcome back, Abdo!
                        </h1>
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
            </Stack>
        </div>
    );
}
