import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Home, TeacherDashboard, SetPaper } from './pages'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
          <Route path='/set-paper' element={<SetPaper />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
