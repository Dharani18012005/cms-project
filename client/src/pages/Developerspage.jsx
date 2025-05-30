import React from 'react';

const developers = [
    {
        name: 'Aarthi Vishakha',
        role: 'Frontend Developer',
        bio: 'Specializes in HTML,CSS and React development.',
        email: 'aarthivishakha@gmail.com',
        education:'B.E computer science and Engineering',
    },
    {
        name: 'Abiraina K',
        role: 'Frontend Developer',
        bio: 'Expert in Node.js and database management.',
        email: 'kandhanabiraina@gmail.com',
        education:'B.E computer science and Engineering',
    },
    {
        name: 'Dharani S',
        role: 'Frontend Developer',
        bio: 'Loves building scalable web applications.',
        email: 'dharuu1801@gmail.com',
        education:'B.E computer science and Engineering',
    },
];

function Developerspage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-100">
            <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
                    Meet The Developers
                </h1>
                <ul className="space-y-3 mb-8">
                    {developers.map((dev) => (
                        <li
                            key={dev.email}
                            className="bg-purple-50 shadow rounded-lg p-6 border border-purple-200"
                        >
                            <strong className="text-xl text-purple-800">{dev.name}</strong>
                            <span className="block text-purple-600 mb-2">{dev.role}</span>
                            <p className="mb-1 text-gray-800">{dev.bio}</p>
                            <p className="mb-1 text-gray-500">{dev.education}</p>
                            <a
                                href={`mailto:${dev.email}`}
                                className="text-purple-500 hover:underline"
                            >
                                {dev.email}
                            </a>
                        </li>
                    ))}
                </ul>
                <footer className="mt-4 text-center">
                    <a
                        href="/"
                        className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    >
                        Back to Home Page
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default Developerspage;