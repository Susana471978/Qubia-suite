import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import HospitalityPage from './pages/HospitalityPage'
import RealEstatePage from './pages/RealEstatePage'
import GuestPage from './pages/GuestPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/suite" element={<DashboardPage />} />
        <Route path="/hospitality" element={<HospitalityPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/guest" element={<GuestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
