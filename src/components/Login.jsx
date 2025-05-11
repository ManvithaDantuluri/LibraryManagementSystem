import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '', role: 'student' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Invalid email, password, or role');
      }

      const data = await response.json(); // ✅ Expect JSON with token and role
      localStorage.setItem('token', data.token); // ✅ Store JWT
      localStorage.setItem('role', data.role);   // Optional: store role

      console.log('Token:', data.token);
      console.log('Role:', data.role);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={onChange}
          />

          <select
            name="role"
            value={user.role}
            onChange={onChange}
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1rem',
            }}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="librarian">Librarian</option>
          </select>

          {error && <div style={{ color: 'red', marginBottom: '0.5rem' }}>{error}</div>}

          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <span>Don't have an account? </span>
            <a href="/register" style={{ color: '#fff', textDecoration: 'underline' }}>
              Register
            </a>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
