import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Dashboard from './Detail'
import Achievement from './achievement'
import MiniWeb from "./MiniWeb";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/mini-web" element={<MiniWeb />} />
      </Routes>
    </Router>
  )
}

export default App
