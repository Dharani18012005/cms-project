import React from 'react';

function About() {
    return (
        <>
    <div className="max-w-3xl mx-auto p-8 bg-purple-300 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold text- mb-4">Tourism & Travel Guide Management</h1>
        <p className="text-black mb-6">
            Welcome to our Tourism and Travel Guide Management platform! Our mission is to make your travel planning seamless and enjoyable. Discover top destinations, manage your itineraries, and access expert travel guides all in one place.
        </p>
        <ul className="list-disc list-inside text-black space-y-2">
            <li>
                <span className="font-semibold text-purple-600">Explore Destinations:</span> Browse curated travel spots, attractions, and hidden gems.
            </li>
            <li>
                <span className="font-semibold text-purple-600">Personalized Itineraries:</span> Create, edit, and manage your travel plans with ease.
            </li>
            <li>
                <span className="font-semibold text-purple-600">Expert Guides:</span> Access detailed guides and tips from experienced travelers.
            </li>
            <li>
                <span className="font-semibold text-purple-600">Community Support:</span> Connect with fellow travelers and share your experiences.
            </li>
        </ul>
        <div className="mt-8">
            <p className="text-gray-800">
                Start your adventure with us and make every journey unforgettable!
            </p>
        </div>
    </div>
        </>
    );
}

export default About;