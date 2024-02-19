import React, { useState } from 'react'
import { auth } from '../Config'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            localStorage.setItem("token" , "authenticated");
            localStorage.setItem("email" , email);
            navigate('/')
        }).catch(err => setError("Invalid Email or Password"));
    }

    return (
        <>
        <Navbar/>
        <div className="login-container">
        <div className="container">
            <h2 className="login-title">Login</h2>
            <br />
            <form autoComplete="off" className="login-form" onSubmit={login}>
            <label htmlFor="email" className="login-label">
                Email
            </label>
            <input
                type="email"
                className="login-input"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label htmlFor="password" className="login-label">
                Password
            </label>
            <input
                type="password"
                className="login-input"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br />
            <div className="login-button">
                <button type="submit" className="login-submit">
                LOGIN
                </button>
            </div>
            </form>
            {error && <span className="login-error">{error}</span>}
            <br />
            <span>
            Don't have an account? Register <Link to="/register">Here</Link>
            </span>
        </div>
        </div></>
    )
}

export default Login;