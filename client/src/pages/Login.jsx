import React from 'react';
import { useState,useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    //const navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const{register}=useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(email,password);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: '#22223b',
                    padding: '2rem',
                    borderRadius: '8px',
                    maxWidth: '350px',
                    margin: '2rem auto',
                    boxShadow: '0 4px 24px rgba(34,34,59,0.15)'
                }}
            >
                <h2 style={{ color: '#4a4e69', marginBottom: '1.5rem', textAlign: 'center' }}>Login</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ color: '#9a8c98', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                    <input
                        type="email"
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #c9ada7',
                            background: '#f2e9e4',
                            color: '#22223b'
                        }}
                        placeholder="Enter your email"
                    />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ color: '#9a8c98', display: 'block', marginBottom: '0.5rem' }}>Password</label>
                    <input
                        type="password"
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #c9ada7',
                            background: '#f2e9e4',
                            color: '#22223b'
                        }}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: '#4a4e69',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                >
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;