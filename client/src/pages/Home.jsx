import React from 'react';

function Home() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-black text-center  mb-4">Explore the World with Our Travel Guide</h1>
            <p className="text-lg text-gray-700 mb-6 text-center">
                Discover top destinations, plan your trips, and manage your travel experiences all in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-teal-300 rounded-4xl shadow-md p-2 flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Destinations" className="w-24 h-24 rounded-full mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Top Destinations</h2>
                    <p className="text-black-600 text-center">Browse curated lists of must-visit places and hidden gems around the globe.</p>
                </div>
                <div className="bg-teal-200 rounded-4xl shadow-md p-2 flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Plan Trips" className="w-24 h-24 rounded-full mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Plan Your Trip</h2>
                    <p className="text-gray-600 text-center">Create personalized itineraries, book hotels, and manage your travel schedule easily.</p>
                </div>
                <div className="bg-teal-300  rounded-4xl shadow-md p-2 flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Travel Tips" className="w-24 h-24 rounded-full mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Travel Tips</h2>
                    <p className="text-black-600 text-center">Get expert advice, safety guidelines, and packing checklists for a smooth journey.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;