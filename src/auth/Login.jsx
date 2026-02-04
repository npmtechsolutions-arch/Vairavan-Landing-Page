import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  // ========================================
  // STATE MANAGEMENT
  // ========================================
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ========================================
  // LOGIN HANDLER
  // ========================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    // Admin Login Check
    if (username === 'vairavan' && password === 'vairavan123') {
      onLogin('admin');
      return;
    }

    // Prevent using admin credentials incorrectly
    if (username === 'vairavan' && password !== 'vairavan123') {
      setError('Invalid admin credentials');
      return;
    }

    // Customer Login (any other valid credentials)
    onLogin('customer');
  };

  // ========================================
  // RENDER
  // ========================================
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <div className="logo-section">
            <div className="logo-icon">📱</div>
            <h1 className="brand-name">BillFlow POS</h1>
          </div>
          <p className="company-name">NPM Tech Solutions</p>
        </div>

        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to access your dashboard</p>

          {error && (
            <div className="error-banner">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Username / Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                autoComplete="username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>

          <div className="demo-credentials">
            <p className="demo-title">🔑 Demo Credentials:</p>
            <div className="credentials-list">
              <div className="credential-item">
                <strong>Admin:</strong>
                <span>vairavan / vairavan123</span>
              </div>
              <div className="credential-item">
                <strong>Customer:</strong>
                <span>Any username & password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
