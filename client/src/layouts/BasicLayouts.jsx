import React from 'react';
import { Outlet } from 'react-router';

function BasicLayouts() {
    return (
        <div>
    
            <header className="bg-teal-700 text-black p-6 shadow-md">
                <div className="flex justify-end space-x-4">
                    <a
                        href="/signin"
                        className="bg-white text-blue-900 font-semibold px-4 py-2 rounded  hover:bg-blue-100 transition"
                    >
                        Sign-In
                    </a>
                    <a
                        href="/signup"
                        className="bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition"
                    >
                        Sign-Up
                    </a>
                </div>
                <h1 className="text-3xl font-bold text-center">Travel & Tourism Guide</h1>
                <p className="mt-2 text-lg text-center">Discover destinations, plan trips, and explore the world!</p>
            </header>
            <nav className="bg-teal-500 text-black flex space-x-6 px-6 py-3">
                <a href="/" className="hover:underline">Home</a>
                <a href="/destinations" className="hover:underline">Destinations</a>
                <a href="/guides" className="hover:underline">Guides</a>
                {/* <a href="/about" className="hover:underline">About</a> */}
                <a href="/contact" className="hover:underline">Contact</a>
            </nav>
            <main className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow mt-6">
                <Outlet/>
            </main>
            <footer className="bg-teal-700 text-black text-center py-4 mt-10">
                &copy; {new Date().getFullYear()} Travel & Tourism Guide. All rights reserved.
            </footer>
        </div>
    );
}

export default BasicLayouts;