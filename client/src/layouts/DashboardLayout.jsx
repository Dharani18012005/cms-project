import React, { useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

function DashboardLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();             
        navigate('/login');   
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 flex">
            <nav className="flex flex-col space-y-4 w-64 bg-purple-100/80 shadow-lg py-10 px-4">
                <h1 className="text-2xl font-bold mb-8 text-black text-center">DASHBOARD</h1>

                <Link to="/dashboard/about" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">
                    About
                </Link>
                <Link to ="/dashboard/developer" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">
                    Developerspage
                </Link>
                <Link to="/dashboard/tours" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">
                    Tours
                </Link>
                <Link to="/dashboard/guides" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">
                    Guides
                </Link>
                <Link to="/dashboard/bookings" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">
                    Bookings
                </Link>
                <Link to="/dashboard/reviews" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">
                    Reviews
                </Link>

                <div className="flex-grow"></div>

                <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-800 text-black font-medium text-center transition"
                >
                    Logout
                </button>
            </nav>

            <main className="flex-1 p-10">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;
