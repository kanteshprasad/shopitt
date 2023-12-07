import React, { useState } from 'react';

const LoginForm = () => {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ backgroundColor: 'white', border:'1px solid black', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#FFA500' }}>Login</h2>
        <label style={{ display: 'block', margin: '10px 0', color: '#333' }}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
        </label>
        <label style={{ display: 'block', margin: '10px 0', color: '#333' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
        </label>
        <button type="submit" style={{ backgroundColor: '#FFA500', color: 'white', padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
