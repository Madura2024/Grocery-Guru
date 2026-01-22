import React from 'react'
import { ShoppingListProvider } from './context/ShoppingListContext'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <ShoppingListProvider>
      <Dashboard />
    </ShoppingListProvider>
  )
}

export default App
