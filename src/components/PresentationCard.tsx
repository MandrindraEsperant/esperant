'use client'

import React from 'react'

const PresentationCard = () => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '1rem',
    }}>
      <h2>Je suis Mandrindra Espérant</h2>
      <p>Développeur Web passionné par la technologie.</p>
      <button
        onClick={() => alert('Contactez-moi par email 📩')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Me contacter
      </button>
    </div>
  )
}

export default PresentationCard
