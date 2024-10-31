import { Stack } from "@mui/material";
import styled from "styled-components";

const FooterElement = styled.div`
    padding: 10px;
    cursor: pointer;
    color: #9f9d9db8;
    &:hover {
        background-color: #e8e8e8c8;
    }
`;
export default function Footer() {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: "space-between",
                marginTop: "40px",
                maxWidth: "100%",
                display: {sm: "none", md: "flex"},
            }}
        >
            <Stack direction="row" spacing={1}>
                <FooterElement>Support</FooterElement>
                <FooterElement>Help Center</FooterElement>
                <FooterElement>Privacy</FooterElement>
                <FooterElement>Terms of service</FooterElement>
            </Stack>
            <FooterElement>@2024 - Mira</FooterElement>
        </Stack>
    );
}
