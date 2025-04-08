import React from 'react'

function simpleLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw', padding: "10%", display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column", gap: "2rem" }}>
        {children}
    </div>
  )
}

export default simpleLayout
