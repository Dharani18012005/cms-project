import React from 'react';

function Developerspage(props) {
    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Developers</h2>
            <ul className="space-y-6">
                <li className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
                    <strong className="text-lg text-blue-900">Aarthi Vishakha</strong> <span className="text-gray-600">- Frontend Developer</span><br />
                    <em className="block text-blue-700 mb-1">Specializes in HTML, CSS and React development.</em>
                    <span className="block text-gray-700">Email: <a href="mailto:aarthivishakha@gmail.com" className="text-blue-600 underline">aarthivishakha@gmail.com</a></span>
                    <span className="block text-gray-700">Education: B.E Computer Science and Engineering</span>
                </li>
                <li className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
                    <strong className="text-lg text-blue-900">Abiraina K</strong> <span className="text-gray-600">- Frontend Developer</span><br />
                    <em className="block text-blue-700 mb-1">Expert in Node.js and database management.</em>
                    <span className="block text-gray-700">Email: <a href="mailto:kandhanabiraina@gmail.com" className="text-blue-600 underline">kandhanabiraina@gmail.com</a></span>
                    <span className="block text-gray-700">Education: B.E Computer Science and Engineering</span>
                </li>
                <li className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
                    <strong className="text-lg text-blue-900">Dharani S</strong> <span className="text-gray-600">- Frontend Developer</span><br />
                    <em className="block text-blue-700 mb-1">Loves building scalable web applications.</em>
                    <span className="block text-gray-700">Email: <a href="mailto:dharuu1801@gmail.com" className="text-blue-600 underline">dharuu1801@gmail.com</a></span>
                    <span className="block text-gray-700">Education: B.E Computer Science and Engineering</span>
                </li>
            </ul>
        </div>
    );
}

export default Developerspage;