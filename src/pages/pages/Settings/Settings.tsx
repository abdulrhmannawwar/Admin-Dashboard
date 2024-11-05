import { useEffect } from "react";
import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Anchor = styled.a`
    text-decoration: none;
    color: #4782d2;
    &:hover {
        text-decoration: underline;
    }
`;
const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const Settings: React.FC = () => {
    useEffect(() => {
        document.title = "Settings | Mira";
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
                        /<span> Settings</span>
                    </p>
                </Stack>
                <Divider sx={{ margin: "20px 0" }} />
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        margin: "20px",
                        backgroundColor: "#ffff",
                        flexDirection: { xs: "column", sm: "row" },
                        padding: "20px",
                    }}
                >
                    <Stack direction="column" sx={{ width: "70%" }}>
                        <h3>Public info</h3>
                        <TextField
                            id="filled-required"
                            label="Username"
                            defaultValue="Abdo Nawwar"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Biography"
                            multiline
                            rows={2}
                            defaultValue="Programmer"
                            sx={{ margin: "15px 0" }}
                        />
                        <Button
                            variant="contained"
                            sx={{ marginTop: "15px", width: "fit-content" }}
                        >
                            Save Changes
                        </Button>
                    </Stack>
                    <Stack
                        direction="column"
                        sx={{
                            width: "30%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            alt="Abdo"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            sx={{ width: 100, height: 100 }}
                        />
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event) =>
                                    console.log(event.target.files)
                                }
                                multiple
                            />
                        </Button>
                        <p style={{ fontSize: "10px", textAlign: "center" }}>
                            For best results, use an image at least 128px by
                            128px in .jpg format
                        </p>
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        margin: "20px",
                        backgroundColor: "#ffff",
                        padding: "20px",
                    }}
                >
                    <h3>Private info</h3>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ margin: "10px 0" }}
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            defaultValue="Abdo"
                            sx={{ width: "50%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            defaultValue="Nawwar"
                            sx={{ width: "50%" }}
                        />
                    </Stack>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue="mohnwarp@gmail.com"
                        sx={{ margin: "10px 0" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        sx={{ margin: "10px 0" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Apartment, Studio, or Floor"
                        sx={{ margin: "10px 0" }}
                    />
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ margin: "10px 0" }}
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            sx={{ width: "50%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="State"
                            sx={{ width: "30%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Zip"
                            sx={{ width: "20%" }}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        sx={{ marginTop: "15px", width: "fit-content" }}
                    >
                        Save Changes
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default Settings;
