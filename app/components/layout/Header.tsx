import React from 'react';

export const Header = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '0 10px'
    }}
  >
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Painel do Professor</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>👤 Prof. Maria Silva</span>
      <img 
        src="/mock-avatar.png" 
        alt="Avatar" 
        style={{ width: '35px', height: '35px', borderRadius: '50%' }} 
      />
    </div>
  </div>
);
