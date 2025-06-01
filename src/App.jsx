import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import IssuerPage from './components/IssuerPage'
import CredentialManagerPage from './components/CredentialManagerPage'
import { RoleProvider } from './context/RoleContext'

function App() {
  return (
    <RoleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/issuer" element={<IssuerPage />} />
          <Route path="/credential-manager" element={<CredentialManagerPage />} />
        </Routes>
      </Router>
    </RoleProvider>
  )
}

export default App