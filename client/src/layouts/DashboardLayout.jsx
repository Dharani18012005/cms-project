import React from 'react';

function DashboardLayout(props) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 flex">
            <nav className="flex flex-col space-y-4 w-64 bg-purple-100/80 shadow-lg py-10 px-4">
                <h1 className="text-2xl font-bold mb-8 text-black text-center">DASHBOARD</h1>
                <a href="/destinations" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">About</a>
                <a href="/tours" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">Tours</a>
                <a href="/guides" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">Guides</a>
                <a href="/bookings" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">Bookings</a>
                <a href="/reviews" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-400 text-black font-medium text-center transition">Reviews</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <a href="/settings" className="px-4 py-2 rounded bg-purple-300 hover:bg-purple-800 text-black font-medium text-center transition">Logout</a>
            </nav>
            <main className="flex-1 p-10">
                {props.children}
            </main>
        </div>
    );
}

export default DashboardLayout;