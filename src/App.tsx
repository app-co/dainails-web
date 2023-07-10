import { useState } from 'react'
import { GlobalStyle } from './themes/global'
import { Home } from './pages/Home'

function App() {
  return (
    <div style={{ flex: 1 }}>
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
