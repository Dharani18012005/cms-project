import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
// import About from "../pages/About";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayout from "../layouts/DashboardLayout";
import Intro from "../pages/dashboard/Intro";
import About from "../pages/dashboard/About";
import Developerspage from "../pages/dashboard/Developerspage";
import Tours from "../pages/dashboard/Tours";
import Guides from "../pages/dashboard/Guides";
import Bookings from "../pages/dashboard/Bookings";
import Reviews from "../pages/dashboard/Reviews";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/" element={<BasicLayouts />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="signin" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route
                    path="signup"
                    element={
                        <SignUp
                            onSignUpSuccess={() => {
                                navigate("/dashboard", { replace: true });
                            }}
                        />
                    }
                />
                <Route path="about" element={<About />} />
                <Route path="developers" element={<Developerspage />} />
            </Route>
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>
                }
            >
                <Route path="intro" element={<Intro />} />
                <Route path="about" element={<About/>}/>
                <Route path="developer" element={<Developerspage />} />
                <Route path="Tours" element={<Tours />} />
                <Route path="Guides" element={<Guides />} />
                <Route path="Bookings" element={<Bookings />} />
                <Route path="Reviews" element={<Reviews />} />
            </Route>
        </Routes>
    );
}
