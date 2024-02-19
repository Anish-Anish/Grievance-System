import React, { useState } from 'react'
import { auth, db } from '../Config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

export const Signup = (props) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                navigate('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message.substring(10)));
    }

    return (
        <>
        <Navbar/>
        <div className="auth-container">
        <div className="container">
            <h2 className="auth-title">Sign up</h2>
            <br />
            <form autoComplete="off" className="auth-form" onSubmit={signup}>
            <label htmlFor="name" className="auth-label">
                Name
            </label>
            <input
                type="text"
                className="auth-input"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <br />
            <label htmlFor="email" className="auth-label">
                Email
            </label>
            <input
                type="email"
                className="auth-input"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label htmlFor="password" className="auth-label">
                Password
            </label>
            <input
                type="password" 
                className="auth-input"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br />
            <div className="auth-button">
                <button type="submit" className="auth-submit">
                SUBMIT
                </button>
            </div>
            </form>
            {error && <span className="auth-error">{error}</span>}
            <br />
            <span>
            Already have an account? Login <Link to="/login">Here</Link>
            </span>
        </div>
        </div>
        </>
    )
}


export default Signup;