import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import HospitalityPage from './pages/HospitalityPage'
import RealEstatePage from './pages/RealEstatePage'
import StayPage from './pages/StayPage'
import SectionPage from './pages/SectionPage'
import ConversationsPage from './pages/ConversationsPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/suite" element={<DashboardPage />} />

        <Route
          path="/suite/assistants"
          element={<SectionPage />}
        />

        <Route
          path="/suite/conversations"
          element={<ConversationsPage />}
        />

        <Route
          path="/suite/analytics"
          element={<SectionPage />}
        />

        <Route
          path="/suite/knowledge"
          element={<SectionPage />}
        />

        <Route
          path="/suite/settings"
          element={<SectionPage />}
        />

        <Route
          path="/hospitality"
          element={<HospitalityPage />}
        />

        <Route
          path="/real-estate"
          element={<RealEstatePage />}
        />

        <Route
          path="/stay"
          element={<StayPage />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
