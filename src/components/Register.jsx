import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        fullName,
        password,
        role: role.toUpperCase()


      })
    });

    if (response.ok) {
      alert('Registered successfully!');
      navigate('/');
    } else {
      const errorData = await response.text();
      alert(`Registration failed: ${errorData}`);
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('An error occurred while registering.');
  }
};


  return (
    <div className="auth-background">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
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

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
