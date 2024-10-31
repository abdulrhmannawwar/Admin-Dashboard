import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Badge from "@mui/material/Badge";
import styled from "styled-components";

const StyledP = styled.p`
    margin: 2px;
    color: #000000a5;
`;

const AccountMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <Badge badgeContent={3} color="primary">
                            <ChatBubbleOutlineIcon color="action" />
                        </Badge>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <StyledP style={{ textAlign: "center", color: "black" }}>
                    3 New messages
                </StyledP>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ px: 5 }}
                    >
                        <Avatar
                            alt="Abdo Nawwar"
                            src="person.jpg"
                            sx={{ width: 76, height: 76 }}
                        />
                        <div>
                            <StyledP style={{ color: "black" }}>
                                John Doe
                            </StyledP>
                            <StyledP>Lorem ipsum dolor sit</StyledP>
                        </div>
                    </Stack>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ px: 5 }}
                    >
                        <Avatar
                            alt="Abdo Nawwar"
                            src="person.jpg"
                            sx={{ width: 76, height: 76 }}
                        />
                        <div>
                            <StyledP style={{ color: "black" }}>
                                John Doe
                            </StyledP>
                            <StyledP>Lorem ipsum dolor sit</StyledP>
                        </div>
                    </Stack>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ px: 5 }}
                    >
                        <Avatar
                            alt="Abdo Nawwar"
                            src="person.jpg"
                            sx={{ width: 76, height: 76 }}
                        />
                        <div>
                            <StyledP style={{ color: "black" }}>
                                John Doe
                            </StyledP>
                            <StyledP>Lorem ipsum dolor sit</StyledP>
                        </div>
                    </Stack>
                </MenuItem>
                <Divider />
                <StyledP
                    style={{
                        textAlign: "center",
                        color: "blue",
                        width: "100%",
                    }}
                >
                    View All
                </StyledP>
            </Menu>
        </React.Fragment>
    );
};

export default AccountMenu;
