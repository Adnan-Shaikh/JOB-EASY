import './App.css';
import React, { useState } from 'react';



const LandingPage = () => {
  const [userType, setUserType] = useState('employee');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#f8f9fa'
    }}>
      {/* About Section */}
      <div style={{
        flex: 1,
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#ffffff'
      }}>
        <h1 style={{ marginBottom: '1rem', color: '#4e6ef6' }}>Non-Technical Job Portal</h1>
        <p>Connecting you with roles like receptionist, CFE, admin staff, support, and more.</p>
        <ul>
          <li>Easy job search and application for non-technical positions.</li>
          <li>Fast signup for employees and employers.</li>
          <li>Find opportunities in your local area.</li>
        </ul>
      </div>

      {/* Login/Signup Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#e9ecef'
      }}>
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          minWidth: '320px'
        }}>
          {/* User Type Toggle */}
          <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setUserType('employee')}
              style={{
                flex: 1,
                padding: '0.5rem',
                background: userType === 'employee' ? '#4e6ef6' : '#f1f3f4',
                color: userType === 'employee' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '8px 0 0 8px',
                cursor: 'pointer'
              }}
            >
              Employee Login
            </button>
            <button
              onClick={() => setUserType('employer')}
              style={{
                flex: 1,
                padding: '0.5rem',
                background: userType === 'employer' ? '#4e6ef6' : '#f1f3f4',
                color: userType === 'employer' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '0 8px 8px 0',
                cursor: 'pointer'
              }}
            >
              Employer Login
            </button>
          </div>

          {/* Form */}
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Email or phone"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginBottom: '0.5rem'
                }}
                required
              />
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #ccc'
                  }}
                  required
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: '#4e6ef6'
                  }}
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>

            <button
              style={{
                width: '100%',
                background: '#4e6ef6',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '6px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
              type="submit"
            >
              Login
            </button>
          </form>
          <div style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.95rem'
          }}>
            <a href="/signup" style={{ color: '#4e6ef6', textDecoration: 'none' }}>
              New {userType}? Sign up here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
