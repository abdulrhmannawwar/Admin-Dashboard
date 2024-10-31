import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { blue } from "@mui/material/colors";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import HomeIcon from "@mui/icons-material/Home";

const StyledP = styled.p`
    margin: 2px;
    color: #000000a5;
`;

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
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
                        <Badge badgeContent={7} color="primary">
                            <NotificationsNoneIcon color="action" />
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
                    7 new notifications
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
                            sx={{ width: 76, height: 76, bgcolor: blue[500] }}
                        >
                            <FilterNoneIcon />
                        </Avatar>
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
                            sx={{ width: 76, height: 76, bgcolor: blue[500] }}
                        >
                            <PersonAddAlt1Icon />
                        </Avatar>
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
                        <Avatar sx={{ bgcolor: blue[500] }}>
                            <NotificationsNoneIcon />
                        </Avatar>
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
                        <Avatar sx={{ bgcolor: blue[500] }}>
                            <HomeIcon />
                        </Avatar>
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
        </>
    );
}
