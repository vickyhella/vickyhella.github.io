import React from 'react';

export default function ColorText({children}) {
  return (
    <span
      style={{
        borderRadius: '2px',
        color: '#438373',
        padding: '0.2rem',
        fontWeight: 'bold'
      }}>
      {children}
    </span>
  );
}