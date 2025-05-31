import React from 'react';

function Guides() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h4 className="text-2xl font-bold text-black mb-6 text-center">Tour & Travel Management Guides</h4>
                <ul className="space-y-4">
                    <li className="p-4 bg-purple-100/80 rounded shadow hover:bg-pink-100 transition">
                        <h5 className="font-semibold text-lg text-purple-500">1. Adding a New Tour Package</h5>
                        <p className="text-black mt-1">Navigate to the "Tours" section and click "Add New". Fill in the details and save.</p>
                    </li>
                    <li className="p-4 bg-pink-100/80 rounded shadow hover:bg-purple-100 transition">
                        <h5 className="font-semibold text-lg text-pink-500">2. Managing Bookings</h5>
                        <p className="text-black mt-1">Go to "Bookings" to view, approve, or cancel customer reservations.</p>
                    </li>
                    <li className="p-4 bg-purple-100/80 rounded shadow hover:bg-pink-100 transition">
                        <h5 className="font-semibold text-lg text-purple-500">3. Developer Information</h5>
                        <p className="text-black mt-1">Visit the "DevoloperPages" to view  profiles and contact details.</p>
                    </li>
                    <li className="p-4 bg-pink-100/80 rounded shadow hover:bg-purple-100 transition">
                        <h5 className="font-semibold text-lg text-pink-500">4. Viewing Customer Reviews</h5>
                        <p className="text-black mt-1">Check the "Feedback" section to read and respond to customer reviews.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Guides;