import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import About from "../pages/About";
import Developerspage from "../pages/Developerspage";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayout from "../layouts/DashboardLayout";
import Tours from "../pages/dashboard/Tours";
import Guides from "../pages/dashboard/Guides";
import Bookings from "../pages/dashboard/Bookings";
import Reviews from "../pages/dashboard/Reviews";
import PrivateRoute from "./PrivateRoute";
import { useNavigate } from "react-router-dom";

export default function AppRoutes() {
return (
    <Routes>
        <Route path="/" element={<BasicLayouts />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/signup"
                element={
                    <SignUp
                        onSignUpSuccess={() => {
                            const navigate = useNavigate();
                            navigate("/dashboard", { replace: true });
                        }}
                    />
                }
            />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developerspage />} />
        </Route>
        <Route
            path="/dashboard"
            element={
                <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>
            }
        >
            <Route path="/dashboard/Tours" element={<Tours />} />
            <Route path="/dashboard/Guides" element={<Guides />} />
            <Route path="/dashboard/Bookings" element={<Bookings />} />
            <Route path="/dashboard/Reviews" element={<Reviews />} />
        </Route>
    </Routes>
);
}
