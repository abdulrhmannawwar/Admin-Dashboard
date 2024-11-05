import { useEffect } from "react";
import { Box, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import ImgMediaCard from "./Card";
import laptop1 from "../../assets/laptop.jpg";
import laptop2 from "../../assets/laptop2.jpg";
import laptop3 from "../../assets/laptop3.jpg";
import playing from "../../assets/playing.jpg";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;

const Projects: React.FC = () => {
    useEffect(() => {
        document.title = "Projects | Mira";
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
                    <h2 style={{ marginBottom: "2px" }}>Projects</h2>
                    <p style={{ margin: "2px" }}>
                        <Anchor href="https://mira.bootlab.io/">
                            Dashboard
                        </Anchor>
                        /
                        <Anchor href="https://mira.bootlab.io/"> Pages </Anchor>
                        /<span> Projects</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Box>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            margin: "20px",
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <ImgMediaCard
                            title="Landing page redesign"
                            heading="Finished"
                        />
                        <ImgMediaCard
                            title="Company posters"
                            heading="In progress"
                        />
                        <ImgMediaCard
                            title="Product page design"
                            heading="Finished"
                        />
                        <ImgMediaCard
                            title="Upgrade CRM software"
                            heading="In progress"
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            margin: "20px",
                            flexDirection: { xs: "column", sm: "row" },
                            mt: "20px",
                        }}
                    >
                        <ImgMediaCard
                            src={laptop1}
                            title="Fix form validation"
                            heading="In progress"
                        />
                        <ImgMediaCard
                            src={laptop2}
                            title="New company logo"
                            heading="On hold"
                        />
                        <ImgMediaCard
                            src={laptop3}
                            title="Upgrade to latest Maps API"
                            heading="Finished"
                        />
                        <ImgMediaCard
                            src={playing}
                            title="Refactor backend templates"
                            heading="On hold"
                        />
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Projects;
