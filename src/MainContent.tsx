import React, { useState } from "react";
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./components/logo";
import styled from "styled-components";
import NestedElement from "./components/NestedElement";
import TuneIcon from "@mui/icons-material/Tune";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import WorkIcon from "@mui/icons-material/Work";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GridOnIcon from "@mui/icons-material/GridOn";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SingleElement from "./components/SingleElement";
import User from "./components/user";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Chat from "./components/Chat";
import Notification from "./components/Notifications";
import Langs from "./components/Langs";
import Profile from "./components/Profile";
import PeopleIcon from "@mui/icons-material/People";
import { Outlet } from "react-router-dom";

const drawerWidth: number = 280;

interface Props {
    window?: () => Window;
    children: React.ReactNode;
}

const StyledDrawer = styled.div`
    background-color: #233043;
    height: 100vh;
    position: sticky;
    top: 0;
    color: white;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Text = styled.p`
    color: #ffffff7b;
    margin: 10px 0px 10px 20px;
    font-size: 12px;
`;

const SearchField = styled.input`
    margin: 10px;
    height: 30px;
    width: 90%;
    padding: 10px;
    outline: none;
    padding: 5px;
    border: none;
    &:focus {
        outline: none;
        border: none;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        background-color: #dbd8d8d5;
    }
    &:hover > ${SearchField} {
        background-color: #dbd8d8d5;
    }
`;

const drawer = (
    <StyledDrawer>
        <Logo />
        <Text>PAGES</Text>
        <NestedElement
            icon={<TuneIcon />}
            list={["Default", "Analytics", "SaaS"]}
        >
            Dashboard
        </NestedElement>

        <NestedElement
            icon={<ViewComfyIcon />}
            list={["Profile", "Settings", "Pricing", "Chat", "Blank Page"]}
        >
            Pages
        </NestedElement>
        <SingleElement icon={<WorkIcon />} path={"/Projects"} number={"8"}>
            Projects
        </SingleElement>
        <SingleElement icon={<ShoppingCartIcon />} path={"/Orders"} number={""}>
            Orders
        </SingleElement>
        <SingleElement icon={<InventoryIcon />} path={"/Products"} number={""}>
            Products
        </SingleElement>
        <NestedElement icon={<CreditCardIcon />} list={["List", "Details"]}>
            Invoices
        </NestedElement>
        <SingleElement
            icon={<AssignmentTurnedInIcon />}
            path={"/Tasks"}
            number={"17"}
        >
            Tasks
        </SingleElement>
        <SingleElement
            icon={<CalendarTodayIcon />}
            path={"/Calendar"}
            number={""}
        >
            Calendar
        </SingleElement>
        <NestedElement
            icon={<PeopleIcon />}
            list={[
                "Sign In",
                "Sign In Cover",
                "Sign Up",
                "Sign Up Cover",
                "Reset Password",
                "Reset Password Cover",
                "404 Page",
                "500 Page",
            ]}
        >
            Auth
        </NestedElement>
        <Text>ELEMENTS</Text>
        <NestedElement
            icon={<GridOnIcon />}
            list={[
                "Alerts",
                "Accordion",
                "Avatars",
                "Badges",
                "Buttons",
                "Cards",
                "Chips",
                "Dialogs",
                "Lists",
                "Menus",
                "Pagination",
                "Progress",
                "Snackbars",
                "Tooltips",
            ]}
        >
            Components
        </NestedElement>
        <NestedElement
            icon={<DataUsageIcon />}
            list={["Chart.js", "ApexCharts"]}
        >
            Charts
        </NestedElement>
        <NestedElement
            icon={<CheckBoxIcon />}
            list={[
                "Pickers",
                "Selection Controls",
                "Selects",
                "Text Fields",
                "Editors",
                "Formik",
            ]}
        >
            Forms
        </NestedElement>
        <NestedElement
            icon={<FormatListBulletedIcon />}
            list={["Simple Table", "Advanced Table", "Data Grid"]}
        >
            Tables
        </NestedElement>
        <NestedElement
            icon={<FavoriteBorderIcon />}
            list={["Material Icons", "Lucid Icons"]}
        >
            Icons
        </NestedElement>
        <NestedElement icon={<MapIcon />} list={["Google Maps", "Vector Maps"]}>
            Maps
        </NestedElement>
        <Text>MERA PRO</Text>
        <SingleElement
            icon={<ImportContactsIcon />}
            path={"/Documentaion"}
            number={""}
        >
            Documentaion
        </SingleElement>
        <SingleElement
            icon={<FormatListBulletedIcon />}
            path={"/Changelog"}
            number={"v5.0.1"}
        >
            Changelog
        </SingleElement>
        <User />
    </StyledDrawer>
);

export default function MainContent(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ backgroundColor: "#ffffff" }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { sm: "none" },
                            color: "#00000043",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <SearchContainer>
                                <SearchIcon
                                    style={{
                                        color: "#00000043",
                                        fontSize: "30px",
                                    }}
                                />
                                <SearchField
                                    type="text"
                                    placeholder="Search topics..."
                                />
                            </SearchContainer>
                        </Box>
                        <div>
                            <Stack spacing={1} direction="row">
                                <Chat />
                                <Notification />
                                <Langs />
                                <Profile />
                            </Stack>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <div style={{ backgroundColor: "#f8f9fd" }}>
                    {props.children}
                </div>
            </Box>
            <Outlet />
        </Box>
    );
}
