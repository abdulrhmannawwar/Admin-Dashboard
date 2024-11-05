import { useEffect } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

const Card = styled.div`
    background-color: white;
    padding: 20px;
    width: 250px;
    margin: 10px;
    position: relative;
    text-align: center;
`;
const StyledP = styled.p`
    margin: 2px;
`;

const Pricing: React.FC = () => {
    useEffect(() => {
        document.title = "Pricing | Mira";
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
                        /<span> Pricing</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ marginBottom: "0px" }}>
                        We have a plan for everyone
                    </h2>
                    <h3 style={{ marginTop: "5px", fontWeight: "normal" }}>
                        Whether you're a business or an individual, 14-day trial
                        no credit card required.
                    </h3>
                </div>
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{ justifyContent: "center" }}
                >
                    <Card>
                        <p>Free</p>
                        <p>
                            <span
                                style={{ fontSize: "30px", fontWeight: "bold" }}
                            >
                                $0
                            </span>
                            /mo
                        </p>
                        <StyledP>10 users included</StyledP>
                        <StyledP>2 GB of storage</StyledP>
                        <StyledP>Help center access</StyledP>
                        <StyledP>Email support</StyledP>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{
                                marginTop: "20px",
                                fontSize: "12px",
                                width: "100%",
                            }}
                        >
                            Sign up for free
                        </Button>
                    </Card>
                    <Card>
                        <StarBorderIcon
                            sx={{
                                position: "absolute",
                                top: "20px",
                                right: "20px",
                            }}
                        />
                        <StyledP>Free</StyledP>
                        <p style={{ margin: "0", fontSize: "12px" }}>
                            Most popular
                        </p>
                        <p>
                            <span
                                style={{ fontSize: "30px", fontWeight: "bold" }}
                            >
                                $15
                            </span>
                            /mo
                        </p>
                        <StyledP>20 users included</StyledP>
                        <StyledP>10 GB of storage</StyledP>
                        <StyledP>Help center access</StyledP>
                        <StyledP>Priority email support</StyledP>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                marginTop: "20px",
                                fontSize: "12px",
                                width: "100%",
                            }}
                        >
                            Get started
                        </Button>
                    </Card>
                    <Card>
                        <p>Enterprise</p>
                        <p>
                            <span
                                style={{ fontSize: "30px", fontWeight: "bold" }}
                            >
                                $30
                            </span>
                            /mo
                        </p>
                        <StyledP>50 users included</StyledP>
                        <StyledP>30 GB of storage</StyledP>
                        <StyledP>Help center access</StyledP>
                        <StyledP>Phone & email support</StyledP>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{
                                marginTop: "20px",
                                fontSize: "12px",
                                width: "100%",
                            }}
                        >
                            Contact us
                        </Button>
                    </Card>
                </Stack>
            </Box>
        </>
    );
};

export default Pricing;
