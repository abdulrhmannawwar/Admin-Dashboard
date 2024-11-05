import { useEffect } from "react";
import { Box, Divider, Stack, Button } from "@mui/material";
import styled from "styled-components";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    margin: "0 10px";
    &:hover {
        text-decoration: underline;
    }
`;

const StyledP = styled.p`
    margin: 2px;
    font-size: 13px;
`;
const Th = styled.th`
    padding-top: 8px;
    border-bottom: 1px solid #3e3d3d82;
`;
const Td = styled.td`
    padding: 8px;
    border-bottom: 1px solid #3e3d3d82;
`;

const Details: React.FC = () => {
    useEffect(() => {
        document.title = "Invoices Details | Mira";
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
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <Stack direction="column">
                        <h2 style={{ marginBottom: "2px" }}>Invoice #000112</h2>
                        <p style={{ margin: "2px" }}>
                            <Anchor href="https://mira.bootlab.io/">
                                Dashboard
                            </Anchor>
                            /
                            <Anchor href="https://mira.bootlab.io/">
                                Pages
                            </Anchor>
                            /
                            <Anchor href="https://mira.bootlab.io/">
                                Invoices
                            </Anchor>
                            /<span> Details</span>
                        </p>
                    </Stack>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Box
                    sx={{
                        m: "40px 60px",
                        p: 4,
                        bgcolor: "white",
                    }}
                >
                    <Stack direction="column" spacing={2}>
                        <StyledP>
                            Hello Anna Walley,
                            <br /> This is the receipt for a payment of $268.85
                            (USD) you made to Mira.
                        </StyledP>
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <div>
                                <StyledP>
                                    Payment No.
                                    <br />
                                    741037024
                                </StyledP>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <StyledP>
                                    Payment Date
                                    <br /> January 2, 2023 - 03:45 pm
                                </StyledP>
                            </div>
                        </Stack>
                    </Stack>
                    <Divider sx={{ margin: "20px 0" }} />
                    <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between" }}
                    >
                        <div>
                            <StyledP>
                                Client
                                <br /> Anna Walley
                                <br /> 4183 Forest Avenue
                                <br /> New York City
                                <br /> 10011
                                <br /> USA
                                <br />
                                <a
                                    href="mailto:anna@walley.com"
                                    style={{ textDecoration: "none" }}
                                >
                                    anna@walley.com
                                </a>
                            </StyledP>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <StyledP>
                                Payment To
                                <br /> Mira LLC
                                <br /> 354 Roy Alley Denver
                                <br /> 80202
                                <br />
                                USA
                                <br />
                                <a
                                    href="mailto:info@mira.com"
                                    style={{ textDecoration: "none" }}
                                >
                                    info@mira.com
                                </a>
                            </StyledP>
                        </div>
                    </Stack>
                    <Divider sx={{ margin: "20px 0" }} />
                    <table style={{ width: "100%" }}>
                        <thead>
                            <Th style={{ textAlign: "left" }}>
                                <StyledP>Description</StyledP>
                            </Th>
                            <Th>
                                <StyledP>Quantity</StyledP>
                            </Th>
                            <Th style={{ textAlign: "right" }}>
                                <StyledP>Amount</StyledP>
                            </Th>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>
                                    <StyledP>Mira Theme Customization</StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>2</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>$150.00</StyledP>
                                </Td>
                            </tr>
                            <tr>
                                <Td>
                                    <StyledP>Monthly Subscription</StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>3</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>$25.00</StyledP>
                                </Td>
                            </tr>
                            <tr>
                                <Td>
                                    <StyledP>Additional Service</StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>2</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>$100.00</StyledP>
                                </Td>
                            </tr>
                            <tr>
                                <Td>
                                    <StyledP></StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>Subtotal</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>$275.00</StyledP>
                                </Td>
                            </tr>
                            <tr>
                                <Td>
                                    <StyledP></StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>Shipping</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>$8.00</StyledP>
                                </Td>
                            </tr>
                            <tr>
                                <Td>
                                    <StyledP></StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>Discount</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>5%</StyledP>
                                </Td>
                            </tr>
                            <tr>
                                <Td>
                                    <StyledP></StyledP>
                                </Td>
                                <Td style={{ textAlign: "center" }}>
                                    <StyledP>Total</StyledP>
                                </Td>
                                <Td style={{ textAlign: "right" }}>
                                    <StyledP>$268.85</StyledP>
                                </Td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ textAlign: "center" }}>
                        <StyledP>
                            Extra note: Please send all items at the same time
                            to the shipping address. Thanks in advance.
                        </StyledP>
                        <Button variant="contained" sx={{ marginTop: "10px" }}>
                            Print this receipt
                        </Button>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Details;
