import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password, state, country });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-purple-100 to-white">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-10 space-y-6 border border-purple-100"
            >
                <h2 className="text-3xl font-extrabold text-purple-700 text-center mb-4 tracking-tight drop-shadow">Sign Up</h2>
                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 transition"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 transition"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 transition"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700">State</label>
                    <input
                        type="text"
                        value={state}
                        onChange={e => setState(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 transition"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700">Country</label>
                    <input
                        type="text"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 transition"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition shadow-md"
                >
                    Sign Up
                </button>
                <div className="text-center pt-2">
                    <span className="text-gray-600 text-sm">Already have an account? </span>
                    <a href="/login" className="text-purple-600 hover:underline text-sm font-semibold">Sign in</a>
                </div>
            </form>
        </div>
    );
}

export default Signup;
