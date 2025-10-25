import React from 'react';

export default function SearchBar({ value, onChange, placeholder = '' }) {
  return (
    <input
      style={{
        width: '400px',       
        maxWidth: '100%',      
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '16px',
        transition: 'all 0.2s ease'
      }}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Search users by name"
    />
  );
}
