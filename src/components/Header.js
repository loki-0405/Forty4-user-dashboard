import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        width: '100%',
        background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
        padding: '15px 0',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: '700',
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#ffdd57'}
          onMouseOut={e => e.currentTarget.style.background = 'transparent'}
        >
          User Dashboard
        </Link>
      </div>
    </header>
  );
}
