import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => response.text())
      .then(data => {
        console.log('Fetched data:', data);
        setMessage(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>SkillBridge</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
