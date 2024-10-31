import "./index.css";
import MainContent from "./MainContent";
import { Routes, Route, Navigate } from "react-router-dom";
import Default from "./pages/Dashboard/Default/Default";
import Analytics from "./pages/Dashboard/Analytics/Analytics";
import SaaS from "./pages/Dashboard/SaaS/SaaS";
import Profile from "./pages/pages/Profile/Profile";
import Settings from "./pages/pages/Settings/Settings";
import Pricing from "./pages/pages/Pricing/Pricing";
import BlankPage from "./pages/pages/BlankPage/BlankPage";
import Chat from "./pages/pages/Chat/Chat";
import Projects from "./pages/Projects/Projects";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import List from "./pages/Invoices/List/List";
import Details from "./pages/Invoices/Details/Details";
import Tasks from "./pages/Tasks/Tasks";
import Calendar from "./pages/Calendar/Calendar";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignInCover from "./pages/Auth/SignInCover/SignInCover";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignUpCover from "./pages/Auth/SignUpCover/SignUpCover";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ResetPasswordCover from "./pages/Auth/ResetPasswordCover/ResetPasswordCover";
import Page404 from "./pages/Auth/Page404/Page404";
import Page500 from "./pages/Auth/Page500/Page500";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/Dashboard/Default" />}
                />
                <Route path="/Dashboard">
                    <Route
                        path="Default"
                        element={
                            <MainContent>
                                <Default />
                            </MainContent>
                        }
                    />
                    <Route
                        path="Analytics"
                        element={
                            <MainContent>
                                <Analytics />
                            </MainContent>
                        }
                    />
                    <Route
                        path="SaaS"
                        element={
                            <MainContent>
                                <SaaS />
                            </MainContent>
                        }
                    />
                </Route>
                <Route path="/Pages">
                    <Route
                        path="Profile"
                        element={
                            <MainContent>
                                <Profile />
                            </MainContent>
                        }
                    />
                    <Route
                        path="Settings"
                        element={
                            <MainContent>
                                <Settings />
                            </MainContent>
                        }
                    />
                    <Route
                        path="Pricing"
                        element={
                            <MainContent>
                                <Pricing />
                            </MainContent>
                        }
                    />
                    <Route
                        path="Chat"
                        element={
                            <MainContent>
                                <Chat />
                            </MainContent>
                        }
                    />
                    <Route
                        path="Blank Page"
                        element={
                            <MainContent>
                                <BlankPage />
                            </MainContent>
                        }
                    />
                </Route>
                <Route
                    path="/Projects"
                    element={
                        <MainContent>
                            <Projects />
                        </MainContent>
                    }
                />
                <Route
                    path="/Orders"
                    element={
                        <MainContent>
                            <Orders />
                        </MainContent>
                    }
                />
                <Route
                    path="/Products"
                    element={
                        <MainContent>
                            <Products />
                        </MainContent>
                    }
                />
                <Route path="Invoices">
                    <Route
                        path="List"
                        element={
                            <MainContent>
                                <List />
                            </MainContent>
                        }
                    />
                    <Route
                        path="Details"
                        element={
                            <MainContent>
                                <Details />
                            </MainContent>
                        }
                    />
                </Route>
                <Route
                    path="/Tasks"
                    element={
                        <MainContent>
                            <Tasks />
                        </MainContent>
                    }
                />
                <Route
                    path="/Calendar"
                    element={
                        <MainContent>
                            <Calendar />
                        </MainContent>
                    }
                />
                <Route path="/Auth">
                    <Route path="Sign In" element={<SignIn />} />
                    <Route path="Sign In Cover" element={<SignInCover />} />
                    <Route path="Sign Up" element={<SignUp />} />
                    <Route path="Sign Up Cover" element={<SignUpCover />} />
                    <Route path="Reset Password" element={<ResetPassword />} />
                    <Route
                        path="Reset Password Cover"
                        element={<ResetPasswordCover />}
                    />
                    <Route path="404 Page" element={<Page404 />} />
                    <Route path="500 Page" element={<Page500 />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
