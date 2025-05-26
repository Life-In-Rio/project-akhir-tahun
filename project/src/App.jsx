import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Dashboard from './Detail'
import Achievement from './achievement'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Router>
  )
}

export default App
