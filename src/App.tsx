import "./index.css";
import MainContent from "./MainContent";
import {
    Routes,
    Route,
    BrowserRouter as Router,
    Navigate,
} from "react-router-dom";
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
            <Router>
                <Routes>
                    <Route path="/" element={<MainContent />}>
                        <Route
                            index
                            element={<Navigate to="/Dashboard/Default" />}
                        />
                        <Route path="Dashboard/Default" element={<Default />} />
                        <Route
                            path="Dashboard/Analytics"
                            element={<Analytics />}
                        />
                        <Route path="Dashboard/SaaS" element={<SaaS />} />
                        <Route path="Pages/Profile" element={<Profile />} />
                        <Route path="Pages/Settings" element={<Settings />} />
                        <Route path="Pages/Pricing" element={<Pricing />} />
                        <Route path="Pages/Chat" element={<Chat />} />
                        <Route
                            path="Pages/Blank Page"
                            element={<BlankPage />}
                        />
                        <Route path="/Projects" element={<Projects />} />
                        <Route path="/Orders" element={<Orders />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/Invoices/List" element={<List />} />
                        <Route path="/Invoices/Details" element={<Details />} />
                        <Route path="/Tasks" element={<Tasks />} />`
                        <Route path="/Calendar" element={<Calendar />} />
                    </Route>
                    <Route path="/Auth/Sign In" element={<SignIn />} />
                    <Route path="/Auth/Sign In Cover" element={<SignInCover />} />
                    <Route path="/Auth/Sign Up" element={<SignUp />} />
                    <Route path="/Auth/Sign Up Cover" element={<SignUpCover />} />
                    <Route path="/Auth/Reset Password" element={<ResetPassword />} />
                    <Route
                        path="/Auth/Reset Password Cover"
                        element={<ResetPasswordCover />}
                    />
                    <Route path="/Auth/404 Page" element={<Page404 />} />
                    <Route path="/Auth/500 Page" element={<Page500 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
